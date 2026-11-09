import React, { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { Heart, Infinity, Key } from 'lucide-react';
import { InfinityAnniversary3D } from '@/components/3d/InfinityAnniversary3D';
import { SparkleField } from '@/components/3d/SparkleField';
import { PetalsField } from '@/components/3d/PetalsField';
import { anniversaryData, finalSurpriseData } from '@/config/messages';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';

export const AnniversarySection: React.FC = () => {
  const [promiseRevealed, setPromiseRevealed] = useState(false);

  return (
    <section id="anniversary" className="relative min-h-screen w-full py-28 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#10091C] via-[#1d0b28] to-[#10091C] overflow-hidden select-none flex flex-col items-center justify-center">
      {/* Dynamic ambient nebula */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-to-tr from-[#E8C58A]/15 via-[#F2A7C6]/15 to-[#C7A5F5]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 w-full flex flex-col items-center text-center">
        {/* Milestone Pill */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#241331]/80 border border-[#E8C58A]/40 backdrop-blur-md mb-6 shadow-gold-glow animate-float-slow">
          <Infinity size={15} className="text-[#E8C58A]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#E8C58A] font-semibold">
            {anniversaryData.date} • Third Anniversary
          </span>
          <Heart size={13} className="text-[#F2A7C6] fill-[#F2A7C6]" />
        </div>

        {/* Main Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#FFF7FC] text-glow-rose tracking-tight mb-4 uppercase">
          {anniversaryData.mainHeading}
        </h2>

        {/* Main Message */}
        <p className="font-serif text-lg sm:text-2xl text-[#C7A5F5]/90 italic max-w-3xl mx-auto mb-10 leading-relaxed">
          "{anniversaryData.mainMessage}"
        </p>

        {/* 3D Infinity & Glowing Heart Canvas */}
        <div className="relative w-full max-w-2xl h-[360px] sm:h-[440px] rounded-3xl overflow-hidden glass-panel border border-[#E8C58A]/30 shadow-gold-glow mb-10">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 42 }}
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 2]}
          >
            <ambientLight intensity={0.6} />
            <directionalLight position={[4, 5, 4]} intensity={2.0} color="#FFE8BD" />
            <directionalLight position={[-4, 3, -3]} intensity={1.5} color="#F2A7C6" />
            <directionalLight position={[0, -3, 2]} intensity={0.6} color="#9B6CD8" />

            <Suspense fallback={null}>
              <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
                <InfinityAnniversary3D scale={1.15} />
              </Float>
              <SparkleField count={120} />
              <PetalsField count={25} />
            </Suspense>
          </Canvas>

          {/* Interactive Tag */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center pointer-events-none">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#E8C58A] font-semibold bg-[#10091C]/80 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
              The Infinity of Us • 3 Years & 1 Forever
            </span>
          </div>
        </div>

        {/* Anniversary Reflection Card & Promise Reveal */}
        <div className="w-full max-w-2xl flex flex-col items-center">
          <GlassCard glow="gold" className="p-8 sm:p-10 text-center w-full mb-8">
            <p className="font-serif text-lg sm:text-xl text-[#FFF7FC]/90 italic leading-relaxed mb-6">
              {anniversaryData.reflection}
            </p>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#E8C58A] text-glow-gold mb-6">
              {anniversaryData.finalMessage}
            </h3>

            {!promiseRevealed ? (
              <Button
                variant="luxury"
                size="md"
                onClick={() => setPromiseRevealed(true)}
                icon={<Key size={14} className="text-[#E8C58A]" />}
              >
                Reveal My Promise To You
              </Button>
            ) : (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="p-6 rounded-2xl bg-[#10091C]/75 border border-[#F2A7C6]/30 shadow-rose-glow"
                >
                  <span className="text-xs uppercase tracking-widest text-[#E8C58A] font-semibold block mb-2">
                    A Sincere Promise
                  </span>
                  <p className="font-serif text-lg sm:text-xl italic text-[#FFF7FC] leading-relaxed">
                    "{finalSurpriseData.promise}"
                  </p>
                </motion.div>
              </AnimatePresence>
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
