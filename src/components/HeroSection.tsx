'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useTranslations } from '@/hooks/useTranslations';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const t = useTranslations('hero');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    '/hero/AC-07-scaled.webp',
    '/hero/BR-04.webp',
    '/hero/construccion-nueva-vivenda-exterior-e1728405546902.webp',
    '/hero/NVP-06-1536x1153.jpg',
    '/hero/OL-MINIATURA-Y-PORTADA-2-e1728404536802-2048x1536.jpg'
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section id="hero" className="relative min-h-screen bg-white">
      {/* Logo Above Carousel */}
      <motion.div 
        initial={{ opacity: 0, y: -30, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0, ease: "easeOut" }}
        className="absolute top-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <img 
          src="/neva-logo.svg" 
          alt="NEVA Estudio" 
          className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto brightness-0 invert"
        />
      </motion.div>

      {/* Image Carousel */}
      <div className="relative h-[85vh] overflow-hidden">
        {/* Black Background - appears first, fades out when images start */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-black z-10"
        />
        
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentImageIndex ? 1 : 0,
              scale: index === currentImageIndex ? 1 : 1.05
            }}
            transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={image}
              alt={`Proyecto arquitectónico ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </motion.div>
        ))}
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-yellow-400 scale-125' 
                  : 'bg-white/70 hover:bg-white'
              }`}
            />
          ))}
        </div>

        {/* NEVA ESTUDIO Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 text-center"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin tracking-widest"
          >
            NEVA
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light tracking-[0.3em] mt-2"
          >
            ESTUDIO
          </motion.div>
        </motion.div>
      </div>

          {/* Text Content Below Images */}
          <div className="relative bg-white py-16 sm:py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
                {/* Main Heading - Architectural Typography */}
                <div className="mb-12 sm:mb-16 lg:mb-20">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin mb-8 sm:mb-10 lg:mb-12 tracking-tight leading-[0.9]">
                    <span className="text-gray-900 font-light">{t('greeting')}</span>
                    <span className="font-thin text-gray-900 ml-4">{t('company')}</span>
                  </h1>
                  <div className="w-24 h-px bg-gray-400 mx-auto"></div>
                </div>
        
            {/* Description Text - Architectural Minimalism */}
            <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10 mb-12 sm:mb-16 lg:mb-20">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed"
              >
                {t('description')}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg md:text-xl font-light text-gray-500 leading-relaxed"
              >
                {t('description2')}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl font-light text-gray-500 leading-relaxed"
              >
                {t('description3')}
              </motion.p>
            </div>

            {/* Call to Action Buttons - Architectural Minimalism */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <button
                onClick={() => {
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group bg-gray-900 text-white px-12 py-4 font-light text-lg hover:bg-gray-800 transition-all duration-300 flex items-center gap-3 border border-gray-900"
              >
                {t('viewProjects')}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border border-gray-900 text-gray-900 px-12 py-4 font-light text-lg hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                {t('contact')}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <ChevronDown className="h-8 w-8 text-gray-600 animate-bounce" />
      </motion.div>
    </section>
  );
}
