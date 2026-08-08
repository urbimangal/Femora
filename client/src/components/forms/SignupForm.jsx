import { useState } from "react";
import { Link } from "react-router-dom";

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <form className="space-y-5">

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Full Name
        </label>

        <input
          type="text" required
          placeholder="Enter your full name"
          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
        />
      </div>

      <div>
        <label required className="mb-2 block text-sm font-medium text-gray-700">
          Email Address
        </label>

        <input
          type="email" required
          placeholder="Enter your email"
          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Password
        </label>

        <div className="relative">
          <input required
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 pr-16 text-gray-900 outline-none transition focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-sm font-medium text-violet-600 hover:text-violet-700"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Confirm Password
        </label>

        <div className="relative">
          <input required
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm your password"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 pr-16 text-gray-900 outline-none transition focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-sm font-medium text-violet-600 hover:text-violet-700"
          >
            {showConfirmPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <input required
          type="checkbox"
          className="mt-1 h-4 w-4 cursor-pointer accent-violet-600"
        />

        <p className="text-sm leading-6 text-gray-600">
            I agree to the{" "}
            <Link
                to="/terms"
                className="font-medium text-violet-600 hover:text-violet-700"
            >
                Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link
                to="/privacy-policy"
                className="font-medium text-violet-600 hover:text-violet-700"
            >
                Privacy Policy
            </Link>
            .
        </p>
      </div>

      <button
        type="submit"
        className="w-full cursor-pointer rounded-xl bg-violet-600 py-3.5 font-semibold text-white shadow-lg shadow-violet-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-xl"
      >
        Create Account
      </button>

    </form>
  );
}

export default SignupForm;