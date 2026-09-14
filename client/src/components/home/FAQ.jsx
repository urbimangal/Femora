import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is Femora free to use?",
    answer:
      "Yes. Femora offers core health tracking features for free. Additional premium features may be introduced in the future.",
  },
  {
    question: "Is my health data secure?",
    answer:
      "Absolutely. Your health information is encrypted and stored securely. Protecting your privacy is one of our top priorities.",
  },
  {
    question: "Can I track pregnancy with Femora?",
    answer:
      "Yes. Femora includes pregnancy support with milestone tracking, reminders, and personalized health guidance.",
  },
  {
    question: "Does Femora replace professional medical advice?",
    answer:
      "No. Femora provides educational content and AI-powered guidance but should never replace consultation with a qualified healthcare professional.",
  },
  {
    question: "Can I set medicine reminders?",
    answer:
      "Yes. Femora lets you schedule medicine reminders so you never miss an important dose.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gradient-to-b from-violet-50 to-white py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
            ❓ FAQ
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Everything you need to know about Femora before getting started.
          </p>
        </div>

        <div className="mt-16 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`group overflow-hidden rounded-3xl border transition-all duration-300 ${
                openIndex === index
                  ? "border-violet-400 bg-violet-50 shadow-xl"
                  : "border-gray-200 bg-white shadow-md hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold transition-all duration-300 ${
                      openIndex === index
                        ? "bg-violet-600 text-white"
                        : "bg-violet-100 text-violet-600 group-hover:bg-violet-600 group-hover:text-white"
                    }`}
                  >
                    {index + 1}
                  </div>

                  <h3
                    className={`text-lg font-semibold transition-colors duration-300 ${
                      openIndex === index
                        ? "text-violet-700"
                        : "text-gray-900 group-hover:text-violet-600"
                    }`}
                  >
                    {faq.question}
                  </h3>
                </div>

                <ChevronDown
                  size={24}
                  className={`transition-all duration-300 ${
                    openIndex === index
                      ? "rotate-180 text-violet-600"
                      : "text-gray-500 group-hover:text-violet-600"
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-20 pb-6 leading-8 text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;