import React from 'react';
import Container from '../common/Container';
import FadeIn from '../common/FadeIn';
import { approaches } from '../../data/therapyData';

export default function ApproachSection() {
  return (
    <section id="approach" className="py-20 sm:py-28 bg-[#F9F6F0] border-b border-[#E7DFD3]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Authentic Clinical Philosophy from PDF */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <FadeIn direction="up">
              <p className="text-xs uppercase tracking-widest font-semibold text-sage-700">
                Therapeutic Approach
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif text-charcoal-900 leading-tight mt-2">
                Understanding both the emotional & physiological sides of what you experience.
              </h2>
              <div className="space-y-4 text-charcoal-700 text-base leading-relaxed font-normal mt-4">
                <p>
                  Sessions are structured enough to feel supportive, while still leaving room for genuine reflection and depth. We don't just stay on the surface of anxious thoughts; we listen to where stress is held in your body.
                </p>
                <p className="font-serif italic text-charcoal-800 text-lg border-l-2 border-terracotta-500 pl-4 py-1">
                  "My approach is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in their daily lives—not just during sessions."
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: 4 Therapeutic Modalities with Smooth Staggered Reveal */}
          <div className="lg:col-span-7 space-y-5">
            {approaches.map((item, index) => (
              <FadeIn key={index} delay={index * 100} direction="up">
                <div className="p-6 sm:p-7 rounded-2xl bg-[#FCFAF6] border border-[#E7DFD3] hover:border-sage-400/80 transition-all duration-300">
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-charcoal-900">
                      {item.name}
                    </h3>
                    <span className="text-[11px] uppercase tracking-wider text-sage-700 font-semibold shrink-0">
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
