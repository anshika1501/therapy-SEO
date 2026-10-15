import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import FadeIn from '../common/FadeIn';
import { heroContent, therapistProfile } from '../../data/therapyData';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 border-b border-[#E7DFD3] bg-[#F9F6F0]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <FadeIn delay={50} immediate={true}>
              <p className="text-xs uppercase tracking-wider font-semibold text-charcoal-600">
                Santa Monica, California &bull; In-Person & Statewide Telehealth
              </p>
            </FadeIn>

            {/* Exact SEO H1 */}
            <FadeIn delay={150} immediate={true}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal-900 leading-[1.16] tracking-tight">
                {heroContent.h1}
              </h1>
            </FadeIn>

            {/* Exact Sub-headline */}
            <FadeIn delay={250} immediate={true}>
              <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed max-w-2xl font-normal">
                {heroContent.subhead}
              </p>
            </FadeIn>

            {/* Action Buttons */}
            <FadeIn delay={350} immediate={true}>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button
                  size="lg"
                  onClick={onOpenBooking}
                  className="bg-slateGreen-800 hover:bg-slateGreen-900 text-linen-100 px-7 py-3.5 rounded-full text-sm font-medium shadow-sm group"
                >
                  <span>{heroContent.primaryCTA}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <a
                  href="#approach"
                  className="inline-flex items-center justify-center text-charcoal-800 hover:text-sage-700 text-sm font-medium px-4 py-3 border-b border-charcoal-800/20 hover:border-charcoal-800 transition"
                >
                  {heroContent.secondaryCTA}
                </a>
              </div>
            </FadeIn>

            {/* Professional Credentials */}
            <FadeIn delay={450} immediate={true}>
              <div className="pt-6 border-t border-[#E7DFD3] flex flex-wrap gap-x-6 gap-y-2 text-xs text-charcoal-600">
                {heroContent.trustBadges.map((badge, idx) => (
                  <span key={idx} className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-sage-600 stroke-[2.5]" />
                    {badge}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Doctor Portrait */}
          <div className="lg:col-span-5">
            <FadeIn delay={200} immediate={true}>
              <div className="mx-auto max-w-sm lg:max-w-none">
                <div className="bg-[#F2EDE3] p-3 rounded-2xl border border-[#E0D6C6]">
                  <div className="aspect-[4/5] rounded-xl overflow-hidden bg-[#E6DDD1]">
                    <img
                      src={therapistProfile.image}
                      alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="pt-3 px-1 text-center">
                    <p className="font-serif font-bold text-charcoal-900 text-base">
                      {therapistProfile.name}, {therapistProfile.credentials}
                    </p>
                    <p className="text-xs text-charcoal-600 mt-0.5">
                      {therapistProfile.title} &bull; {therapistProfile.licenseNumber}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
