import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-violet-600"
        >
          🌸 Femora
        </Link>

        <ul className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
          <li>
            <Link to="/" className="transition hover:text-violet-600">
              Home
            </Link>
          </li>

          <li>
            <Link to="/features" className="transition hover:text-violet-600">
              Features
            </Link>
          </li>

          <li>
            <Link to="/library" className="transition hover:text-violet-600">
              Library
            </Link>
          </li>

          <li>
            <Link to="/about" className="transition hover:text-violet-600">
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" className="transition hover:text-violet-600">
              Contact
            </Link>
          </li>
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            to="/login"
            className="font-medium text-gray-700 transition hover:text-violet-600"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="rounded-lg bg-violet-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-violet-700"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;