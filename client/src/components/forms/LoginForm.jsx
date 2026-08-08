import React from 'react'

import { useState } from "react";
import { Link } from 'react-router-dom';

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="space-y-5">

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Email Address
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          required
          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
        />
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">
            Password
          </label>

          <Link
            to="/forgot-password"
            className="text-sm font-medium text-violet-600 transition hover:text-violet-700"
          >
            Forgot Password?
          </Link>
        </div>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            required
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

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          className="h-4 w-4 cursor-pointer accent-violet-600"
        />

        <label className="cursor-pointer text-sm text-gray-600">
          Remember me
        </label>
      </div>

      <button
        type="submit"
        className="w-full cursor-pointer rounded-xl bg-violet-600 py-3.5 font-semibold text-white shadow-lg shadow-violet-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-xl"
      >
        Sign In
      </button>

    </form>
  );
}

export default LoginForm;
