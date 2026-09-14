import { Link } from "react-router-dom";

function PrivacyPolicy() {
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
            Privacy Policy
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Last updated: August 2026
          </p>

          <div className="mt-10 space-y-8 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                1. Information We Collect
              </h2>

              <p className="mt-3 leading-7">
                Femora may collect information that you provide when creating
                an account or using its features, such as your name, email
                address, and information that you voluntarily provide within
                the platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                2. How We Use Information
              </h2>

              <p className="mt-3 leading-7">
                Information may be used to provide and improve Femora's
                features, personalize the user experience, maintain account
                security, and communicate important service-related
                information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                3. Data Security
              </h2>

              <p className="mt-3 leading-7">
                Femora is designed with user privacy and data security in
                mind. Appropriate technical and organizational measures
                should be implemented to protect user information from
                unauthorized access or misuse.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                4. Health Information
              </h2>

              <p className="mt-3 leading-7">
                Health-related information provided by users should be treated
                as sensitive information. Users should only provide
                information they are comfortable storing and using within the
                platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                5. Third-Party Services
              </h2>

              <p className="mt-3 leading-7">
                Femora may integrate third-party services in the future.
                Information shared with such services will be handled
                according to their applicable privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                6. Changes to This Policy
              </h2>

              <p className="mt-3 leading-7">
                This Privacy Policy may be updated as Femora's features and
                services develop. Any updated version will be made available
                on this page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PrivacyPolicy;