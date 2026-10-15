import React from 'react';
import Container from '../common/Container';
import FadeIn from '../common/FadeIn';
import { approaches } from '../../data/therapyData';

export default function ApproachSection() {
  return (
    <section id="approach" className="py-20 sm:py-24 bg-[#F9F6F0] border-b border-[#E7DFD3]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Clinical Philosophy */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
            <FadeIn direction="up">
              <p className="text-xs uppercase tracking-wider font-semibold text-charcoal-600">
                Therapeutic Approach
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif text-charcoal-900 leading-tight mt-1">
                Combining Practical Tools with Depth-Oriented Care
              </h2>
              <p className="text-base text-charcoal-700 leading-relaxed font-normal mt-3">
                Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. We integrate evidence-based methods to address both the thoughts and the physical tension of what you are experiencing.
              </p>
              <p className="text-sm text-charcoal-600 leading-relaxed pt-2">
                Trauma and chronic stress are paced carefully, with an emphasis on safety and helping you feel more regulated in daily life—not just during our sessions.
              </p>
            </FadeIn>
          </div>

          {/* Right Column: Modalities */}
          <div className="lg:col-span-7 space-y-4">
            {approaches.map((item, index) => (
              <FadeIn key={index} delay={index * 80} direction="up">
                <div className="p-6 rounded-xl bg-[#FCFAF6] border border-[#E7DFD3]">
                  <div className="flex items-baseline justify-between gap-4 mb-1.5">
                    <h3 className="font-serif text-xl font-semibold text-charcoal-900">
                      {item.name}
                    </h3>
                    <span className="text-xs text-charcoal-600 font-medium shrink-0">
                      {item.tagline}
                    </span>
                  </div>
                  <p className="text-sm text-charcoal-700 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
