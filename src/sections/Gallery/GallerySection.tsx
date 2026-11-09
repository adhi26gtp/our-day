import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  ZoomIn,
  ZoomOut,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Calendar,
  MapPin,
  Camera
} from 'lucide-react';
import { galleryPhotos, GalleryPhoto } from '@/config/photos';
import { DynamicImage } from '@/components/ui/DynamicImage';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const filteredPhotos = activeCategory === 'all'
    ? galleryPhotos
    : galleryPhotos.filter((p) => p.category === activeCategory);

  const handleNextPhoto = () => {
    if (!activePhoto) return;
    const currentIndex = galleryPhotos.findIndex((p) => p.id === activePhoto.id);
    const nextIndex = (currentIndex + 1) % galleryPhotos.length;
    setActivePhoto(galleryPhotos[nextIndex]);
    setZoomLevel(1);
  };

  const handlePrevPhoto = () => {
    if (!activePhoto) return;
    const currentIndex = galleryPhotos.findIndex((p) => p.id === activePhoto.id);
    const prevIndex = (currentIndex - 1 + galleryPhotos.length) % galleryPhotos.length;
    setActivePhoto(galleryPhotos[prevIndex]);
    setZoomLevel(1);
  };

  const categories = [
    { id: 'all', label: 'All Photographs' },
    { id: 'swetha', label: 'Swetha' },
    { id: 'memories', label: 'Our Memories' },
    { id: 'special-moments', label: 'Special Moments' },
  ];

  return (
    <section id="gallery" className="relative w-full py-28 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#10091C] via-[#1f0d2c] to-[#10091C] overflow-hidden select-none">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-[#F2A7C6]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-[#E8C58A]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#241331]/80 border border-[#E8C58A]/40 backdrop-blur-md mb-6 shadow-gold-glow animate-float-slow">
            <Camera size={14} className="text-[#E8C58A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#E8C58A] font-semibold">
              Phase 5 • 3D Photo Gallery
            </span>
            <Heart size={13} className="text-[#F2A7C6] fill-[#F2A7C6]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#FFF7FC] text-glow-rose tracking-tight mb-4 uppercase">
            Our Little Universe
          </h2>
          <p className="font-serif text-lg sm:text-xl text-[#C7A5F5]/85 italic max-w-2xl mx-auto mb-10">
            A gallery of the smiles, journeys, and quiet moments that forever belong to us.
          </p>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#F2A7C6] to-[#E8C58A] text-[#10091C] shadow-rose-glow font-bold scale-105'
                      : 'bg-[#241331]/70 text-[#FFF7FC]/70 hover:text-[#FFF7FC] hover:bg-[#321A44]/90 border border-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Floating Polaroid Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredPhotos.map((photo, idx) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -8, rotateZ: (idx % 2 === 0 ? 1 : -1) * 1.5, scale: 1.02 }}
                onClick={() => {
                  setActivePhoto(photo);
                  setZoomLevel(1);
                }}
                className="cursor-pointer group"
              >
                {/* Polaroid Frame */}
                <div className="p-4 sm:p-5 pb-6 rounded-2xl bg-gradient-to-b from-[#FFF7FC]/10 to-[#FFF7FC]/5 border border-white/15 backdrop-blur-xl shadow-glass group-hover:border-[#E8C58A]/60 group-hover:shadow-gold-glow transition-all duration-300 flex flex-col justify-between h-full">
                  {/* Photo Container */}
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#10091C] mb-4">
                    <DynamicImage
                      localPath={photo.localPath}
                      fallbackUrl={photo.fallbackUrl}
                      alt={photo.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Hover Overlay with View Prompt */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10091C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-xs uppercase tracking-widest text-[#E8C58A] font-medium flex items-center gap-1.5">
                        <Maximize2 size={13} /> Click to expand
                      </span>
                    </div>

                    {/* Category Badge */}
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-[#10091C]/80 text-[#E8C58A] border border-[#E8C58A]/30 backdrop-blur-md">
                      {photo.categoryLabel}
                    </span>
                  </div>

                  {/* Polaroid Handwritten Style Label */}
                  <div className="text-left px-1">
                    <h3 className="font-serif text-lg font-semibold text-[#FFF7FC] group-hover:text-[#E8C58A] transition-colors truncate">
                      {photo.caption}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-[#C7A5F5]/70 mt-1 font-serif italic">
                      <span>{photo.date}</span>
                      {photo.location && (
                        <span className="flex items-center gap-1">
                          <MapPin size={11} className="text-[#F2A7C6]" />
                          {photo.location}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* FULLSCREEN IMAGE VIEWER MODAL WITH ZOOM & CONTROLS */}
      <AnimatePresence>
        {activePhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#090510]/95 backdrop-blur-3xl">
            {/* Close Button */}
            <button
              onClick={() => setActivePhoto(null)}
              aria-label="Close image viewer"
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-[#241331]/80 text-[#FFF7FC] hover:bg-[#321A44] transition-colors cursor-pointer border border-white/20 shadow-glass"
            >
              <X size={20} />
            </button>

            {/* Previous Button */}
            <button
              onClick={handlePrevPhoto}
              aria-label="Previous photograph"
              className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-[#241331]/80 text-[#FFF7FC] hover:bg-[#321A44] transition-colors cursor-pointer border border-white/20 shadow-glass"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNextPhoto}
              aria-label="Next photograph"
              className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-[#241331]/80 text-[#FFF7FC] hover:bg-[#321A44] transition-colors cursor-pointer border border-white/20 shadow-glass"
            >
              <ChevronRight size={22} />
            </button>

            {/* Image Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center text-center"
            >
              {/* Image Frame */}
              <div className="relative overflow-hidden rounded-2xl max-h-[62vh] max-w-full border-2 border-[#E8C58A]/40 shadow-gold-glow bg-[#10091C]">
                <DynamicImage
                  localPath={activePhoto.localPath}
                  fallbackUrl={activePhoto.fallbackUrl}
                  alt={activePhoto.caption}
                  style={{ transform: `scale(${zoomLevel})` }}
                  className="max-h-[60vh] max-w-full object-contain transition-transform duration-300"
                />
              </div>

              {/* Caption & Controls Bar */}
              <div className="mt-5 w-full max-w-xl p-4 sm:p-5 rounded-2xl bg-[#1e0e2e]/90 border border-white/10 backdrop-blur-xl shadow-glass flex flex-col items-center">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F2A7C6]/20 text-[#F2A7C6] border border-[#F2A7C6]/30">
                    {activePhoto.categoryLabel}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-[#E8C58A]">
                    <Calendar size={12} /> {activePhoto.date}
                  </span>
                </div>

                <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#FFF7FC] mb-1 text-glow-rose">
                  {activePhoto.caption}
                </h4>

                {activePhoto.note && (
                  <p className="font-serif text-xs sm:text-sm text-[#C7A5F5] italic mb-3">
                    "{activePhoto.note}"
                  </p>
                )}

                {/* Zoom Controls */}
                <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                  <button
                    onClick={() => setZoomLevel((z) => Math.max(1, z - 0.25))}
                    className="p-1.5 rounded-lg bg-[#241331] text-[#FFF7FC]/70 hover:text-[#FFF7FC] border border-white/10"
                    aria-label="Zoom out"
                  >
                    <ZoomOut size={16} />
                  </button>
                  <span className="text-xs text-[#E8C58A] font-semibold">{Math.round(zoomLevel * 100)}%</span>
                  <button
                    onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.25))}
                    className="p-1.5 rounded-lg bg-[#241331] text-[#FFF7FC]/70 hover:text-[#FFF7FC] border border-white/10"
                    aria-label="Zoom in"
                  >
                    <ZoomIn size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
