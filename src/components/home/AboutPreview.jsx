import React from 'react';
import Container from '../common/Container';
import Button from '../common/Button';
import FadeIn from '../common/FadeIn';
import { therapistProfile, aboutContent } from '../../data/therapyData';

export default function AboutPreview({ onOpenBooking }) {
  return (
    <section id="about" className="py-20 sm:py-24 bg-[#FCFAF6] border-b border-[#E7DFD3]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Doctor Portrait */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <FadeIn direction="up">
              <div className="mx-auto max-w-sm lg:max-w-none">
                <div className="bg-[#F2EDE3] p-3 rounded-2xl border border-[#E0D6C6]">
                  <div className="aspect-[4/5] rounded-xl overflow-hidden bg-[#E6DDD1]">
                    <img
                      src={therapistProfile.image}
                      alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div className="pt-3 px-1 text-center space-y-0.5">
                    <h3 className="font-serif text-charcoal-900 font-bold text-lg">
                      {therapistProfile.name}, {therapistProfile.credentials}
                    </h3>
                    <p className="text-xs text-charcoal-600">
                      {therapistProfile.title} &bull; {therapistProfile.licenseNumber}
                    </p>
                    <p className="text-xs text-charcoal-600">
                      {therapistProfile.address}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Full Authentic About Text from PDF */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <FadeIn direction="up">
              <p className="text-xs uppercase tracking-wider font-semibold text-charcoal-600 mb-1">
                Background & Philosophy
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif text-charcoal-900 leading-tight">
                About Dr. Maya Reynolds, PsyD
              </h2>
            </FadeIn>

            <div className="space-y-4 text-charcoal-700 text-base leading-relaxed font-normal">
              {aboutContent.paragraphs.map((paragraph, idx) => (
                <FadeIn key={idx} delay={idx * 40} direction="up">
                  <p className="leading-relaxed">
                    {paragraph}
                  </p>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={150} direction="up">
              <div className="pt-4 border-t border-[#E7DFD3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="font-serif font-bold text-base text-charcoal-900">
                    Dr. Maya Reynolds, PsyD
                  </p>
                  <p className="text-xs text-charcoal-600">
                    Licensed Clinical Psychologist &bull; Santa Monica, California
                  </p>
                </div>
                <Button onClick={onOpenBooking} variant="primary" className="text-xs uppercase tracking-wider font-semibold">
                  Schedule Free Consult
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
