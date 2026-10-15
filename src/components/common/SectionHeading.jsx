import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignment = align === 'left' ? 'text-left' : 'text-center mx-auto';

  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${alignment} ${className}`}>
      {eyebrow && (
        <span className="inline-block text-xs uppercase tracking-widest font-semibold text-sage-600 bg-sage-100/70 px-3.5 py-1 rounded-full mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-4xl font-serif text-charcoal-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-charcoal-700 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
