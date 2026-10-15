import React from 'react';
import { MapPin, Video, FileText } from 'lucide-react';
import Container from '../common/Container';
import { therapistProfile } from '../../data/therapyData';

export default function PracticeDetails() {
  return (
    <section className="py-20 sm:py-24 bg-linen-100 border-b border-linen-300/80">
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl mb-12 text-left">
          <p className="text-xs uppercase tracking-widest font-semibold text-sage-700 mb-2">
            The Office Sanctuary
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif text-charcoal-900 leading-tight">
            A Quiet, Private Space in Santa Monica
          </h2>
          <p className="mt-3 text-base text-charcoal-700 leading-relaxed font-normal">
            "My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive."
          </p>
        </div>

        {/* Office Images Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {therapistProfile.officeImages.map((img, idx) => (
            <div key={idx} className="bg-linen-50 rounded-2xl p-3 sm:p-4 border border-linen-300 shadow-editorial">
              <div className="aspect-[16/10] rounded-xl overflow-hidden bg-linen-200">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="pt-3 px-1">
                <h3 className="font-serif font-bold text-charcoal-900 text-base">{img.title}</h3>
                <p className="text-xs text-charcoal-600 mt-0.5">{img.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Practice Details Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-linen-50 border border-linen-300/90 shadow-subtle">
            <div className="flex items-center gap-2 text-sage-700 mb-3">
              <MapPin className="w-4 h-4" />
              <h3 className="font-serif font-bold text-charcoal-900 text-base">In-Person Therapy</h3>
            </div>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
              Located at <strong>{therapistProfile.address}</strong>. Designed for deep reflection, unhurried pacing, and complete clinical privacy.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-linen-50 border border-linen-300/90 shadow-subtle">
            <div className="flex items-center gap-2 text-sage-700 mb-3">
              <Video className="w-4 h-4" />
              <h3 className="font-serif font-bold text-charcoal-900 text-base">California Telehealth</h3>
            </div>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
              For clients residing anywhere in California, secure HIPAA-compliant video sessions bring the same warmth and depth into your private setting.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-linen-50 border border-linen-300/90 shadow-subtle">
            <div className="flex items-center gap-2 text-sage-700 mb-3">
              <FileText className="w-4 h-4" />
              <h3 className="font-serif font-bold text-charcoal-900 text-base">Insurance & Superbills</h3>
            </div>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
              As an out-of-network provider, I provide detailed monthly superbills for you to submit to your PPO insurance for potential reimbursement.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
