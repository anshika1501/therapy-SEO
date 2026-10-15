import React from 'react';
import { ArrowRight, Check, MapPin } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import FadeIn from '../common/FadeIn';
import { heroContent, therapistProfile } from '../../data/therapyData';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 border-b border-[#E7DFD3] bg-[#F9F6F0] overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Main Editorial Text Column with Staggered Entrance */}
          <div className="lg:col-span-7 space-y-7">
            {/* Handcrafted Location & Practice Kicker */}
            <FadeIn delay={100} duration={800} immediate={true}>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-sage-700 bg-sage-50 px-3 py-1.5 rounded-md border border-sage-200/70">
                <MapPin className="w-3.5 h-3.5 text-sage-600" />
                <span>Santa Monica, CA &bull; In-Person & Statewide Telehealth</span>
              </div>
            </FadeIn>

            {/* Exact SEO H1 with Warm Humanist Serif */}
            <FadeIn delay={220} duration={900} immediate={true}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal-900 leading-[1.15] tracking-tight">
                Trauma & Anxiety Therapist in Santa Monica <span className="font-serif italic font-normal text-terracotta-500 block sm:inline">| Dr. Maya Reynolds, PsyD</span>
              </h1>
            </FadeIn>

            {/* Exact Sub-headline: 3 calm, "you"-focused reassuring sentences */}
            <FadeIn delay={360} duration={900} immediate={true}>
              <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed max-w-2xl font-normal">
                {heroContent.subhead}
              </p>
            </FadeIn>

            {/* Action Buttons */}
            <FadeIn delay={480} duration={800} immediate={true}>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button
                  size="lg"
                  onClick={onOpenBooking}
                  className="bg-slateGreen-800 hover:bg-slateGreen-900 text-linen-100 px-8 py-3.5 rounded-full text-sm uppercase tracking-wider font-semibold shadow-paper group"
                >
                  <span>{heroContent.primaryCTA}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <a
                  href="#approach"
                  className="inline-flex items-center justify-center text-charcoal-800 hover:text-sage-700 text-sm font-semibold tracking-wider uppercase px-4 py-3 border-b border-charcoal-800/30 hover:border-charcoal-800 transition"
                >
                  {heroContent.secondaryCTA}
                </a>
              </div>
            </FadeIn>

            {/* Practice Status & Real Human Credentials */}
            <FadeIn delay={600} duration={800} immediate={true}>
              <div className="pt-6 border-t border-[#E7DFD3] flex flex-wrap gap-x-6 gap-y-2.5 text-xs text-charcoal-600">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-sage-600 stroke-[2.5]" />
                  Licensed Clinical Psychologist
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-sage-600 stroke-[2.5]" />
                  EMDR & Somatic Trained
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-sage-600 stroke-[2.5]" />
                  Quiet 123th Street Office
                </span>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Authentic Clinician Portrait Revealing Softly */}
          <div className="lg:col-span-5">
            <FadeIn delay={300} duration={1000} immediate={true} direction="up">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                {/* Warm Paper Bordered Matting */}
                <div className="bg-[#F2EDE3] p-4 rounded-2xl border border-[#E0D6C6] shadow-paper">
                  <div className="aspect-[4/5] rounded-xl overflow-hidden bg-[#E6DDD1] relative">
                    <img
                      src={therapistProfile.image}
                      alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica"
                      className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.01]"
                    />
                  </div>

                  {/* Grounded Human Caption */}
                  <div className="pt-4 px-1 text-left space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-serif font-bold text-charcoal-900 text-base">Dr. Maya Reynolds, PsyD</p>
                      <span className="text-[11px] text-sage-700 font-medium">Santa Monica, CA</span>
                    </div>
                    <p className="text-xs text-charcoal-600 leading-normal">
                      "I believe therapy works best when you feel respected, understood, and actively involved."
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
