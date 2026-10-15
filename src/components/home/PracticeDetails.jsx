import React from 'react';
import { MapPin, Video, FileText } from 'lucide-react';
import Container from '../common/Container';
import FadeIn from '../common/FadeIn';
import { therapistProfile } from '../../data/therapyData';

export default function PracticeDetails() {
  return (
    <section id="office" className="py-20 sm:py-24 bg-[#F9F6F0] border-b border-[#E7DFD3]">
      <Container>
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="max-w-2xl mb-12 text-left">
            <p className="text-xs uppercase tracking-wider font-semibold text-charcoal-600 mb-1">
              Santa Monica Office & Telehealth
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif text-charcoal-900 leading-tight">
              The Office Environment
            </h2>
            <p className="mt-3 text-base text-charcoal-700 leading-relaxed font-normal">
              Located on 123th Street in Santa Monica, the office is a quiet, uncluttered space designed to feel calm and grounding, with natural light and a private, comfortable setting.
            </p>
          </div>
        </FadeIn>

        {/* Real Office Photographs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {therapistProfile.officeImages.map((img, idx) => (
            <FadeIn key={idx} delay={idx * 120} direction="up">
              <div className="bg-[#F2EDE3] rounded-xl p-3 sm:p-4 border border-[#E0D6C6]">
                <div className="aspect-[16/11] rounded-lg overflow-hidden bg-[#E6DDD1]">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="pt-3 px-1 text-left">
                  <h3 className="font-serif font-semibold text-charcoal-900 text-base">
                    {img.title}
                  </h3>
                  <p className="text-xs text-charcoal-600 mt-0.5">
                    {img.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Practice Logistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FadeIn delay={100} direction="up">
            <div className="p-6 rounded-xl bg-[#FCFAF6] border border-[#E7DFD3] h-full">
              <div className="flex items-center gap-2 text-charcoal-800 mb-2">
                <MapPin className="w-4 h-4 text-sage-600" />
                <h3 className="font-serif font-semibold text-charcoal-900 text-base">In-Person Therapy</h3>
              </div>
              <p className="text-sm text-charcoal-700 leading-relaxed">
                Located at <strong>{therapistProfile.address}</strong>. Quiet setting away from heavy traffic, with accessible street parking.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200} direction="up">
            <div className="p-6 rounded-xl bg-[#FCFAF6] border border-[#E7DFD3] h-full">
              <div className="flex items-center gap-2 text-charcoal-800 mb-2">
                <Video className="w-4 h-4 text-sage-600" />
                <h3 className="font-serif font-semibold text-charcoal-900 text-base">California Telehealth</h3>
              </div>
              <p className="text-sm text-charcoal-700 leading-relaxed">
                Available to adults living anywhere in California via a secure, HIPAA-compliant telehealth platform.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={300} direction="up">
            <div className="p-6 rounded-xl bg-[#FCFAF6] border border-[#E7DFD3] h-full">
              <div className="flex items-center gap-2 text-charcoal-800 mb-2">
                <FileText className="w-4 h-4 text-sage-600" />
                <h3 className="font-serif font-semibold text-charcoal-900 text-base">Fees & Superbills</h3>
              </div>
              <p className="text-sm text-charcoal-700 leading-relaxed">
                Out-of-network practice. Monthly superbills are provided for you to submit to your PPO insurance for potential reimbursement.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
