import React from 'react';
import Container from '../common/Container';
import Button from '../common/Button';
import { therapistProfile } from '../../data/therapyData';

export default function AboutPreview({ onOpenBooking }) {
  return (
    <section id="about" className="py-20 sm:py-24 bg-linen-50 border-b border-linen-300/80">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Portrait of Dr. Maya Reynolds (Image Preserved Exactly) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="p-3 sm:p-4 bg-linen-100 rounded-2xl border border-linen-300 shadow-editorial">
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-linen-300">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                    alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 text-center">
                  <p className="font-serif text-charcoal-900 font-semibold text-sm">
                    Dr. Maya Reynolds, PsyD
                  </p>
                  <p className="text-xs text-charcoal-600">
                    California License PSY 31892
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Grounded Human Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs uppercase tracking-widest font-semibold text-sage-700">
              Meet Dr. Reynolds
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif text-charcoal-900 leading-tight">
              A collaborative, compassionate space where you can let down your guard.
            </h2>
            <div className="space-y-4 text-charcoal-700 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                I specialize in working with high-functioning adults, professionals, and creatives throughout Santa Monica and California who find themselves caught in cycles of perfectionism, burnout, and unspoken emotional strain.
              </p>
              <p>
                Therapy with me is not a passive lecture or a detached clinical exercise. It is a genuine, warm partnership. Together, we explore what your nervous system has been carrying, unravel old protective patterns that no longer serve you, and build reliable internal safety.
              </p>
              <p>
                Whether meeting in my private Santa Monica office or through secure telehealth, our goal is the same: to help you feel rooted, clear-minded, and at home in your own life again.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs text-charcoal-700">
              <div className="p-4 rounded-lg bg-linen-100 border border-linen-300/80">
                <span className="font-semibold block text-charcoal-900 mb-1">Clinical Credentials</span>
                <p className="text-charcoal-600 leading-relaxed">
                  Doctorate in Clinical Psychology (PsyD) &bull; Certified in EMDR &bull; Somatic Grounding Specialist
                </p>
              </div>

              <div className="p-4 rounded-lg bg-linen-100 border border-linen-300/80">
                <span className="font-semibold block text-charcoal-900 mb-1">Session Locations</span>
                <p className="text-charcoal-600 leading-relaxed">
                  Montana Avenue office in Santa Monica, CA + secure HIPAA-compliant video sessions across all of California.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button onClick={onOpenBooking} variant="primary">
                Book a Free 15-Minute Consult
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
