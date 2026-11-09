import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { Heart, Sparkles, RotateCcw, ArrowUp, Infinity, Calendar, BookOpen, Camera, Mail } from 'lucide-react';
import { GlassHeart } from '@/components/3d/GlassHeart';
import { PetalsField } from '@/components/3d/PetalsField';
import { SparkleField } from '@/components/3d/SparkleField';
import { finalSurpriseData } from '@/config/messages';
import { Button } from '@/components/ui/Button';

interface FinaleSectionProps {
  onReplay: () => void;
}

export const FinaleSection: React.FC<FinaleSectionProps> = ({ onReplay }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="finale" className="relative min-h-screen w-full py-28 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#10091C] via-[#090510] to-[#05020a] overflow-hidden select-none flex flex-col items-center justify-center text-center">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-tr from-[#F2A7C6]/15 via-[#E8C58A]/15 to-[#C7A5F5]/10 rounded-full blur-[190px] pointer-events-none" />

      {/* 3D Radiant Heart Scene */}
      <div className="relative w-full max-w-lg h-[340px] sm:h-[400px] mx-auto mb-6">
        <Canvas
          camera={{ position: [0, 0, 4.2], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[3, 4, 3]} intensity={2.0} color="#FFE8BD" />
          <directionalLight position={[-3, 2, -2]} intensity={1.5} color="#F2A7C6" />
          <directionalLight position={[0, -3, 2]} intensity={0.6} color="#9B6CD8" />

          <Suspense fallback={null}>
            <Float speed={2} rotationIntensity={0.25} floatIntensity={0.5}>
              <GlassHeart scale={1.2} interactive={true} />
            </Float>
            <PetalsField count={35} />
            <SparkleField count={150} />
          </Suspense>
        </Canvas>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center px-4">
        {/* Crown Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#241331]/80 border border-[#E8C58A]/40 backdrop-blur-md mb-8 shadow-gold-glow animate-float-slow">
          <Sparkles size={14} className="text-[#E8C58A]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#E8C58A] font-semibold">
            One Forever • November 15, 2026
          </span>
          <Heart size={13} className="text-[#F2A7C6] fill-[#F2A7C6]" />
        </div>

        {/* Final Emotional Quote */}
        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#FFF7FC] text-glow-rose leading-relaxed tracking-tight mb-8 max-w-3xl">
          "{finalSurpriseData.finalQuote}"
        </h2>

        {/* Final Promise */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#1e0e2e]/70 border border-[#E8C58A]/40 shadow-gold-glow max-w-2xl mb-12 backdrop-blur-xl">
          <p className="font-serif text-lg sm:text-2xl italic text-[#FFE8BD] leading-relaxed mb-3">
            "{finalSurpriseData.promise}"
          </p>
          <p className="text-xs uppercase tracking-widest text-[#F2A7C6] font-semibold">
            {finalSurpriseData.subtext}
          </p>
        </div>

        {/* Replay and Navigation Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <Button
            variant="luxury"
            size="lg"
            onClick={onReplay}
            icon={<RotateCcw size={16} />}
          >
            Replay Experience
          </Button>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider text-[#FFF7FC]/80 hover:text-[#FFF7FC] bg-[#241331]/60 hover:bg-[#321A44] border border-white/10 transition-all cursor-pointer"
          >
            <ArrowUp size={14} /> Back to Top
          </button>
        </div>

        {/* Quick Chapter Navigation Map */}
        <div className="w-full pt-10 border-t border-white/10">
          <p className="text-xs uppercase tracking-widest text-[#E8C58A] font-semibold mb-6">
            Explore Any Memory Again
          </p>
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            {[
              { id: 'her-universe', label: 'Her Universe', icon: <Sparkles size={12} /> },
              { id: 'three-years-timeline', label: 'Our Story (3 Chapters)', icon: <BookOpen size={12} /> },
              { id: 'gallery', label: 'Photo Gallery', icon: <Camera size={12} /> },
              { id: 'love-letter', label: 'Love Letter', icon: <Mail size={12} /> },
              { id: 'birthday', label: 'Birthday Celebration', icon: <Calendar size={12} /> },
              { id: 'anniversary', label: '3-Year Anniversary', icon: <Infinity size={12} /> },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs text-[#FFF7FC]/70 hover:text-[#E8C58A] bg-[#180E2B]/60 hover:bg-[#241331] border border-white/10 transition-all cursor-pointer"
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

