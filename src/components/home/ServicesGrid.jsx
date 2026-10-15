import React from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { servicesData } from '../../data/therapyData';

export default function ServicesGrid({ onOpenBooking }) {
  return (
    <section id="services" className="py-20 sm:py-24 bg-linen-50 border-b border-linen-300/80">
      <Container>
        <div className="max-w-2xl mb-14 text-left">
          <p className="text-xs uppercase tracking-widest font-semibold text-sage-700 mb-3">
            Clinical Specialties
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif text-charcoal-900 leading-tight">
            Specialized Therapy in Santa Monica & Across California
          </h2>
          <p className="mt-4 text-base text-charcoal-700 leading-relaxed font-normal">
            Grounding, evidence-based care tailored to the distinct emotional and physiological needs of high-functioning adults, professionals, and creatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const indexNumber = `0${index + 1}`;
            return (
              <div
                key={service.id}
                className="flex flex-col justify-between bg-linen-100 rounded-xl p-8 border border-linen-300/90 shadow-subtle hover:border-sage-500/50 transition-colors"
              >
                <div>
                  {/* Subtle Editorial Index */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-linen-200">
                    <span className="font-serif text-xs font-semibold tracking-widest text-sage-700">
                      [{indexNumber}]
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-charcoal-600 font-medium">
                      Adult Psychotherapy
                    </span>
                  </div>

                  {/* SEO-Optimized Service Title */}
                  <h3 className="font-serif text-2xl text-charcoal-900 mb-4 leading-snug">
                    {service.title}
                  </h3>

                  {/* SEO-Optimized Description with Keyword */}
                  <p className="text-charcoal-700 text-sm leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Genuine Specialty Focus Areas */}
                  <div className="space-y-1.5 mb-8">
                    {service.tags.map((tag, i) => (
                      <div key={i} className="text-xs text-charcoal-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sage-400" />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-4 border-t border-linen-200/80">
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-slateGreen-800 hover:text-terracotta-500 transition-colors"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
