import React, { useEffect, useRef, useState } from 'react';

export default function FadeIn({
  children,
  delay = 0,
  duration = 700,
  direction = 'up',
  className = '',
  immediate = false,
}) {
  const [isVisible, setIsVisible] = useState(immediate);
  const domRef = useRef();

  useEffect(() => {
    if (immediate) {
      const timer = setTimeout(() => setIsVisible(true), delay);
      return () => clearTimeout(timer);
    }

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [delay, immediate]);

  const getTransform = () => {
    if (isVisible) return 'translateY(0) scale(1)';
    if (direction === 'up') return 'translateY(22px) scale(0.995)';
    return 'translateY(0) scale(0.99)';
  };

  return (
    <div
      ref={domRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
      className={className}
    >
      {children}
    </div>
  );
}
