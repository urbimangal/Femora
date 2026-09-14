import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import crypto from "crypto";
import nodemailer from "nodemailer";

export const registerUser = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;

        if (!name || !email || !password || !confirmPassword) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                message: "Passwords do not match",
            });
        }

        if (password.length < 8) {
            return res.status(400).json({
                message: "Password must be at least 8 characters",
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                message: "User already exists with this email",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        const token = jwt.sign(
            {
                userId: user._id,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d",
            }
        );

        return res.status(201).json({
            message: "Account created successfully",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });

    } catch (error) {
        console.error("Register error:", error);

        return res.status(500).json({
            message: "Something went wrong while creating the account",
        });
    }
};
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required",
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }

        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }

        const token = jwt.sign(
            {
                userId: user._id,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d",
            }
        );

        return res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });

    } catch (error) {
        console.error("Login error:", error);

        return res.status(500).json({
            message: "Something went wrong while logging in",
        });
    }
};
export const getMe = async (req, res) => {
    try {

        const user = await User.findById(req.userId).select("-password");


        if (!user) {

            return res.status(404).json({
                message: "User not found",
            });

        }


        return res.status(200).json({
            user,
        });

    } catch (error) {

        console.error("Get user error:", error);

        return res.status(500).json({
            message: "Something went wrong",
        });

    }
};
export const forgotPassword = async (req, res) => {
    try {

        const { email } = req.body;


        // Check if email is provided
        if (!email) {
            return res.status(400).json({
                message: "Email is required",
            });
        }


        // Find the user using email
        const user = await User.findOne({ email });


        // Check if user exists
        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }


        // Generate a secure random reset token
        const resetToken = crypto
            .randomBytes(32)
            .toString("hex");


        // Hash the token before storing it in MongoDB
        const hashedToken = crypto
            .createHash("sha256")
            .update(resetToken)
            .digest("hex");


        // Store hashed token in database
        user.passwordResetToken = hashedToken;


        // Token will expire after 10 minutes
        user.passwordResetExpires =
            Date.now() + 10 * 60 * 1000;


        // Save updated user
        await user.save();
        console.log("EMAIL_USER:", process.env.EMAIL_USER);

        console.log(
        "EMAIL_PASSWORD exists:",
        Boolean(process.env.EMAIL_PASSWORD)
        );

        // Reset password URL
        const resetURL =
            `http://localhost:5173/reset-password/${resetToken}`;


        // Create email transporter
        const transporter = nodemailer.createTransport({

            service: "gmail",

            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },

        });


        // Send reset email
        await transporter.sendMail({

            from: process.env.EMAIL_USER,

            to: user.email,

            subject: "Femora Password Reset",

            html: `
                <h2>Password Reset Request</h2>

                <p>Hello ${user.name},</p>

                <p>
                    We received a request to reset your Femora password.
                </p>

                <p>
                    Click the link below to reset your password:
                </p>

                <a href="${resetURL}">
                    Reset Password
                </a>

                <p>
                    This link will expire in 10 minutes.
                </p>

                <p>
                    If you did not request this, please ignore this email.
                </p>
            `,

        });


        return res.status(200).json({

            message:
                "Password reset link sent to your email",

        });
        

    } catch (error) {

        console.error(
            "Forgot password error:",
            error.message
        );


        return res.status(500).json({

            message:
                "Something went wrong",

        });

    }
};
export const resetPassword = async (req, res) => {
    try {
        const { token } = req.params;

        const { password, confirmPassword } = req.body;

        // Check if passwords are provided
        if (!password || !confirmPassword) {
            return res.status(400).json({
                message: "Password and confirm password are required",
            });
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({
                message: "Passwords do not match",
            });
        }

        // Check password length
        if (password.length < 8) {
            return res.status(400).json({
                message: "Password must be at least 8 characters",
            });
        }

        // Hash the token received from URL
        const hashedToken = crypto
            .createHash("sha256")
            .update(token)
            .digest("hex");

        // Find user with matching token and valid expiry time
        const user = await User.findOne({
            passwordResetToken: hashedToken,
            passwordResetExpires: {
                $gt: Date.now(),
            },
        });

        // Check if token is valid
        if (!user) {
            return res.status(400).json({
                message: "Invalid or expired reset token",
            });
        }

        // Hash new password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Update password
        user.password = hashedPassword;

        // Remove reset token after successful password reset
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;

        // Save updated user
        await user.save();

        return res.status(200).json({
            message: "Password reset successful",
        });

    } catch (error) {
        console.error("Reset password error:", error);

        return res.status(500).json({
            message: "Something went wrong",
        });
    }
};