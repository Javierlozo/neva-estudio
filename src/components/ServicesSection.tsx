'use client';

import { motion } from 'framer-motion';
import { Home, Building, MapPin, Zap, FileText, Wrench, Key } from 'lucide-react';
import { useTranslations } from '@/hooks/useTranslations';
import { useState } from 'react';
import ServiceModal from './ServiceModal';

export default function ServicesSection() {
  const t = useTranslations('services');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceKey, setSelectedServiceKey] = useState<string>('');
  const [showAllServices, setShowAllServices] = useState(false);

  const services = [
    {
      title: 'Residencial',
      description: 'Dentro de la arquitectura residencial, realizamos proyectos de obra nueva, rehabilitaciones, ampliaciones y reformas interiores.',
      features: [
        'Vivienda unifamiliar',
        'Vivienda colectiva', 
        'Cambios de uso local a vivienda',
        'Reformas',
        'Mejoras en la accesibilidad de portales'
      ],
      icon: Home,
      serviceKey: 'residential'
    },
    {
      title: 'Comercial',
      description: 'Trabajamos para potenciar los negocios, adaptándonos a las necesidades de cada marca o cliente.',
      features: [
        'Cambios de uso',
        'Adecuación de locales para comercio, hostelería, etc.',
        'Proyectos de actividad',
        'Licencias de apertura'
      ],
      icon: Building,
      serviceKey: 'commercial'
    },
    {
      title: 'Urbanismo',
      description: 'Desarrollamos Planes urbanísticos y proyectos específicos de parcelación y urbanización, así como alegaciones y sugerencias a Planes Generales.',
      features: [
        'Proyectos de parcelación',
        'Proyectos de urbanización'
      ],
      icon: MapPin,
      serviceKey: 'urbanism'
    },
    {
      title: 'Rehabilitación energética',
      description: 'La eficiencia energética forma parte de nuestra apuesta. Mejoramos la envolvente térmica de edificios para aumentar el confort y reducir el consumo de energía.',
      features: [
        'Envolventes térmicas de edificios'
      ],
      icon: Zap,
      serviceKey: 'energy'
    },
    {
      title: 'Informes',
      description: 'Proveemos la documentación técnica y certificaciones necesarias para cualquier trabajo de carácter técnico.',
      features: [
        'Expedientes de legalización',
        'Certificados de obra nueva antigua',
        'Informes técnicos',
        'Informes de Evaluación de Edificios',
        'Certificados de Eficiencia Energética'
      ],
      icon: FileText,
      serviceKey: 'reports'
    },
    {
      title: 'Otros proyectos',
      description: 'En Neva estudio ofrecemos soluciones en todos los ámbitos de la arquitectura.',
      features: [
        'Consultoría y asesoramiento',
        'Diseño de interiores',
        'Proyectos de demolición',
        'Modelado 3D e infografías'
      ],
      icon: Wrench,
      serviceKey: 'others'
    },
    {
      title: 'LLAVE EN MANO',
      description: 'Gestionamos integralmente todas las fases de proyecto, desde el inicio hasta la entrega final de la obra. Nuestro objetivo es simplificarle al cliente el proceso, organizando y coordinando los distintos trámites y agentes.',
      features: [],
      icon: Key,
      serviceKey: 'turnkey'
    }
  ];

  const handleServiceClick = (serviceKey: string) => {
    setSelectedServiceKey(serviceKey);
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-thin text-gray-900 mb-6 sm:mb-8 lg:mb-10 tracking-tight">
            {t('title')}
          </h2>
          <div className="w-20 h-px bg-gray-400 mb-8 sm:mb-10 lg:mb-12 mx-auto"></div>
          
          <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              {t('description')}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              {t('subtitle')}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              {t('subtitle2')}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              {t('cta')}
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {(showAllServices ? services : services.slice(0, 3)).map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full border border-gray-200 hover:border-gray-300 transition-all duration-300 p-8 hover:shadow-lg">
                  <div className="space-y-6">
                    {/* Icon and Title */}
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-gray-100 group-hover:bg-gray-200 transition-colors duration-300 rounded-lg">
                          <IconComponent className="h-6 w-6 text-gray-600 group-hover:text-gray-800 transition-colors" />
                        </div>
                        <h3 className="text-xl font-light text-gray-900 group-hover:text-gray-700 transition-colors">
                          {service.title}
                        </h3>
                      </div>
                      <div className="w-8 h-px bg-gray-400 group-hover:bg-gray-600 transition-colors"></div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed font-light">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => {
                        // Check if this feature has detailed information
                        const hasDetailedInfo = (service.serviceKey === 'residential' && 
                          ['Vivienda unifamiliar', 'Vivienda colectiva', 'Cambios de uso local a vivienda', 'Reformas'].includes(feature)) ||
                          (service.serviceKey === 'reports' && 
                          ['Certificados de obra nueva antigua', 'Certificados de Eficiencia Energética'].includes(feature));
                        
                        return (
                          <div key={featureIndex} className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"></div>
                              <span className="text-gray-600 text-xs font-light">{feature}</span>
                            </div>
                            {hasDetailedInfo && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  const serviceMap: { [key: string]: string } = {
                                    'Vivienda unifamiliar': 'viviendas-unifamiliares',
                                    'Vivienda colectiva': 'vivienda-colectiva',
                                    'Cambios de uso local a vivienda': 'cambio-de-uso',
                                    'Reformas': 'reformas-integrales',
                                    'Certificados de obra nueva antigua': 'certificado-obra-nueva-antigua',
                                    'Certificados de Eficiencia Energética': 'certificado-eficiencia-energetica'
                                  };
                                  const mappedKey = serviceMap[feature];
                                  if (mappedKey) {
                                    handleServiceClick(mappedKey);
                                  }
                                }}
                                className="text-gray-400 hover:text-gray-600 text-xs font-light underline transition-colors"
                              >
                                Ver más
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Ver más Button - Architectural */}
        {services.length > 3 && !showAllServices && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <button
              onClick={() => setShowAllServices(true)}
              className="inline-flex items-center gap-3 bg-gray-900 text-white px-12 py-4 font-light text-base hover:bg-gray-800 transition-all duration-300 border border-gray-900"
            >
              Ver más
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </motion.div>
        )}
      </div>

      {/* Service Modal */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceKey={selectedServiceKey}
      />
    </section>
  );
}