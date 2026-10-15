import React from 'react';
import { MapPin, Phone, Mail, ShieldAlert } from 'lucide-react';
import Container from '../common/Container';
import { therapistProfile } from '../../data/therapyData';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-slateGreen-900 text-linen-200 pt-16 pb-12 border-t border-slateGreen-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Practice Info */}
          <div className="space-y-3">
            <h3 className="font-serif text-2xl text-linen-100 font-semibold">
              {therapistProfile.name}, {therapistProfile.credentials}
            </h3>
            <p className="text-linen-300 text-sm leading-relaxed">
              {therapistProfile.title} ({therapistProfile.licenseNumber}). Providing therapy for adults navigating anxiety, trauma, and burnout in Santa Monica, California and online across the state.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-sage-300">
              Specialties
            </h4>
            <ul className="space-y-2 text-sm text-linen-300">
              <li>
                <a href="#services" className="hover:text-linen-100 transition">
                  Anxiety Therapy in Santa Monica
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-linen-100 transition">
                  Trauma-Informed Counseling
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-linen-100 transition">
                  Burnout & Stress Therapy
                </a>
              </li>
              <li>
                <a href="#approach" className="hover:text-linen-100 transition">
                  EMDR & Somatic Care
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-sage-300">
              Office & Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-linen-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sage-300 shrink-0 mt-0.5" />
                <span>{therapistProfile.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sage-300 shrink-0" />
                <a href={`tel:${therapistProfile.phone}`} className="hover:text-linen-100 transition">
                  {therapistProfile.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sage-300 shrink-0" />
                <a href={`mailto:${therapistProfile.email}`} className="hover:text-linen-100 transition">
                  {therapistProfile.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Consultation Box */}
          <div className="bg-slateGreen-800/80 rounded-xl p-6 border border-slateGreen-700/60 flex flex-col justify-between">
            <div>
              <h4 className="font-serif text-lg text-linen-100 mb-1.5">Free Consultation</h4>
              <p className="text-xs text-linen-300 leading-relaxed mb-4">
                Schedule a 15-minute phone or video conversation to discuss your goals and see if we are a good fit.
              </p>
            </div>
            <button
              onClick={onOpenBooking}
              className="w-full py-2.5 px-4 bg-linen-100 hover:bg-linen-200 text-slateGreen-900 rounded-full text-xs font-semibold uppercase tracking-wider transition cursor-pointer"
            >
              Book 15-Min Consult
            </button>
          </div>
        </div>

        {/* Crisis Hotline & Legal Disclaimer */}
        <div className="pt-8 border-t border-slateGreen-800/80 text-xs text-linen-300 space-y-3">
          <div className="flex items-start gap-2 text-linen-300 bg-slateGreen-950/60 p-4 rounded-xl border border-slateGreen-800">
            <ShieldAlert className="w-4 h-4 text-terracotta-400 shrink-0 mt-0.5" />
            <p>
              <strong>Crisis Notice:</strong> If you or someone you know is in immediate danger or experiencing a mental health crisis, please call 911, go to the nearest emergency room, or call/text the 988 Suicide & Crisis Lifeline (dial 988). Website communication does not constitute a doctor-patient relationship.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 text-linen-400 gap-2">
            <p>
              © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD &bull; California Licensed Psychologist ({therapistProfile.licenseNumber})
            </p>
            <p>
              {therapistProfile.address}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
