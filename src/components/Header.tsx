'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useTranslations, useLocale } from '@/hooks/useTranslations';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();

  // Check if we're on the main page (home)
  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;

  const navigation = [
    { id: 'home', name: t('home'), href: isHomePage ? '#hero' : `/${locale}#hero` },
    { id: 'about', name: t('about'), href: isHomePage ? '#about' : `/${locale}#about` },
    { id: 'projects', name: t('projects'), href: isHomePage ? '#projects' : `/${locale}#projects` },
    { id: 'services', name: t('services'), href: isHomePage ? '#services' : `/${locale}#services` },
    { id: 'contact', name: t('contact'), href: isHomePage ? '#contact' : `/${locale}#contact` },
  ];

  return (
        <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link 
                href={isHomePage ? '#' : `/${locale}`} 
                className="flex-shrink-0"
                onClick={(e) => {
                  if (isHomePage) {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                  setIsMenuOpen(false);
                }}
              >
                <img 
                  src="/neva-logo.svg" 
                  alt="NEVA Estudio" 
                  className="h-10 w-auto"
                />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-6 items-center">
                {navigation.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-light tracking-wide transition-colors duration-300 hover:border-b border-gray-300"
                    onClick={(e) => {
                      if (isHomePage) {
                        // On home page, scroll to section
                        e.preventDefault();
                        const element = document.querySelector(item.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                      // If not on home page, let the link navigate normally
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                  {navigation.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium transition-colors duration-200"
                      onClick={(e) => {
                        if (isHomePage) {
                          // On home page, scroll to section
                          e.preventDefault();
                          const element = document.querySelector(item.href);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
                        // If not on home page, let the link navigate normally
                        setIsMenuOpen(false);
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
