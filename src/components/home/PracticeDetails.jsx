import React from 'react';
import { MapPin, Video, FileText, Clock } from 'lucide-react';
import Container from '../common/Container';

export default function PracticeDetails() {
  return (
    <section className="py-16 sm:py-20 bg-linen-200/50 border-b border-linen-300/80">
      <Container>
        <div className="max-w-2xl mb-12 text-left">
          <p className="text-xs uppercase tracking-widest font-semibold text-sage-700 mb-2">
            Practice Logistics & Care
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif text-charcoal-900">
            Session Details & Transparency
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-linen-100 border border-linen-300/90 shadow-subtle">
            <div className="flex items-center gap-2 text-sage-700 mb-3">
              <MapPin className="w-4 h-4" />
              <h3 className="font-serif font-bold text-charcoal-900 text-base">In-Person Sessions</h3>
            </div>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
              Sessions take place in my quiet Montana Avenue office in Santa Monica. Designed for sensory calmness and complete privacy, with easy street parking.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-linen-100 border border-linen-300/90 shadow-subtle">
            <div className="flex items-center gap-2 text-sage-700 mb-3">
              <Video className="w-4 h-4" />
              <h3 className="font-serif font-bold text-charcoal-900 text-base">California Telehealth</h3>
            </div>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
              Available to adult residents anywhere in California via a secure, HIPAA-compliant telehealth platform. Connect from your home or private office.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-linen-100 border border-linen-300/90 shadow-subtle">
            <div className="flex items-center gap-2 text-sage-700 mb-3">
              <FileText className="w-4 h-4" />
              <h3 className="font-serif font-bold text-charcoal-900 text-base">Insurance & Superbills</h3>
            </div>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
              I am an out-of-network provider and provide detailed monthly superbills for you to submit to your PPO insurance provider for potential direct reimbursement.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
