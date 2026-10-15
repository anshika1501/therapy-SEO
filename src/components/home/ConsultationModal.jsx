import React, { useState } from 'react';
import { X, CheckCircle, Clock, ShieldCheck } from 'lucide-react';
import Button from '../common/Button';
import { therapistProfile } from '../../data/therapyData';

export default function ConsultationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'Anxiety Therapy in Santa Monica',
    sessionFormat: 'Santa Monica In-Person',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-linen-100 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-editorial border border-linen-300 relative max-h-[92vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-charcoal-600 hover:text-charcoal-900 hover:bg-linen-200 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 bg-sage-100 text-sage-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-charcoal-900">
              Inquiry Received
            </h3>
            <p className="text-charcoal-700 text-sm leading-relaxed max-w-sm mx-auto">
              Thank you, {formData.name}. Your consultation request has been received with strict medical confidentiality. Dr. Maya Reynolds will personally follow up within 24 business hours to arrange our 15-minute call.
            </p>
            <div className="pt-4">
              <Button onClick={handleReset} variant="primary">
                Return to Site
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="space-y-1 mb-6 text-left">
              <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-sage-700 mb-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Complimentary 15-Minute Phone Consultation</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-charcoal-900">
                Connect with Dr. Reynolds
              </h3>
              <p className="text-xs text-charcoal-600">
                Licensed Clinical Psychologist &bull; Santa Monica & California Telehealth
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full px-4 py-2.5 rounded-lg border border-linen-300 bg-linen-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sage-600 text-sm text-charcoal-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-linen-300 bg-linen-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sage-600 text-sm text-charcoal-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(310) 000-0000"
                    className="w-full px-4 py-2.5 rounded-lg border border-linen-300 bg-linen-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sage-600 text-sm text-charcoal-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-1">
                  Primary Area of Concern
                </label>
                <select
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-linen-300 bg-linen-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sage-600 text-sm text-charcoal-900"
                >
                  <option value="Anxiety Therapy in Santa Monica">Anxiety Therapy in Santa Monica</option>
                  <option value="Trauma-Informed Counseling in Santa Monica">Trauma-Informed Counseling in Santa Monica</option>
                  <option value="Burnout & Stress Therapy near Santa Monica">Burnout & Stress Therapy near Santa Monica</option>
                  <option value="General Exploration & Consultation">General Exploration & Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-1">
                  Preferred Session Location
                </label>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <label className="flex items-center gap-2 p-2.5 rounded-lg border border-linen-300 bg-linen-50 cursor-pointer hover:border-sage-500">
                    <input
                      type="radio"
                      name="sessionFormat"
                      value="Santa Monica In-Person"
                      checked={formData.sessionFormat === 'Santa Monica In-Person'}
                      onChange={(e) => setFormData({ ...formData, sessionFormat: e.target.value })}
                    />
                    <span>Santa Monica (123th St)</span>

                  </label>
                  <label className="flex items-center gap-2 p-2.5 rounded-lg border border-linen-300 bg-linen-50 cursor-pointer hover:border-sage-500">
                    <input
                      type="radio"
                      name="sessionFormat"
                      value="California Telehealth"
                      checked={formData.sessionFormat === 'California Telehealth'}
                      onChange={(e) => setFormData({ ...formData, sessionFormat: e.target.value })}
                    />
                    <span>California Telehealth</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-1">
                  Brief Note (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share anything you'd like Dr. Reynolds to know ahead of our call..."
                  className="w-full px-4 py-2.5 rounded-lg border border-linen-300 bg-linen-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sage-600 text-sm text-charcoal-900"
                />
              </div>

              <div className="pt-2">
                <Button type="submit" className="w-full" variant="primary">
                  Request Free 15-Minute Consult
                </Button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-charcoal-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-sage-600" />
                <span>Confidential healthcare communication</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
