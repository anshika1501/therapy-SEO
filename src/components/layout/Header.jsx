import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import { therapistProfile } from '../../data/therapyData';

export default function Header({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#F9F6F0]/95 backdrop-blur-md border-b border-[#E7DFD3] transition-all">
      <Container>
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Practice Wordmark */}
          <a href="#" className="group block text-left">
            <span className="font-serif text-2xl sm:text-[26px] font-semibold tracking-tight text-charcoal-900 group-hover:text-sage-700 transition">
              Dr. Maya Reynolds<span className="text-terracotta-500 font-serif italic text-xl ml-1">, PsyD</span>
            </span>
            <span className="block text-[11px] tracking-widest uppercase text-charcoal-600 font-medium mt-0.5">
              Psychologist &bull; Santa Monica & Telehealth
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-[13px] font-medium tracking-wide uppercase text-charcoal-700">
            <a href="#services" className="hover:text-charcoal-900 transition pb-0.5 hover:border-b hover:border-charcoal-800">
              Specialties
            </a>
            <a href="#approach" className="hover:text-charcoal-900 transition pb-0.5 hover:border-b hover:border-charcoal-800">
              Approach
            </a>
            <a href="#about" className="hover:text-charcoal-900 transition pb-0.5 hover:border-b hover:border-charcoal-800">
              About Maya
            </a>
            <a href="#office" className="hover:text-charcoal-900 transition pb-0.5 hover:border-b hover:border-charcoal-800">
              The Office
            </a>
            <a href="#faq" className="hover:text-charcoal-900 transition pb-0.5 hover:border-b hover:border-charcoal-800">
              FAQ
            </a>
          </nav>

          {/* Direct Consultation Action */}
          <div className="hidden sm:flex items-center space-x-5">
            <a
              href={`tel:${therapistProfile.phone}`}
              className="text-xs text-charcoal-600 hover:text-charcoal-900 transition flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-sage-600" />
              <span>{therapistProfile.phone}</span>
            </a>
            <Button
              size="sm"
              onClick={onOpenBooking}
              className="bg-slateGreen-800 hover:bg-slateGreen-900 text-linen-100 text-xs uppercase tracking-widest font-semibold px-5 py-2.5 rounded-full shadow-sm"
            >
              Book Consult
            </Button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-charcoal-800 hover:text-sage-700 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#E7DFD3] bg-[#F9F6F0]">
            <div className="flex flex-col space-y-3 px-2 text-sm uppercase tracking-wider font-medium text-charcoal-800">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded hover:bg-linen-200/60"
              >
                Specialties
              </a>
              <a
                href="#approach"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded hover:bg-linen-200/60"
              >
                Approach
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded hover:bg-linen-200/60"
              >
                About Dr. Reynolds
              </a>
              <a
                href="#office"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded hover:bg-linen-200/60"
              >
                The Office
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded hover:bg-linen-200/60"
              >
                FAQ
              </a>
              <div className="pt-2">
                <Button className="w-full text-xs uppercase tracking-widest" onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}>
                  Schedule Free Consult
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
