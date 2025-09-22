'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import AboutModal from './AboutModal';

export default function AboutSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
        <section id="about" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="mb-16">
                  <img 
                    src="/neva-logo-apaisado.svg" 
                    alt="NEVA Estudio" 
                    className="h-20 w-auto mb-6"
                  />
                  <div className="w-20 h-px bg-gray-400"></div>
                </div>
                <h2 className="text-3xl md:text-4xl font-thin text-gray-900 mb-10 tracking-tight leading-tight">
                  Arquitectos en Gijón
                </h2>
                <div className="w-20 h-px bg-gray-400 mb-16"></div>
                
                <div className="space-y-8 mb-20">
                  <p className="text-lg text-gray-600 leading-relaxed font-light">
                    NEVA es un estudio de arquitectura, con sede en Gijón, que cuenta con más de 10 años de experiencia en el sector. Esto nos ha permitido desarrollar una forma de trabajar que va más allá de la arquitectura, acompañando al cliente y valorando su opinión en todo momento.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed font-light">
                    Damos forma a tu proyecto para que se adapte a tus gustos y necesidades.
                  </p>
                </div>

                {/* Why Choose Us Section - Moved to separate section below */}

                {/* Single CTA Button */}
                <div className="mb-20">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-3 border border-gray-900 text-gray-900 px-10 py-3 font-light text-base hover:bg-gray-900 hover:text-white transition-all duration-300"
                  >
                    Conoce más sobre nuestro estudio
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                
          </motion.div>

          {/* Image - Clean */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src="/estudio/LAIN-ANDRES.jpg"
                alt="Estudio NEVA arquitectura - Andrés y Laín"
                fill
                className="object-contain object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* About Modal */}
      <AboutModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>

    {/* Why Choose Us Section - Horizontal with Yellow Dot Pattern */}
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Yellow Dot Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #fbbf24 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-thin text-gray-900 mb-6 tracking-tight">
            ¿Por qué elegir a Neva Estudio?
          </h2>
          <div className="w-24 h-px bg-gray-400 mx-auto mt-8"></div>
        </motion.div>

        {/* Horizontal Layout - 4 columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* 1. Experiencia y profesionalidad */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="h-full border border-gray-200 hover:border-gray-300 transition-all duration-300 p-8 hover:shadow-lg">
              <div className="space-y-6">
                {/* Number and Title */}
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-lg font-light group-hover:bg-yellow-500 transition-colors duration-300">
                      01
                    </div>
                    <h3 className="text-xl font-light text-gray-900 group-hover:text-gray-700 transition-colors">
                      Experiencia y profesionalidad
                    </h3>
                  </div>
                  <div className="w-8 h-px bg-gray-400 group-hover:bg-gray-600 transition-colors"></div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  Los arquitectos que formamos Neva contamos con amplia experiencia en proyectos de distinta escala por toda España. Sea cual sea tu necesidad no dudes en consultarnos.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* 2. Enfoque personalizado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="h-full border border-gray-200 hover:border-gray-300 transition-all duration-300 p-8 hover:shadow-lg">
              <div className="space-y-6">
                {/* Number and Title */}
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-lg font-light group-hover:bg-yellow-500 transition-colors duration-300">
                      02
                    </div>
                    <h3 className="text-xl font-light text-gray-900 group-hover:text-gray-700 transition-colors">
                      Enfoque personalizado
                    </h3>
                  </div>
                  <div className="w-8 h-px bg-gray-400 group-hover:bg-gray-600 transition-colors"></div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  Nuestro primer paso siempre es conocer a nuestros clientes y entender lo que buscan. Este enfoque personalizado nos permite adaptar cada proyecto a tus necesidades específicas y que siempre lo sientas como tuyo.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* 3. Compromiso con el éxito */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="h-full border border-gray-200 hover:border-gray-300 transition-all duration-300 p-8 hover:shadow-lg">
              <div className="space-y-6">
                {/* Number and Title */}
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-lg font-light group-hover:bg-yellow-500 transition-colors duration-300">
                      03
                    </div>
                    <h3 className="text-xl font-light text-gray-900 group-hover:text-gray-700 transition-colors">
                      Compromiso con el éxito
                    </h3>
                  </div>
                  <div className="w-8 h-px bg-gray-400 group-hover:bg-gray-600 transition-colors"></div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  Nuestro objetivo es superar las expectativas de nuestros clientes en cada proyecto. En Neva Estudio nos comprometemos con el éxito y trabajamos para ofrecer resultados de calidad.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* 4. Versatilidad y adaptabilidad */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="h-full border border-gray-200 hover:border-gray-300 transition-all duration-300 p-8 hover:shadow-lg">
              <div className="space-y-6">
                {/* Number and Title */}
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-lg font-light group-hover:bg-yellow-500 transition-colors duration-300">
                      04
                    </div>
                    <h3 className="text-xl font-light text-gray-900 group-hover:text-gray-700 transition-colors">
                      Versatilidad y adaptabilidad
                    </h3>
                  </div>
                  <div className="w-8 h-px bg-gray-400 group-hover:bg-gray-600 transition-colors"></div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  Si algo define a nuestro equipo de arquitectos en Gijón es su versatilidad y adaptabilidad, que nos permiten dar respuesta a cualquier proyecto, sin importar su tamaño o complejidad.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
    </>
  );
}
