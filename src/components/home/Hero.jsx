import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import { heroContent, therapistProfile } from '../../data/therapyData';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 bg-gradient-to-b from-linen-100 via-linen-50 to-linen-100">
      {/* Subtle organic background glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-sage-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-48 right-10 w-[350px] h-[350px] bg-terracotta-400/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left / Main Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-100/80 border border-sage-200/60 text-xs font-medium text-slateGreen-800">
              <MapPin className="w-3.5 h-3.5 text-sage-600" />
              <span>Santa Monica, CA &bull; In-Person & California Telehealth</span>
            </div>

            {/* Main SEO H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-serif font-bold text-charcoal-900 leading-[1.18] tracking-tight">
              {heroContent.h1}
            </h1>

            {/* Sub-headline: 2-3 calm, "you"-focused reassuring sentences */}
            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed max-w-2xl font-normal">
              {heroContent.subhead}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Button
                size="lg"
                onClick={onOpenBooking}
                className="bg-slateGreen-800 hover:bg-slateGreen-900 text-linen-100 shadow-md group"
              >
                <span>{heroContent.primaryCTA}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a
                href="#approach"
                className="inline-flex items-center justify-center font-medium rounded-full text-charcoal-800 border border-charcoal-700/20 hover:border-charcoal-800 hover:bg-sage-100/50 text-base px-6 py-3.5 transition"
              >
                {heroContent.secondaryCTA}
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-linen-300/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {heroContent.trustBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-charcoal-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sage-600 shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column / Soothing Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame */}
              <div className="relative rounded-3xl bg-linen-200/90 p-4 sm:p-6 shadow-elevated border border-linen-300/70">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-sage-100 via-linen-200 to-sand relative flex flex-col justify-end p-6">
                  {/* Calming visual ambient illustration */}
                  <div className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-85" style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80')`
                  }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slateGreen-950/80 via-slateGreen-900/30 to-transparent" />

                  {/* Card Content Overlay */}
                  <div className="relative z-10 text-linen-100 space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slateGreen-900/80 backdrop-blur-md text-xs text-sage-200 border border-sage-500/30">
                      <Sparkles className="w-3.5 h-3.5 text-sage-300" />
                      <span>Integrative & Evidence-Based</span>
                    </div>
                    <blockquote className="text-base sm:text-lg font-serif italic leading-snug">
                      "True healing happens when both your mind and nervous system feel respected and safe."
                    </blockquote>
                    <p className="text-xs uppercase tracking-wider text-linen-300 font-medium">
                      Dr. Maya Reynolds, PsyD
                    </p>
                  </div>
                </div>

                {/* Floating Highlights Tag */}
                <div className="mt-4 flex items-center justify-between text-xs text-charcoal-700 px-2">
                  <span className="flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="w-4 h-4 text-sage-600" />
                    Private Montana Ave Office
                  </span>
                  <span className="text-charcoal-500 font-normal">
                    CA License #{therapistProfile.licenseNumber}
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
