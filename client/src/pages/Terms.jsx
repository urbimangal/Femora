import { Link } from "react-router-dom";

function Terms() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link
          to="/signup"
          className="text-sm font-medium text-violet-600 transition hover:text-violet-700"
        >
          ← Back to Sign Up
        </Link>

        <div className="mt-8 rounded-3xl bg-white p-6 shadow-xl sm:p-10 lg:p-14">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Terms & Conditions
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Last updated: August 2026
          </p>

          <div className="mt-10 space-y-8 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                1. Acceptance of Terms
              </h2>

              <p className="mt-3 leading-7">
                By accessing or using Femora, you agree to these Terms &
                Conditions. If you do not agree with these terms, please do
                not use the platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                2. About Femora
              </h2>

              <p className="mt-3 leading-7">
                Femora is a women's healthcare technology platform designed
                to provide health-related information, tracking tools, and
                personalized digital wellness features.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                3. Medical Disclaimer
              </h2>

              <p className="mt-3 leading-7">
                Information provided through Femora is intended for
                educational and informational purposes only. Femora does not
                replace professional medical advice, diagnosis, or treatment.
                Always consult a qualified healthcare professional for
                medical concerns.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                4. User Responsibilities
              </h2>

              <p className="mt-3 leading-7">
                Users are responsible for providing accurate information and
                for maintaining the confidentiality of their account
                credentials.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                5. Use of the Platform
              </h2>

              <p className="mt-3 leading-7">
                Users agree not to misuse Femora, attempt to gain
                unauthorized access, interfere with the platform, or use its
                services for unlawful purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                6. Changes to These Terms
              </h2>

              <p className="mt-3 leading-7">
                These Terms & Conditions may be updated as Femora evolves.
                Updated terms will be reflected on this page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Terms;