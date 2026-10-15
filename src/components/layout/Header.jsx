import React, { useState } from 'react';
import { Menu, X, Phone, HeartHandshake } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import { therapistProfile } from '../../data/therapyData';

export default function Header({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-linen-100/90 backdrop-blur-md border-b border-linen-300/60 transition-all">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo & Doctor Title */}
          <a href="#" className="group flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-sage-500/15 flex items-center justify-center text-sage-600 group-hover:bg-sage-500/25 transition">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-charcoal-900 group-hover:text-sage-700 transition">
                {therapistProfile.name}
              </span>
              <span className="block text-xs uppercase tracking-wider text-charcoal-700 font-medium">
                {therapistProfile.credentials} • {therapistProfile.location}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-charcoal-800">
            <a href="#services" className="hover:text-sage-600 transition">
              Services
            </a>
            <a href="#approach" className="hover:text-sage-600 transition">
              My Approach
            </a>
            <a href="#about" className="hover:text-sage-600 transition">
              About
            </a>
            <a href="#faq" className="hover:text-sage-600 transition">
              FAQ
            </a>
            <a
              href={`tel:${therapistProfile.phone}`}
              className="flex items-center gap-1.5 text-xs text-charcoal-700 hover:text-sage-600 font-normal px-2.5 py-1 rounded-full bg-linen-200"
            >
              <Phone className="w-3.5 h-3.5 text-sage-600" />
              <span>{therapistProfile.phone}</span>
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <Button size="sm" onClick={onOpenBooking}>
              Schedule Free Consult
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-charcoal-800 hover:text-sage-600 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-linen-300/80 bg-linen-100">
            <div className="flex flex-col space-y-3 px-2 text-base font-medium text-charcoal-800">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-sage-100/60"
              >
                Services
              </a>
              <a
                href="#approach"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-sage-100/60"
              >
                My Approach
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-sage-100/60"
              >
                About Dr. Reynolds
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-sage-100/60"
              >
                Frequently Asked Questions
              </a>
              <div className="pt-2">
                <Button className="w-full" onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}>
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
