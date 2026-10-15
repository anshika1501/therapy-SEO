import React from 'react';
import Container from '../common/Container';
import Button from '../common/Button';
import { therapistProfile, aboutContent } from '../../data/therapyData';

export default function AboutPreview({ onOpenBooking }) {
  return (
    <section id="about" className="py-20 sm:py-24 bg-linen-50 border-b border-linen-300/80">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait & Credentials */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="mx-auto max-w-sm lg:max-w-none">
              <div className="p-3 sm:p-4 bg-linen-100 rounded-2xl border border-linen-300 shadow-editorial">
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-linen-300">
                  <img
                    src={therapistProfile.image}
                    alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 text-center space-y-1">
                  <h3 className="font-serif text-charcoal-900 font-bold text-lg">
                    {therapistProfile.name}, {therapistProfile.credentials}
                  </h3>
                  <p className="text-xs text-charcoal-600">
                    {therapistProfile.title}
                  </p>
                  <p className="text-[11px] text-sage-700 font-medium">
                    {therapistProfile.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Full Authentic About Text from PDF */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs uppercase tracking-widest font-semibold text-sage-700">
              About Dr. Maya Reynolds, PsyD
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif text-charcoal-900 leading-tight">
              {aboutContent.headline}
            </h2>

            <div className="space-y-4 text-charcoal-700 text-sm sm:text-base leading-relaxed font-normal">
              {aboutContent.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button onClick={onOpenBooking} variant="primary">
                Schedule a Free 15-Minute Consult
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
