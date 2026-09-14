import { Link } from "react-router-dom";

function Footer() {
  const scrollToSection = (id) => {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
  return (
    <footer className="bg-[#0F172A] text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div>
            <h2 className="text-3xl font-bold text-white">
              Femora
            </h2>

            <p className="mt-5 max-w-sm leading-7 text-gray-400">
              Your trusted companion for smarter women's healthcare.
            </p>
          </div>

          {/* Navigation */}

          <div>
            <h3 className="text-lg font-semibold text-white">
              Navigation
            </h3>

            <ul className="mt-6 space-y-4">

              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="cursor-pointer transition hover:text-violet-400"
                >
                  Home
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("why-femora")}
                  className="cursor-pointer transition hover:text-violet-400"
                >
                  Features
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="cursor-pointer transition hover:text-violet-400"
                >
                  FAQ
                </button>
              </li>

            </ul>
          </div>

          {/* Resources */}

          <div>
            <h3 className="text-lg font-semibold text-white">
              Resources
            </h3>

            <ul className="mt-6 space-y-4">

              <li>

                <Link
                  to="/privacy-policy"
                  className="transition hover:text-violet-400"
                >
                  Privacy Policy
                </Link>

              </li>

              <li>

                <Link
                  to="/terms"
                  className="transition hover:text-violet-400"
                >
                  Terms & Conditions
                </Link>

              </li>

            </ul>
          </div>

          {/* Account */}

          <div>
            <h3 className="text-lg font-semibold text-white">
              Get Started
            </h3>

            <ul className="mt-6 space-y-4">

              <li>

                <Link
                  to="/signup"
                  className="transition hover:text-violet-400"
                >
                  Sign Up
                </Link>

              </li>

              <li>

                <Link
                  to="/login"
                  className="transition hover:text-violet-400"
                >
                  Login
                </Link>

              </li>

            </ul>
          </div>

        </div>

        <div className="mt-16 border-t border-gray-800 pt-8">

          <p className="text-center text-sm text-gray-500">
            © 2026 Femora. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;