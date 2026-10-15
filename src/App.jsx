import React, { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import ServicesGrid from './components/home/ServicesGrid';
import ApproachSection from './components/home/ApproachSection';
import AboutPreview from './components/home/AboutPreview';
import TestimonialsFAQ from './components/home/TestimonialsFAQ';
import PracticeDetails from './components/home/PracticeDetails';
import ConsultationCTA from './components/home/ConsultationCTA';
import ConsultationModal from './components/home/ConsultationModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-linen-100 text-charcoal-900">
      {/* Navigation Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Featured SEO Services */}
        <ServicesGrid onOpenBooking={handleOpenBooking} />

        {/* Clinical Approach (EMDR, CBT, Somatics, Mindfulness) */}
        <ApproachSection />

        {/* About Dr. Maya Reynolds */}
        <AboutPreview onOpenBooking={handleOpenBooking} />

        {/* Practice Logistics & Transparency */}
        <PracticeDetails />

        {/* Frequently Asked Questions */}
        <TestimonialsFAQ />

        {/* Consultation Call to Action */}
        <ConsultationCTA onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Interactive Consultation Modal */}
      <ConsultationModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}
