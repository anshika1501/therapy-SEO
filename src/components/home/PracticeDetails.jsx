import React from 'react';
import { MapPin, Video, FileText, SunMedium, Coffee, Shield } from 'lucide-react';
import Container from '../common/Container';
import FadeIn from '../common/FadeIn';
import { therapistProfile } from '../../data/therapyData';

export default function PracticeDetails() {
  return (
    <section id="office" className="py-20 sm:py-28 bg-[#F9F6F0] border-b border-[#E7DFD3]">
      <Container>
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="max-w-3xl mb-14 text-left">
            <p className="text-xs uppercase tracking-widest font-semibold text-sage-700 mb-2">
              In-Person Santa Monica Practice
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-serif text-charcoal-900 leading-tight">
              The Office Sanctuary
            </h2>
            <p className="mt-4 text-base text-charcoal-700 leading-relaxed font-normal">
              "My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive."
            </p>
          </div>
        </FadeIn>

        {/* Real Office Photographs from Google Drive with Smooth Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {therapistProfile.officeImages.map((img, idx) => (
            <FadeIn key={idx} delay={idx * 150} direction="up">
              <div className="bg-[#F2EDE3] rounded-2xl p-4 sm:p-5 border border-[#E0D6C6] shadow-paper">
                <div className="aspect-[16/11] rounded-xl overflow-hidden bg-[#E6DDD1] relative">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="pt-4 px-1 text-left">
                  <h3 className="font-serif font-bold text-charcoal-900 text-lg">
                    {img.title}
                  </h3>
                  <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">
                    {img.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Office Amenities & Grounding Details */}
        <FadeIn delay={100} direction="up">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14 text-xs text-charcoal-700">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FCFAF6] border border-[#E7DFD3]">
              <SunMedium className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-charcoal-900 mb-0.5">Gentle Natural Light</strong>
                <span>Expansive windows with soft diffused curtains that create a tranquil, warm atmosphere.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FCFAF6] border border-[#E7DFD3]">
              <Coffee className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-charcoal-900 mb-0.5">Uncluttered Comfort</strong>
                <span>Comfortable seating, soft wool rugs, and herbal tea available upon arrival.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FCFAF6] border border-[#E7DFD3]">
              <Shield className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-charcoal-900 mb-0.5">Acoustic Soundproofing</strong>
                <span>Dedicated white noise insulation and strict clinical privacy for total peace of mind.</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Practice Details Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FadeIn delay={100} direction="up">
            <div className="p-7 rounded-2xl bg-[#FCFAF6] border border-[#E7DFD3] h-full">
              <div className="flex items-center gap-2 text-sage-700 mb-3">
                <MapPin className="w-4 h-4" />
                <h3 className="font-serif font-bold text-charcoal-900 text-lg">Santa Monica Office</h3>
              </div>
              <p className="text-sm text-charcoal-700 leading-relaxed">
                Located at <strong>{therapistProfile.address}</strong>. Convenient street parking and quiet access away from busy commercial traffic.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200} direction="up">
            <div className="p-7 rounded-2xl bg-[#FCFAF6] border border-[#E7DFD3] h-full">
              <div className="flex items-center gap-2 text-sage-700 mb-3">
                <Video className="w-4 h-4" />
                <h3 className="font-serif font-bold text-charcoal-900 text-lg">California Telehealth</h3>
              </div>
              <p className="text-sm text-charcoal-700 leading-relaxed">
                Serving adults living anywhere in California via secure, encrypted HIPAA-compliant video. Accessible from home or your office.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={300} direction="up">
            <div className="p-7 rounded-2xl bg-[#FCFAF6] border border-[#E7DFD3] h-full">
              <div className="flex items-center gap-2 text-sage-700 mb-3">
                <FileText className="w-4 h-4" />
                <h3 className="font-serif font-bold text-charcoal-900 text-lg">Superbills & Insurance</h3>
              </div>
              <p className="text-sm text-charcoal-700 leading-relaxed">
                Out-of-network practice with monthly superbills provided for PPO insurance reimbursement. Clear estimates provided under the No Surprises Act.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
