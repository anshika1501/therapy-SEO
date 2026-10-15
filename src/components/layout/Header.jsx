import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import { therapistProfile } from '../../data/therapyData';

export default function Header({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-linen-100/95 backdrop-blur-sm border-b border-linen-300/80 transition-all">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Practice Wordmark */}
          <a href="#" className="group block text-left">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-charcoal-900 group-hover:text-sage-700 transition">
              {therapistProfile.name}, <span className="font-normal text-lg">{therapistProfile.credentials}</span>
            </span>
            <span className="block text-[11px] uppercase tracking-widest text-charcoal-600 font-medium mt-0.5">
              Psychotherapy & EMDR &bull; {therapistProfile.location}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-charcoal-700">
            <a href="#services" className="hover:text-charcoal-900 transition">
              Services
            </a>
            <a href="#approach" className="hover:text-charcoal-900 transition">
              Approach
            </a>
            <a href="#about" className="hover:text-charcoal-900 transition">
              About
            </a>
            <a href="#faq" className="hover:text-charcoal-900 transition">
              FAQ
            </a>
            <a
              href={`tel:${therapistProfile.phone}`}
              className="flex items-center gap-1.5 text-xs text-charcoal-600 hover:text-charcoal-900 font-normal pl-2 border-l border-linen-300"
            >
              <Phone className="w-3.5 h-3.5 text-sage-600" />
              <span>{therapistProfile.phone}</span>
            </a>
          </nav>

          {/* Low-pressure CTA button */}
          <div className="hidden sm:flex items-center">
            <Button
              size="sm"
              onClick={onOpenBooking}
              className="bg-slateGreen-800 hover:bg-slateGreen-900 text-linen-100 text-xs tracking-wider uppercase font-semibold px-5 py-2.5 rounded-full"
            >
              Schedule Consult
            </Button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden">
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
          <div className="md:hidden py-4 border-t border-linen-300 bg-linen-100">
            <div className="flex flex-col space-y-3 px-2 text-base font-medium text-charcoal-800">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded hover:bg-linen-200/60"
              >
                Services
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
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded hover:bg-linen-200/60"
              >
                FAQ
              </a>
              <div className="pt-2">
                <Button className="w-full" onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}>
                  Schedule Consult
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
