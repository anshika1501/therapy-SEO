import React from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import FadeIn from '../common/FadeIn';
import { servicesData } from '../../data/therapyData';

export default function ServicesGrid({ onOpenBooking }) {
  return (
    <section id="services" className="py-20 sm:py-24 bg-[#FCFAF6] border-b border-[#E7DFD3]">
      <Container>
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="max-w-2xl mb-14 text-left">
            <p className="text-xs uppercase tracking-wider font-semibold text-charcoal-600 mb-2">
              Services & Specialties
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif text-charcoal-900 leading-tight">
              Therapy for Anxiety, Trauma, and Burnout
            </h2>
            <p className="mt-3 text-base text-charcoal-700 leading-relaxed font-normal">
              Therapy focused on practical tools and deep, evidence-based methods for adults and professionals living in Santa Monica and throughout California.
            </p>
          </div>
        </FadeIn>

        {/* Clean, Human Service List */}
        <div className="space-y-6">
          {servicesData.map((service, index) => (
            <FadeIn key={service.id} delay={index * 100} direction="up">
              <div className="bg-[#F9F6F0] rounded-xl p-7 sm:p-8 border border-[#E7DFD3] hover:border-charcoal-400/60 transition-colors">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-5 space-y-2">
                    <h3 className="font-serif text-2xl font-semibold text-charcoal-900 leading-snug">
                      {service.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {service.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs text-charcoal-600 bg-[#EFE9DF] px-2.5 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-4">
                    <p className="text-charcoal-700 text-base leading-relaxed font-normal">
                      {service.description}
                    </p>
                    <p className="text-xs text-charcoal-600">
                      <strong>Focus:</strong> {service.audience}
                    </p>
                    <div>
                      <button
                        onClick={onOpenBooking}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-charcoal-800 hover:text-sage-700 transition-colors"
                      >
                        <span>Inquire about this service</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
