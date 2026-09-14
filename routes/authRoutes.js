import express from "express";

import {
    registerUser,
    loginUser,
    getMe,
    forgotPassword,
    resetPassword,
} from "../controllers/authController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/me", authMiddleware, getMe);

router.post("/forgot-password", forgotPassword);

router.patch("/reset-password/:token", resetPassword);

export default router;