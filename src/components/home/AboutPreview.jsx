import React from 'react';
import { Award, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import { therapistProfile } from '../../data/therapyData';

export default function AboutPreview({ onOpenBooking }) {
  return (
    <section id="about" className="py-20 sm:py-24 bg-linen-200/40 border-y border-linen-300">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Doctor Profile Photo / Vignette */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-elevated bg-sage-200">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* Verified Badge Overlay */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-linen-100 p-4 rounded-2xl shadow-soft border border-linen-300 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-charcoal-900">Dr. Maya Reynolds, PsyD</p>
                    <p className="text-[11px] text-charcoal-600">Licensed Clinical Psychologist (PSY 31892)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-sage-600 bg-sage-100/70 px-3.5 py-1 rounded-full">
              About Dr. Reynolds
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-charcoal-900 leading-tight">
              A collaborative, compassionate partner in your healing process.
            </h2>
            <div className="space-y-4 text-charcoal-700 text-base leading-relaxed">
              <p>
                As a licensed clinical psychologist based in Santa Monica, I work with high-achieving adults, professionals, and creatives who feel internally drained despite maintaining an outward appearance of having everything together.
              </p>
              <p>
                My practice is rooted in warmth, empathy, and scientific grounding. Rather than offering one-size-fits-all advice, I integrate cognitive-behavioral tools with EMDR and somatic nervous system regulation to help you resolve the deeper sources of trauma and constant worry.
              </p>
              <p>
                Whether you sit across from me in my calm Santa Monica office or connect via secure California telehealth from the comfort of your home, you will find an unhurried, confidential atmosphere where you can be fully human.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-linen-100 border border-linen-300">
                <GraduationCap className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-charcoal-900">Doctor of Psychology (PsyD)</h4>
                  <p className="text-xs text-charcoal-600">Doctoral training in Clinical Psychology & EMDR</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-linen-100 border border-linen-300">
                <MapPin className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-charcoal-900">Santa Monica & California</h4>
                  <p className="text-xs text-charcoal-600">Montana Avenue practice + Statewide Telehealth</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button onClick={onOpenBooking}>
                Book a Free 15-Minute Consult
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
