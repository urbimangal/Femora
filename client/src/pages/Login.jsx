import React from 'react'

import { Link } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm";

function Login() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-pink-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-2">

          <div className="hidden bg-violet-600 p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14">
            <div>
              <Link to="/" className="text-3xl font-bold">
                Femora
              </Link>

              <div className="mt-16">
                <h1 className="text-4xl font-bold leading-tight xl:text-5xl">
                  Welcome back to your health journey.
                </h1>

                <p className="mt-6 max-w-md text-base leading-7 text-violet-100 xl:text-lg">
                  Sign in to continue your personalized healthcare
                  journey with Femora.
                </p>
              </div>
            </div>

            <p className="text-sm text-violet-200">
              Your health. Your journey. Your Femora.
            </p>
          </div>

          <div className="flex items-center justify-center p-6 sm:p-10 lg:p-12 xl:p-14">
            <div className="w-full max-w-md">

              <Link
                to="/"
                className="text-sm font-medium text-gray-500 transition hover:text-violet-600"
              >
                ← Back to Home
              </Link>

              <div className="mt-8">
                <h2 className="text-3xl font-bold text-gray-900">
                  Welcome Back
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Sign in to access your Femora account.
                </p>
              </div>

              <div className="mt-8">
                <LoginForm />
              </div>

              <p className="mt-7 text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="font-semibold text-violet-600 transition hover:text-violet-700"
                >
                  Create Account
                </Link>
              </p>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default Login;
