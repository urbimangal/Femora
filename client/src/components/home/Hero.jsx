import { Link } from "react-router-dom";
import HeroIllustration from "../../assets/images/hero-illustration.png";

function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-violet-50 via-white to-pink-50">
      <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl flex-col-reverse items-center justify-between gap-14 px-6 py-16 lg:flex-row lg:px-8">
        
        <div className="max-w-2xl text-center lg:text-left">
          <span className="inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700">
            ✨ Smart Women's Health Platform
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            Empowering Every Woman
            <span className="block text-violet-600">
              to Take Charge of Her Health.
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Track your cycle, manage medications, access trusted health
            resources, and stay in control of your wellness — all in one
            intelligent platform.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              to="/signup"
              className="rounded-xl bg-violet-600 px-8 py-3 text-center font-medium text-white transition hover:bg-violet-700"
            >
              Get Started
            </Link>

            <Link
              to="/features"
              className="rounded-xl border border-violet-600 px-8 py-3 text-center font-medium text-violet-600 transition hover:bg-violet-50"
            >
              Explore Features
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={HeroIllustration}
            alt="Femora Hero Illustration"
            className="w-full max-w-md lg:max-w-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;