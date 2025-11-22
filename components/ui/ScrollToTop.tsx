"use client";

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    
    const toggleVisibility = () => {
      // Throttle the visibility check to improve performance
      if (timeoutId) return;
      
      timeoutId = setTimeout(() => {
        // Show button when page is scrolled down 300px
        if (window.scrollY > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
        timeoutId = null;
      }, 100); // Throttle to once per 100ms
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-[var(--color-red)] text-white rounded-full shadow-lg hover:bg-[var(--color-red)]/90 transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-red)]"
          aria-label="Scroll to top"
          type="button"
        >
          <ArrowUp className="w-6 h-6" strokeWidth={2} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
