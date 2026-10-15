import React from 'react';
import { Calendar, PhoneCall, Check, ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import { therapistProfile } from '../../data/therapyData';

export default function ConsultationCTA({ onOpenBooking }) {
  return (
    <section className="py-20 bg-gradient-to-br from-sage-500 via-slateGreen-800 to-slateGreen-900 text-linen-100 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-terracotta-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sage-300/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <span className="inline-block text-xs uppercase tracking-widest font-semibold text-sage-200 bg-slateGreen-950/40 px-4 py-1.5 rounded-full border border-sage-400/20">
            A Compassionate, Safe First Step
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-linen-100 leading-tight">
            Schedule a Free 15-Minute Consultation
          </h2>

          <p className="text-base sm:text-lg text-linen-200 max-w-2xl mx-auto leading-relaxed">
            Taking the first step toward therapy can feel vulnerable. This short call is simply a chance for us to connect, discuss what you are navigating, and see how we can best support you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              size="lg"
              onClick={onOpenBooking}
              className="bg-linen-100 text-slateGreen-900 hover:bg-linen-200 shadow-elevated font-semibold px-8 group"
            >
              <span>Book Your Consult Now</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a
              href={`tel:${therapistProfile.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-linen-300/30 hover:bg-slateGreen-800/80 text-linen-100 text-base font-medium transition"
            >
              <PhoneCall className="w-4 h-4 text-sage-300" />
              <span>Call directly: {therapistProfile.phone}</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-xs text-linen-300">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-sage-300" /> Free & confidential
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-sage-300" /> No commitment required
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-sage-300" /> In-person or California telehealth
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
