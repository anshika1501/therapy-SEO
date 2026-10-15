import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import { therapistProfile } from '../../data/therapyData';

export default function ConsultationCTA({ onOpenBooking }) {
  return (
    <section className="py-24 bg-slateGreen-900 text-linen-100 relative">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-7">
          <p className="text-xs uppercase tracking-widest font-semibold text-sage-300">
            A Safe, Low-Pressure First Step
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-linen-100 leading-tight">
            Schedule a Free 15-Minute Consultation
          </h2>

          <p className="text-base sm:text-lg text-linen-300 max-w-xl mx-auto leading-relaxed font-normal">
            Beginning therapy is a meaningful investment in yourself. This call is simply a chance for us to connect, discuss what you are navigating, and decide if we are the right fit.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={onOpenBooking}
              className="bg-linen-100 text-slateGreen-900 hover:bg-linen-200 px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold shadow-paper group"
            >
              <span>Schedule 15-Min Call</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a
              href={`tel:${therapistProfile.phone}`}
              className="inline-flex items-center gap-2 text-linen-200 hover:text-linen-100 text-sm font-medium transition px-4 py-3"
            >
              <Phone className="w-4 h-4 text-sage-300" />
              <span>Or call directly: {therapistProfile.phone}</span>
            </a>
          </div>

          <div className="pt-8 border-t border-slateGreen-800 text-xs text-linen-400 flex flex-wrap justify-center gap-8 font-normal">
            <span>&bull; Completely confidential</span>
            <span>&bull; Zero obligation</span>
            <span>&bull; In-person 123th Street Office or California Telehealth</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
