import React from 'react';
import Container from '../common/Container';
import Button from '../common/Button';
import { therapistProfile, aboutContent } from '../../data/therapyData';

export default function AboutPreview({ onOpenBooking }) {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FCFAF6] border-b border-[#E7DFD3]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait & Credentials */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="mx-auto max-w-sm lg:max-w-none">
              <div className="p-4 bg-[#F2EDE3] rounded-2xl border border-[#E0D6C6] shadow-paper">
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-[#E6DDD1]">
                  <img
                    src={therapistProfile.image}
                    alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 text-center space-y-1">
                  <h3 className="font-serif text-charcoal-900 font-bold text-xl">
                    {therapistProfile.name}, {therapistProfile.credentials}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-charcoal-600 font-medium">
                    {therapistProfile.title}
                  </p>
                  <p className="text-xs text-sage-700">
                    {therapistProfile.address}
                  </p>
                </div>
              </div>

              {/* Personal Practice Philosophy Note */}
              <div className="mt-6 p-5 rounded-xl bg-[#F9F6F0] border border-[#E7DFD3] text-xs text-charcoal-700 space-y-2">
                <p className="font-serif font-semibold text-charcoal-900 text-sm">
                  Clinical Modalities
                </p>
                <p className="leading-relaxed">
                  Doctoral training in Clinical Psychology (PsyD) &bull; Certified EMDR Practitioner &bull; Cognitive Behavioral Therapy (CBT) &bull; Somatic Grounding & Mindfulness.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Full Authentic About Text from PDF */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <p className="text-xs uppercase tracking-widest font-semibold text-sage-700">
              Meet Dr. Reynolds
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-[38px] font-serif text-charcoal-900 leading-tight">
              About Dr. Maya Reynolds, PsyD
            </h2>

            <div className="space-y-5 text-charcoal-700 text-base leading-relaxed font-normal">
              {aboutContent.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="leading-[1.75]">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Handwritten-style authentic sign-off */}
            <div className="pt-6 border-t border-[#E7DFD3] space-y-1">
              <p className="font-serif italic text-xl text-charcoal-900">
                Warmly,
              </p>
              <p className="font-serif font-bold text-lg text-charcoal-900">
                Dr. Maya Reynolds, PsyD
              </p>
              <p className="text-xs text-charcoal-600">
                Licensed Clinical Psychologist &bull; Santa Monica, California
              </p>
            </div>

            <div className="pt-4">
              <Button onClick={onOpenBooking} variant="primary" className="text-xs uppercase tracking-widest font-semibold">
                Schedule a Free 15-Minute Consult
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
