import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import { therapistProfile } from '../../data/therapyData';

export default function ConsultationCTA({ onOpenBooking }) {
  return (
    <section className="py-20 bg-slateGreen-900 text-linen-100 relative">
      <Container>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <p className="text-xs uppercase tracking-wider font-semibold text-sage-300">
            Initial Consultation
          </p>

          <h2 className="text-3xl sm:text-4xl font-serif text-linen-100 leading-tight">
            Schedule a Free 15-Minute Consultation
          </h2>

          <p className="text-base text-linen-300 leading-relaxed font-normal">
            If you are considering therapy, an initial phone or video call is a simple opportunity to ask questions, discuss what brings you in, and determine whether my practice is a good fit.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              size="lg"
              onClick={onOpenBooking}
              className="bg-linen-100 text-slateGreen-900 hover:bg-linen-200 px-7 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold shadow-sm group"
            >
              <span>Request 15-Min Call</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a
              href={`tel:${therapistProfile.phone}`}
              className="inline-flex items-center gap-2 text-linen-200 hover:text-linen-100 text-sm font-medium transition px-3 py-2"
            >
              <Phone className="w-4 h-4 text-sage-300" />
              <span>{therapistProfile.phone}</span>
            </a>
          </div>

          <p className="text-xs text-linen-400 pt-2 font-normal">
            In-person sessions in Santa Monica &bull; Secure California Telehealth
          </p>
        </div>
      </Container>
    </section>
  );
}
