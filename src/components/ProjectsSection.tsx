'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from '@/hooks/useTranslations';
import { useState, useEffect } from 'react';
import ProjectModal from './ProjectModal';

interface Project {
  id: number;
  title: string;
  category: string;
  filterKey: string;
  description: string;
  detailedDescription: string;
  images: string[];
  location: string;
  year: string;
  area: string;
  photographer?: string;
}

export default function ProjectsSection() {
  const t = useTranslations('projects');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  const filters = [
    { key: 'all', label: t('filters.all') },
    { key: 'vivienda', label: t('filters.vivienda') },
    { key: 'rehabilitacion', label: t('filters.rehabilitacion') },
    { key: 'fachadas', label: t('filters.fachadas') },
    { key: 'locales', label: t('filters.locales') }
  ];
  
  const projects: Project[] = [
        {
          id: 1,
          title: t('items.casa-rdv.title'),
          category: t('items.casa-rdv.category'),
          filterKey: 'vivienda',
          description: t('items.casa-rdv.description'),
          detailedDescription: t('items.casa-rdv.detailedDescription'),
          images: [
            '/Casa RDV/RDV-01.webp',
            '/Casa RDV/RDV-02-scaled.webp',
            '/Casa RDV/RDV-03.webp',
            '/Casa RDV/RDV-04.webp',
            '/Casa RDV/RDV-05.webp',
            '/Casa RDV/RDV-06-PB.webp',
            '/Casa RDV/RDV-07-P1.webp',
            '/Casa RDV/RDV-08-SECC.webp'
          ],
          location: 'Requejo de la Vega (León)',
          year: '2017',
          area: 'Construida',
          photographer: 'Paulo Fernández'
        },
        {
          id: 2,
          title: t('items.casa-nvp.title'),
          category: t('items.casa-nvp.category'),
          filterKey: 'vivienda',
          description: t('items.casa-nvp.description'),
          detailedDescription: t('items.casa-nvp.detailedDescription'),
          images: [
            '/Casa NVP/NVP-01.jpg',
            '/Casa NVP/NVP-02.jpg',
            '/Casa NVP/NVP-03.jpg',
            '/Casa NVP/NVP-04.jpg',
            '/Casa NVP/NVP-05.jpg',
            '/Casa NVP/NVP-06.jpg',
            '/Casa NVP/NVP-07-scaled.jpg',
            '/Casa NVP/NVP-08-scaled.jpg',
            '/Casa NVP/NVP-09-scaled.jpg',
            '/Casa NVP/NVP-10-VIV-2-HAB-scaled.jpg',
            '/Casa NVP/NVP-11-VIV-3-HAB-scaled.jpg',
            '/Casa NVP/NVP-12-VIV-4-HAB-scaled.jpg'
          ],
          location: 'Oviedo, Asturias',
          year: '2022',
          area: '220 m²',
          photographer: 'Paulo Fernández'
        },
        {
          id: 3,
          title: t('items.loft-rural.title'),
          category: t('items.loft-rural.category'),
          filterKey: 'rehabilitacion',
          description: t('items.loft-rural.description'),
          detailedDescription: t('items.loft-rural.detailedDescription'),
          images: [
            '/Loft Rural/LR-01-scaled.jpg',
            '/Loft Rural/LR-02-scaled.jpg',
            '/Loft Rural/LR-03-scaled.jpg',
            '/Loft Rural/LR-04-scaled.jpg',
            '/Loft Rural/LR-05-scaled.jpg',
            '/Loft Rural/LR-06-scaled.jpg',
            '/Loft Rural/LR-07-scaled.jpg',
            '/Loft Rural/LR-08-scaled.jpg',
            '/Loft Rural/LR-09-PLANTAS-scaled.jpg',
            '/Loft Rural/LR-10-GENERAL-scaled.jpg'
          ],
          location: 'Cangas de Onís, Asturias',
          year: '2021',
          area: '120 m²'
        },
    {
      id: 4,
      title: t('items.ampliacion-br.title'),
      category: t('items.ampliacion-br.category'),
      filterKey: 'rehabilitacion',
      description: t('items.ampliacion-br.description'),
      detailedDescription: t('items.ampliacion-br.detailedDescription'),
      images: ['/projects/ampliacion-br.svg'],
      location: 'Gijón, Asturias',
      year: '2023',
      area: '85 m²'
    },
    {
      id: 5,
      title: t('items.ampliacion-vll.title'),
      category: t('items.ampliacion-vll.category'),
      filterKey: 'rehabilitacion',
      description: t('items.ampliacion-vll.description'),
      detailedDescription: t('items.ampliacion-vll.detailedDescription'),
      images: ['/projects/ampliacion-vll.svg'],
      location: 'Villaviciosa, Asturias',
      year: '2022',
      area: '95 m²'
    },
    {
      id: 6,
      title: t('items.reforma-ol.title'),
      category: t('items.reforma-ol.category'),
      filterKey: 'rehabilitacion',
      description: t('items.reforma-ol.description'),
      detailedDescription: t('items.reforma-ol.detailedDescription'),
      images: ['/projects/reforma-ol.svg'],
      location: 'Oviedo, Asturias',
      year: '2023',
      area: '110 m²'
    },
    {
      id: 7,
      title: t('items.poniente-playa.title'),
      category: t('items.poniente-playa.category'),
      filterKey: 'vivienda',
      description: t('items.poniente-playa.description'),
      detailedDescription: t('items.poniente-playa.detailedDescription'),
      images: ['/projects/poniente-playa.svg'],
      location: 'Llanes, Asturias',
      year: '2021',
      area: '160 m²'
    },
    {
      id: 8,
      title: t('items.pie-playa.title'),
      category: t('items.pie-playa.category'),
      filterKey: 'vivienda',
      description: t('items.pie-playa.description'),
      detailedDescription: t('items.pie-playa.detailedDescription'),
      images: ['/projects/pie-playa.svg'],
      location: 'Ribadesella, Asturias',
      year: '2022',
      area: '140 m²'
    },
    {
      id: 9,
      title: 'Casa Moderna AV',
      category: 'Vivienda',
      filterKey: 'vivienda',
      description: 'Vivienda unifamiliar con diseño contemporáneo y materiales sostenibles',
      detailedDescription: 'Esta vivienda unifamiliar combina la funcionalidad moderna con el respeto por el entorno natural. El diseño integra grandes ventanales que conectan el interior con el jardín, creando espacios luminosos y acogedores.',
      images: ['/projects/casa-moderna-av.svg', '/projects/casa-moderna-av-2.svg'],
      location: 'Avilés, Asturias',
      year: '2023',
      area: '200 m²'
    },
    {
      id: 10,
      title: 'Reforma Integral CR',
      category: 'Rehabilitación',
      filterKey: 'rehabilitacion',
      description: 'Reforma completa de vivienda histórica manteniendo su carácter original',
      detailedDescription: 'Proyecto de rehabilitación integral que respeta la estructura original de la vivienda mientras incorpora todas las comodidades modernas. Se mantuvieron los elementos arquitectónicos característicos del período.',
      images: ['/projects/reforma-cr.svg'],
      location: 'Candás, Asturias',
      year: '2022',
      area: '150 m²'
    },
    {
      id: 11,
      title: 'Oficinas Corporativas',
      category: 'Locales',
      filterKey: 'locales',
      description: 'Diseño de oficinas modernas con espacios colaborativos',
      detailedDescription: 'Proyecto de oficinas corporativas que prioriza la flexibilidad y el bienestar de los trabajadores. Incluye espacios abiertos, salas de reuniones y zonas de descanso diseñadas para fomentar la colaboración.',
      images: ['/projects/oficinas-corp.svg', '/projects/oficinas-corp-2.svg'],
      location: 'Gijón, Asturias',
      year: '2023',
      area: '300 m²'
    },
    {
      id: 12,
      title: 'Fachada Histórica',
      category: 'Fachadas',
      filterKey: 'fachadas',
      description: 'Rehabilitación de fachada de edificio histórico en el centro de Oviedo',
      detailedDescription: 'Proyecto de rehabilitación de fachada que respeta la arquitectura histórica del edificio mientras mejora su eficiencia energética. Se utilizaron materiales tradicionales y técnicas modernas de aislamiento.',
      images: ['/projects/fachada-historica.svg'],
      location: 'Oviedo, Asturias',
      year: '2021',
      area: '180 m²'
    }
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Reset showAllProjects when filter changes
  useEffect(() => {
    setShowAllProjects(false);
  }, [activeFilter]);

  // Filter projects based on active filter
  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.filterKey === activeFilter
  );

  // Show only first 8 projects initially, or all if "Ver más" is clicked
  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 8);
  
  // Check if there are more projects to show
  const hasMoreProjects = filteredProjects.length > 8;
  return (
        <section id="projects" className="py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header - Minimalist */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <h2 className="text-3xl md:text-4xl font-thin text-gray-900 mb-10 tracking-tight">
                {t('title')}
              </h2>
              <div className="w-20 h-px bg-gray-400 mx-auto mb-10"></div>
              <p className="text-lg text-gray-600 max-w-5xl mx-auto font-light leading-relaxed">
                {t('description')}
              </p>
            </motion.div>

            {/* Filter Buttons - Architectural */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-6 mb-20"
            >
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-6 py-2 text-base font-light transition-all duration-300 ${
                    activeFilter === filter.key
                      ? 'text-gray-900 border-b-2 border-gray-900'
                      : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </motion.div>

            {/* Projects Grid - Architectural */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => openModal(project)}
                >
                  <div className="relative overflow-hidden bg-white">
                    {/* Image */}
                    <div className="aspect-[16/9] relative">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                      {/* Hover Overlay with Text */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white text-center">
                          <div className="text-base font-light mb-1">{project.title}</div>
                          <div className="text-xs font-extralight opacity-90">{project.category}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Ver más Button - Architectural */}
            {hasMoreProjects && !showAllProjects && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mt-20"
              >
                <button
                  onClick={() => setShowAllProjects(true)}
                  className="inline-flex items-center gap-3 bg-gray-900 text-white px-12 py-4 font-light text-base hover:bg-gray-800 transition-all duration-300 border border-gray-900"
                >
                  {t('viewMore')}
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </motion.div>
            )}

      </div>
      
      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
}
