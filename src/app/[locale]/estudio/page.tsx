'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { useTranslations } from '@/hooks/useTranslations';

export default function EstudioPage() {
  const t = useTranslations('estudio');
  
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-8 tracking-tight">
              {t('title')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Historia Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 tracking-tight">
                {t('historia.title')}
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>{t('historia.paragraph1')}</p>
                <p>{t('historia.paragraph2')}</p>
                <p>{t('historia.paragraph3')}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/estudio/LAIN-ANDRES.jpg"
                  alt="Historia NEVA estudio - Andrés y Laín"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Por qué Neva Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 tracking-tight">
              {t('porque.title')}
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p className="text-xl font-medium text-gray-800 mb-4">
                <strong>{t('porque.definition')}</strong>
              </p>
              <p>{t('porque.explanation')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Equipo Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 tracking-tight">
              {t('equipo.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Andrés Suárez */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-48 h-48 mx-auto mb-6 relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/estudio/ANDRES.jpg"
                  alt="Andrés Suárez - Arquitecto"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-2">
                {t('equipo.andres.name')}
              </h3>
              <p className="text-sm text-gray-500 font-light mb-2 tracking-wide uppercase">
                {t('equipo.andres.title')}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                {t('equipo.andres.role')}
              </p>
              <a 
                href="https://www.linkedin.com/in/andrés-suárez-barrientos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-light"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </motion.div>

            {/* Laín Fernández */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-48 h-48 mx-auto mb-6 relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/estudio/LAIN.jpg"
                  alt="Laín Fernández - Arquitecto"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-2">
                {t('equipo.lain.name')}
              </h3>
              <p className="text-sm text-gray-500 font-light mb-2 tracking-wide uppercase">
                {t('equipo.lain.title')}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                {t('equipo.lain.role')}
              </p>
              <a 
                href="https://www.linkedin.com/in/laín-fernández" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-light"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
