import React from 'react';
import { MapPin, Phone, Mail, ShieldAlert, Heart } from 'lucide-react';
import Container from '../common/Container';
import { therapistProfile } from '../../data/therapyData';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-slateGreen-900 text-linen-200 pt-16 pb-12 border-t border-slateGreen-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Practice Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-linen-100 font-semibold">
              {therapistProfile.name}, {therapistProfile.credentials}
            </h3>
            <p className="text-linen-300 text-sm leading-relaxed">
              {therapistProfile.title} ({therapistProfile.licenseNumber}) providing compassionate, evidence-based trauma, anxiety, and burnout therapy in Santa Monica, California and online statewide.
            </p>
            <div className="pt-2">
              <span className="inline-block text-xs bg-slateGreen-800 text-sage-200 px-3 py-1.5 rounded-full border border-sage-500/20">
                California Telehealth Licensed
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-sage-300">
              Services & Specialties
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
                  Burnout & Executive Stress
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
            <h4 className="text-sm font-semibold uppercase tracking-wider text-sage-300">
              Office & Practice
            </h4>
            <ul className="space-y-3 text-sm text-linen-300">
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

          {/* Consultation CTA Card */}
          <div className="bg-slateGreen-800/80 rounded-2xl p-6 border border-sage-500/20 flex flex-col justify-between">
            <div>
              <h4 className="font-serif text-lg text-linen-100 mb-2">Ready to take the first step?</h4>
              <p className="text-xs text-linen-300 leading-relaxed mb-4">
                Reach out for a calm, free 15-minute consultation to see if we are the right fit.
              </p>
            </div>
            <button
              onClick={onOpenBooking}
              className="w-full py-2.5 px-4 bg-terracotta-500 hover:bg-terracotta-600 text-linen-100 rounded-full text-xs font-semibold uppercase tracking-wider transition"
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
              <strong>Crisis Support Disclaimer:</strong> If you or someone you know is in immediate danger or experiencing a mental health emergency, please call 911, go to the nearest emergency room, or call/text the 988 Suicide & Crisis Lifeline (dial 988). This website is for informational purposes and does not establish a doctor-patient relationship.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 text-linen-400 gap-2">
            <p>
              © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved. Santa Monica, CA.
            </p>
            <p className="flex items-center gap-1">
              Crafted with <Heart className="w-3.5 h-3.5 text-terracotta-400 inline" /> for compassionate healing.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
