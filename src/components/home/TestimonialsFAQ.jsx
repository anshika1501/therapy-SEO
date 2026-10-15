import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Container from '../common/Container';
import { faqs } from '../../data/therapyData';

export default function TestimonialsFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FCFAF6] border-b border-[#E7DFD3]">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs uppercase tracking-widest font-semibold text-sage-700 mb-3">
            Common Questions
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif text-charcoal-900 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-charcoal-700 leading-relaxed font-normal">
            Everything you need to know about getting started, scheduling, fees, and what to expect during our sessions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-[#E7DFD3] border-y border-[#E7DFD3]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-6 sm:py-7">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left flex items-start justify-between gap-6 focus:outline-none group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl font-medium text-charcoal-900 group-hover:text-sage-700 transition-colors">
                    {faq.question}
                  </span>
                  <span className="mt-1 text-sage-700 shrink-0">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 text-charcoal-700 text-base leading-relaxed pr-8 font-normal">
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
