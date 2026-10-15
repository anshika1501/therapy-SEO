import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { approaches } from '../../data/therapyData';
import { Brain, Waves, HeartPulse, Compass } from 'lucide-react';

const approachIcons = [Waves, Brain, HeartPulse, Compass];

export default function ApproachSection() {
  return (
    <section id="approach" className="py-20 sm:py-24 bg-linen-100 relative">
      <Container>
        <SectionHeading
          eyebrow="Integrative Clinical Care"
          title="Bridging the Mind & the Nervous System"
          subtitle="Therapy shouldn't just be talking in circles. We blend clinically validated psychological frameworks with bodily awareness so your growth is both deeply understood and tangibly felt."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {approaches.map((item, index) => {
            const Icon = approachIcons[index % approachIcons.length];
            return (
              <div
                key={index}
                className="bg-linen-50 border border-linen-300 rounded-2xl p-6 flex flex-col justify-between hover:shadow-soft hover:border-sage-300 transition-all duration-300"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-sage-100 flex items-center justify-center text-sage-600 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-charcoal-900 mb-1">
                    {item.name}
                  </h3>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-sage-600 mb-3">
                    {item.tagline}
                  </span>
                  <p className="text-sm text-charcoal-700 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Santa Monica calm office callout */}
        <div className="mt-12 bg-sage-50 border border-sage-200/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl font-bold text-charcoal-900">
              A serene healing space on Montana Avenue
            </h4>
            <p className="text-sm text-charcoal-700">
              Designed with warm natural textures, soft ambient daylight, and strict clinical privacy.
            </p>
          </div>
          <span className="px-4 py-2 bg-sage-500 text-linen-100 text-xs font-semibold rounded-full uppercase tracking-wider shrink-0">
            Santa Monica, CA
          </span>
        </div>
      </Container>
    </section>
  );
}
