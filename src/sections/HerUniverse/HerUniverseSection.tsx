import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Compass, Star, ChevronDown } from 'lucide-react';
import { GalaxyScene } from '@/components/3d/GalaxyScene';
import { GlassCard } from '@/components/ui/GlassCard';
import { siteConfig } from '@/config/site';

export const HerUniverseSection: React.FC = () => {
  const celestialPillars = [
    {
      icon: <Star size={16} className="text-[#E8C58A]" />,
      title: "The Brightest Star",
      text: "In a world of noise, your kindness and gentle smile shine brighter than a billion galaxies.",
    },
    {
      icon: <Heart size={16} className="text-[#F2A7C6] fill-[#F2A7C6]" />,
      title: "Twin Celebration",
      text: "November 15, 2026 — Celebrating the day you were born and the day we began our forever.",
    },
    {
      icon: <Compass size={16} className="text-[#C7A5F5]" />,
      title: "Our True North",
      text: "From our school days to the college van, every step led directly into your warm embrace.",
    },
  ];

  return (
    <section id="her-universe" className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#10091C] via-[#160a24] to-[#10091C] overflow-hidden select-none">
      {/* 3D Galaxy Canvas with Glowing Cosmic Core & Stars */}
      <GalaxyScene />

      {/* Ambient Radial Fog */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#241331]/40 via-[#F2A7C6]/10 to-[#E8C58A]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center mt-12 mb-16">
        {/* Celestial Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#241331]/80 border border-[#E8C58A]/40 backdrop-blur-md mb-8 shadow-gold-glow animate-float-slow"
        >
          <Sparkles size={14} className="text-[#E8C58A]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#E8C58A] font-semibold">
            Section 02 • Her Universe
          </span>
          <Heart size={13} className="text-[#F2A7C6] fill-[#F2A7C6]" />
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#FFF7FC] text-glow-rose leading-tight tracking-tight mb-6"
        >
          Some people make life beautiful.{' '}
          <br className="hidden sm:inline" />
          <span className="italic bg-gradient-to-r from-[#F2A7C6] via-[#E8C58A] to-[#C7A5F5] bg-clip-text text-transparent">
            You made mine unforgettable.
          </span>
        </motion.h2>

        {/* Subtitle Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="font-serif text-lg sm:text-xl md:text-2xl text-[#C7A5F5]/90 italic max-w-2xl mb-14"
        >
          To {siteConfig.partnerName} — The center of my world, the melody in my silence, and my favorite constellation in this infinite sky.
        </motion.p>

        {/* Three Floating Cosmic Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
          {celestialPillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + idx * 0.15, duration: 0.8 }}
            >
              <GlassCard glow="rose" variant="frosted" className="h-full flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300">
                <div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#241331] border border-[#E8C58A]/40 mb-4 group-hover:border-[#F2A7C6] transition-colors">
                    {pillar.icon}
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#FFF7FC] mb-2 text-glow-gold">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#FFF7FC]/75 leading-relaxed font-normal">
                    {pillar.text}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.a
          href="#our-story"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-14 inline-flex flex-col items-center text-xs uppercase tracking-[0.2em] text-[#E8C58A] hover:text-[#FFF7FC] transition-colors gap-2"
        >
          <span>Step Into Our Story</span>
          <ChevronDown size={18} className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
};

