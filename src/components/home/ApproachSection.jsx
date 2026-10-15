import React from 'react';
import Container from '../common/Container';
import { approaches } from '../../data/therapyData';

export default function ApproachSection() {
  return (
    <section id="approach" className="py-20 sm:py-24 bg-linen-100 border-b border-linen-300/80">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Clinical Philosophy */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs uppercase tracking-widest font-semibold text-sage-700">
              Therapeutic Approach
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif text-charcoal-900 leading-tight">
              Bridging cognitive understanding with physiological regulation.
            </h2>
            <div className="space-y-4 text-charcoal-700 text-sm sm:text-base leading-relaxed">
              <p>
                Many high-achieving individuals understand their anxiety on an intellectual level—yet their body continues to respond as if danger is imminent.
              </p>
              <p>
                True therapeutic resolution doesn't come from simply "thinking differently." We combine clinically established cognitive restructuring with somatic experiencing and EMDR so that insights translate into a lasting physical sense of safety.
              </p>
            </div>

            <div className="p-6 bg-linen-200/60 rounded-xl border border-linen-300">
              <h4 className="font-serif text-base font-semibold text-charcoal-900 mb-1">
                The Santa Monica Office Setting
              </h4>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Located at 123th Street 45 W in Santa Monica, our space provides a quiet, uncluttered environment with natural light to help your nervous system settle the moment you step inside.
              </p>

            </div>
          </div>

          {/* Right Column: 4 Therapeutic Modalities */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {approaches.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-linen-50 border border-linen-300/90 shadow-subtle flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-sage-700 font-semibold block mb-1">
                      {item.tagline}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-charcoal-900 mb-2.5">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
