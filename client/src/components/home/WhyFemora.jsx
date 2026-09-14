import { Link } from "react-router-dom";
import {
  HeartPulse,
  Pill,
  Brain,
  BookOpen,
  Baby,
  ChartColumn,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    title: "Smart Cycle Tracking",
    description:
      "Track your menstrual cycle with accurate predictions and personalized insights.",
    icon: HeartPulse,
    link: "/cycle-tracker",
  },
  {
    title: "Medicine Reminder",
    description:
      "Never miss your medications with smart reminders and timely notifications.",
    icon: Pill,
    link: "/medicine-reminder",
  },
  {
    title: "AI Health Assistant",
    description:
      "Get instant answers and personalized guidance for your everyday health concerns.",
    icon: Brain,
    link: "/ai-assistant",
  },
  {
    title: "Health Library",
    description:
      "Read trusted articles and educational resources designed for women's wellness.",
    icon: BookOpen,
    link: "/health-library",
  },
  {
    title: "Pregnancy Support",
    description:
      "Track milestones and receive personalized recommendations throughout pregnancy.",
    icon: Baby,
    link: "/pregnancy-support",
  },
  {
    title: "Health Insights",
    description:
      "Visualize your health trends with meaningful reports and beautiful analytics.",
    icon: ChartColumn,
    link: "/health-insights",
  },
];

function WhyFemora() {
  return (
    <section id="why-femora" className="bg-gradient-to-b from-white to-violet-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700">
            Why Femora?
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            More Than Just a Period Tracker
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Femora combines smart tracking, AI-powered guidance, medicine
            reminders, pregnancy care, and trusted health resources into one
            beautiful platform.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Link
                key={feature.title}
                to={feature.link}
                className="group rounded-3xl border border-violet-100 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-3 hover:border-violet-300 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-violet-600 group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {feature.description}
                </p>

                <div className="mt-6 flex items-center gap-2 font-medium text-violet-600 transition-all duration-300 group-hover:gap-4">
                  Learn More
                  <ArrowRight size={18} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyFemora;