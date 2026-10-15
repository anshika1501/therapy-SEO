import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-slateGreen-800 text-linen-100 hover:bg-slateGreen-900 shadow-sm hover:shadow focus:ring-slateGreen-800',
    secondary: 'bg-transparent text-charcoal-800 border border-charcoal-700/30 hover:border-charcoal-800 hover:bg-sage-100/50 focus:ring-sage-500',
    sage: 'bg-sage-500 text-linen-100 hover:bg-sage-600 shadow-sm focus:ring-sage-500',
    terracotta: 'bg-terracotta-500 text-linen-100 hover:bg-terracotta-600 shadow-sm focus:ring-terracotta-500',
  };

  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-3.5',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
