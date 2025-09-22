'use client';

import Link from 'next/link';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslations, useLocale } from '@/hooks/useTranslations';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('navigation');
  const locale = useLocale();
  return (
        <footer className="bg-gray-50 text-gray-900 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
              {/* Logo and Description */}
              <div className="col-span-1 md:col-span-2">
                <div className="mb-8">
                  <img 
                    src="/neva-logo-apaisado.svg" 
                    alt="NEVA Estudio" 
                    className="h-14 w-auto"
                  />
                </div>
                <p className="text-gray-600 mb-8 max-w-lg text-sm font-light leading-relaxed">
              {t('description')}
            </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/company/neva-estudio" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/nevaestudio/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
          </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-base font-light mb-8 tracking-wide">{t('links')}</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href={`/${locale}#hero`} className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light">
                      {tNav('home')}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}#about`} className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light">
                      {tNav('about')}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}#projects`} className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light">
                      {tNav('projects')}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}#services`} className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light">
                      {tNav('services')}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}#contact`} className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light">
                      {tNav('contact')}
                    </Link>
                  </li>
                </ul>
              </div>

          {/* Contact Info */}
          <div>
                <h3 className="text-base font-light mb-8 tracking-wide">{t('contact')}</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-600 text-sm font-light">Calle Decano Prendes Pando 20, 1°E, Gijón, Asturias</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-600 text-sm font-light">estudio@nevaestudio.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-16 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm font-light">
              {t('copyright')}
            </p>
            
            {/* Funding Logos */}
            <div className="flex items-center space-x-6 mt-6 md:mt-0">
              <img 
                src="/es_financiado_por_la_union_europea_rgb_black_outline-2048x53.png" 
                alt="Financiado por la Unión Europea" 
                className="h-8 w-auto opacity-70"
              />
              <img 
                src="/logo-prtr-tres-li╠uneas_negro.png" 
                alt="PRTR" 
                className="h-8 w-auto opacity-70"
              />
            </div>
            
            <div className="flex flex-wrap gap-4 mt-6 md:mt-0">
              <Link href="/politica-accesibilidad" className="text-gray-500 hover:text-gray-900 text-sm font-light transition-colors">
                Política de Accesibilidad
              </Link>
              <Link href="/politica-privacidad" className="text-gray-500 hover:text-gray-900 text-sm font-light transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/politica-cookies" className="text-gray-500 hover:text-gray-900 text-sm font-light transition-colors">
                Política de Cookies
              </Link>
              <Link href="/aviso-legal" className="text-gray-500 hover:text-gray-900 text-sm font-light transition-colors">
                Aviso Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
