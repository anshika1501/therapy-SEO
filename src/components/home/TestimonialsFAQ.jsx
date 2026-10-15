import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { faqs } from '../../data/therapyData';

export default function TestimonialsFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-linen-100">
      <Container>
        <SectionHeading
          eyebrow="Common Inquiries"
          title="Frequently Asked Questions"
          subtitle="Answers to common questions about starting therapy, Santa Monica sessions, and California telehealth."
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-linen-300 rounded-2xl bg-linen-50/70 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-sage-50/60 focus:outline-none transition"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg font-bold text-charcoal-900">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-linen-200 flex items-center justify-center text-charcoal-700 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-charcoal-700 text-sm sm:text-base leading-relaxed border-t border-linen-200/80">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
