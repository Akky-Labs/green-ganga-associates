"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services does Green Ganga Associates provide?",
    answer: "We offer end-to-end landscaping solutions, including design & development, maintenance, water management (irrigation), vertical & terrace gardens, and organic farming.",
  },
  {
    question: "How long does a landscaping project take to complete?",
    answer: "Timeline depends on the scope. A small residential garden take 2-3 weeks, while larger farmhouse projects can range from several weeks to months.",
  },
  {
    question: "Do you offer regular garden maintenance after the setup?",
    answer: "Yes, we provide flexible maintenance packages (weekly, monthly, or quarterly) to ensure your landscape remains healthy and vibrant year-round.",
  },
  {
    question: "I have a small balcony or terrace. Can you still help?",
    answer: "Absolutely! We specialize in urban gardening solutions like vertical gardens and terrace designs that are perfect for compact spaces.",
  },
  {
    question: "Is your work eco-friendly and sustainable?",
    answer: "Sustainability is core to our work. We use native plant species, smart irrigation systems to minimize waste, and eco-friendly gardening practices.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-deep-green/5 blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-accent-gold/5 blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="section-decorator-center">
            <span className="text-sm font-semibold text-fresh-green uppercase tracking-widest">FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-deep-green mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-sm lg:text-base max-w-2xl mx-auto">
            Quick answers to our most common queries.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group transition-all duration-300 rounded-2xl border ${
                openIndex === index
                  ? "border-deep-green bg-deep-green/5"
                  : "border-gray-100 bg-white hover:border-deep-green/20"
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-4 lg:p-5 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center gap-3">
                  <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                    openIndex === index 
                      ? "bg-deep-green text-white" 
                      : "bg-deep-green/10 text-deep-green group-hover:bg-deep-green group-hover:text-white"
                  }`}>
                    {openIndex === index ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </div>
                  <span className={`text-sm lg:text-base font-bold transition-colors ${
                    openIndex === index ? "text-deep-green" : "text-gray-800 group-hover:text-deep-green"
                  }`}>
                    {faq.question}
                  </span>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 pb-5 pt-0 ml-10">
                  <p className="text-muted-foreground leading-relaxed text-xs lg:text-sm">
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
