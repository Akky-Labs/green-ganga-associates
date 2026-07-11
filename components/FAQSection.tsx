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

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-20 lg:py-24 bg-linear-to-br from-deep-green via-deep-green to-dark-green text-white relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-white/5 blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-accent-gold/5 blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 mb-4 border border-white/10 backdrop-blur-md">
            <span className="text-accent-gold text-xs font-semibold uppercase tracking-widest">FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-white/70 text-sm lg:text-base max-w-2xl mx-auto">
            Quick answers to our most common queries.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group transition-all duration-300 rounded-2xl border ${
                openIndex === index
                  ? "border-accent-gold/50 bg-white/10 backdrop-blur-md shadow-lg"
                  : "border-white/10 bg-white/5 hover:bg-white/10"
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-4 lg:p-5 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center gap-3">
                  <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                    openIndex === index 
                      ? "bg-accent-gold text-deep-green" 
                      : "bg-white/15 text-white group-hover:bg-accent-gold group-hover:text-deep-green"
                  }`}>
                    {openIndex === index ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </div>
                  <span className={`text-sm lg:text-base font-bold transition-colors ${
                    openIndex === index ? "text-accent-gold" : "text-white/90 group-hover:text-white"
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
                  <p className="text-white/85 leading-relaxed text-xs lg:text-sm">
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
