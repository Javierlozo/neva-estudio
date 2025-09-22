'use client';

import { useEffect } from 'react';

export default function ScrollToSection() {
  useEffect(() => {
    // Handle hash navigation when the page loads
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Small delay to ensure the page is fully loaded
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    // Run on mount
    handleHashNavigation();

    // Also listen for hash changes
    window.addEventListener('hashchange', handleHashNavigation);

    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);

  return null;
}
