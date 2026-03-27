import { useEffect, useRef } from 'react';

export const useReveal = <T extends HTMLElement>() => {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const reveals = containerRef.current?.querySelectorAll('.reveal');
    if (!reveals) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find index of this entry among all reveals to add staggered delay
            const index = Array.from(reveals).indexOf(entry.target);
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, index * 80);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => {
      reveals.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return containerRef;
};
