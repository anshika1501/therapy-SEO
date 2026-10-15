import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import Container from '../common/Container';
import { servicesData } from '../../data/therapyData';

export default function ServicesGrid({ onOpenBooking }) {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#FCFAF6] border-b border-[#E7DFD3]">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <p className="text-xs uppercase tracking-widest font-semibold text-sage-700 mb-3">
            Areas of Clinical Focus
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-serif text-charcoal-900 leading-tight">
            Specialized Therapy for Adults & Professionals
          </h2>
          <p className="mt-4 text-base text-charcoal-700 leading-relaxed font-normal">
            Many clients come to therapy feeling high-functioning on the outside while quietly carrying internal exhaustion, worry, or unresolved past wounds. Here is how we work through each area:
          </p>
        </div>

        {/* Human Editorial List Layout */}
        <div className="space-y-8">
          {servicesData.map((service, index) => {
            const indexNumber = `0${index + 1}`;
            return (
              <div
                key={service.id}
                className="bg-[#F9F6F0] rounded-2xl p-8 sm:p-10 border border-[#E7DFD3] transition-all hover:border-sage-400/80 hover:bg-[#FDFBF7]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Index & Title */}
                  <div className="lg:col-span-5 space-y-3">
                    <span className="font-serif text-2xl font-normal text-terracotta-500 italic block">
                      {indexNumber}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal-900 leading-snug">
                      {service.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {service.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[11px] uppercase tracking-wider font-medium text-charcoal-600 bg-[#EFE9DF] px-2.5 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Exact SEO Description & Clinical Details */}
                  <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
                    <p className="text-charcoal-700 text-base sm:text-lg leading-relaxed font-normal">
                      {service.description}
                    </p>

                    <div className="p-4 rounded-xl bg-[#F2EDE3]/70 border border-[#E5DDD0] text-xs text-charcoal-700">
                      <strong className="font-semibold text-charcoal-900 block mb-1">
                        Who this is tailored for:
                      </strong>
                      <span>{service.audience}</span>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={onOpenBooking}
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-slateGreen-800 hover:text-terracotta-500 transition-colors group"
                      >
                        <span>Schedule a consult for {service.title.split(' in ')[0]}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
