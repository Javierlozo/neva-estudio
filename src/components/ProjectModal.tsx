'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Ruler, Maximize2, Crop } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const toggleImageExpansion = () => {
    setIsImageExpanded(prev => !prev);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="relative w-full max-w-6xl mx-4 bg-white rounded-none overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button - Architectural */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/90 hover:bg-white text-gray-900 flex items-center justify-center transition-all duration-300 border border-gray-200 hover:border-gray-300"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Image Expansion Toggle Button */}
          <button
            onClick={toggleImageExpansion}
            className="absolute top-6 left-6 z-10 w-12 h-12 bg-white/90 hover:bg-white text-gray-900 flex items-center justify-center transition-all duration-300 border border-gray-200 hover:border-gray-300"
            title={isImageExpanded ? 'Ver imagen normal' : 'Ampliar imagen'}
          >
            <Maximize2 className="h-5 w-5" />
          </button>

          <div className={`grid gap-0 ${isImageExpanded ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'}`}>
            {/* Image Carousel */}
            <div className="relative bg-gray-100">
              {/* Main Image */}
              <div className={`relative ${isImageExpanded ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
                <Image
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                />
                
                {/* Navigation Arrows */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {project.images.length}
                  </div>
                )}
              </div>

              {/* Thumbnail Navigation */}
              {project.images.length > 1 && (
                <div className="p-4 bg-gray-50">
                  <div className="flex gap-2 overflow-x-auto">
                    {project.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`flex-shrink-0 w-16 h-16 relative rounded-sm overflow-hidden border-2 transition-colors ${
                          currentImageIndex === index
                            ? 'border-gray-900'
                            : 'border-gray-300 hover:border-gray-500'
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Project Details - Architectural */}
            <div className={`p-12 overflow-y-auto max-h-[80vh] bg-white ${isImageExpanded ? 'hidden' : ''}`}>
              {/* Header */}
              <div className="mb-12">
                <div className="text-sm text-gray-500 font-light mb-4 tracking-wide uppercase">
                  {project.category}
                </div>
                <h2 className="text-4xl font-thin text-gray-900 mb-8 tracking-tight leading-tight">
                  {project.title}
                </h2>
                <div className="w-24 h-px bg-gray-300 mb-8"></div>
              </div>

              {/* Project Info - Minimalist */}
              <div className="grid grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-8 h-px bg-gray-300 mx-auto mb-3"></div>
                  <div className="text-xs text-gray-500 font-light tracking-wide uppercase mb-1">Ubicación</div>
                  <div className="text-sm text-gray-900 font-light">{project.location}</div>
                </div>
                <div className="text-center">
                  <div className="w-8 h-px bg-gray-300 mx-auto mb-3"></div>
                  <div className="text-xs text-gray-500 font-light tracking-wide uppercase mb-1">Año</div>
                  <div className="text-sm text-gray-900 font-light">{project.year}</div>
                </div>
                <div className="text-center">
                  <div className="w-8 h-px bg-gray-300 mx-auto mb-3"></div>
                  <div className="text-xs text-gray-500 font-light tracking-wide uppercase mb-1">Superficie</div>
                  <div className="text-sm text-gray-900 font-light">{project.area}</div>
                </div>
              </div>

              {/* Photographer Credit */}
              {project.photographer && (
                <div className="mb-12 text-center">
                  <div className="w-16 h-px bg-gray-300 mx-auto mb-4"></div>
                  <div className="text-sm text-gray-500 font-light tracking-wide uppercase">
                    Fotografías: {project.photographer}
                  </div>
                </div>
              )}

              {/* Description - Architectural Typography */}
              <div className="space-y-6 mb-12">
                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  {project.description}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  {project.detailedDescription}
                </p>
              </div>

              {/* Close Button */}
              <div className="pt-8 border-t border-gray-200">
                <button
                  onClick={onClose}
                  className="w-full bg-gray-900 text-white px-8 py-4 font-light text-lg hover:bg-gray-800 transition-all duration-500 border border-gray-900"
                >
                  Volver a proyectos
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}