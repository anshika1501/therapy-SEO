import React from 'react';
import { Sparkles, ShieldCheck, FlameKindling, ArrowUpRight } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { servicesData } from '../../data/therapyData';

const iconMap = {
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
  FlameKindling: FlameKindling,
};

export default function ServicesGrid({ onOpenBooking }) {
  return (
    <section id="services" className="py-20 sm:py-24 bg-linen-200/50">
      <Container>
        <SectionHeading
          eyebrow="Specialized Care"
          title="Therapeutic Services in Santa Monica & Across California"
          subtitle="Grounding, evidence-based care tailored to the distinct emotional and physiological needs of high-functioning adults and professionals."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between bg-linen-100 rounded-2xl p-8 border border-linen-300 hover:border-sage-500/40 shadow-soft hover:shadow-elevated transition-all duration-300"
              >
                <div>
                  {/* Icon Header */}
                  <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center text-sage-600 mb-6 group-hover:scale-110 group-hover:bg-sage-200 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* SEO Optimized Service Title */}
                  <h3 className="font-serif text-2xl font-bold text-charcoal-900 mb-4 leading-snug group-hover:text-sage-700 transition-colors">
                    {service.title}
                  </h3>

                  {/* SEO Optimized Description with Keyword */}
                  <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Focus Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-linen-200 text-charcoal-800 px-3 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-linen-200 flex items-center justify-between">
                  <span className="text-xs text-charcoal-500">
                    Santa Monica & CA Online
                  </span>
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-slateGreen-800 hover:text-terracotta-500 transition-colors"
                  >
                    <span>Learn more</span>
                    <ArrowUpRight className="w-4 h-4" />
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
