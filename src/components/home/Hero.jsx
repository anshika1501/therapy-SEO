import React from 'react';
import { ArrowRight, Check, MapPin } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import { heroContent, therapistProfile } from '../../data/therapyData';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative pt-10 pb-20 sm:pt-16 sm:pb-24 border-b border-linen-300/80 bg-linen-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Main Editorial Text Column */}
          <div className="lg:col-span-7 space-y-7">
            {/* Subtle Editorial Kicker */}
            <div className="flex items-center gap-2.5 text-xs uppercase tracking-widest font-medium text-sage-700">
              <span className="w-2 h-2 rounded-full bg-sage-500 inline-block" />
              <span>Santa Monica, California &bull; In-Person & California Telehealth</span>
            </div>

            {/* Exact SEO H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal-900 leading-[1.14] tracking-tight">
              {heroContent.h1}
            </h1>

            {/* Exact Sub-headline: 3 calm, "you"-focused reassuring sentences */}
            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed max-w-2xl font-normal">
              {heroContent.subhead}
            </p>

            {/* Natural Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                size="lg"
                onClick={onOpenBooking}
                className="bg-slateGreen-800 hover:bg-slateGreen-900 text-linen-100 px-8 py-3.5 shadow-subtle group rounded-full text-base font-medium"
              >
                <span>{heroContent.primaryCTA}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a
                href="#approach"
                className="inline-flex items-center justify-center text-charcoal-800 hover:text-sage-700 font-medium text-base px-6 py-3.5 border-b border-charcoal-800/20 hover:border-charcoal-800 transition-colors"
              >
                {heroContent.secondaryCTA}
              </a>
            </div>

            {/* Grounded Clinical Credentials List */}
            <div className="pt-6 border-t border-linen-300/80 flex flex-wrap gap-x-8 gap-y-3 text-xs text-charcoal-700">
              {heroContent.trustBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-sage-600 stroke-[2.5]" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Authentic Clinician Portrait (Unchanged Image of Dr. Maya Reynolds) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Warm Paper Bordered Matting */}
              <div className="bg-linen-200/90 p-3 sm:p-4 rounded-2xl border border-linen-300 shadow-editorial">
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-linen-300 relative">
                  <img
                    src={therapistProfile.image}
                    alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Grounded Editorial Caption */}
                <div className="pt-3.5 px-2 flex items-center justify-between text-xs text-charcoal-700">
                  <div>
                    <p className="font-serif font-medium text-charcoal-900 text-sm">Dr. Maya Reynolds, PsyD</p>
                    <p className="text-[11px] text-charcoal-600">Licensed Clinical Psychologist</p>
                  </div>
                  <span className="text-[11px] text-sage-700 bg-sage-100/80 px-2.5 py-1 rounded">
                    Santa Monica Office
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
