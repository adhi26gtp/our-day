import React, { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, Cake, Flame, RotateCcw } from 'lucide-react';
import { BirthdayCake3D } from '@/components/3d/BirthdayCake3D';
import { PetalsField } from '@/components/3d/PetalsField';
import { SparkleField } from '@/components/3d/SparkleField';
import { birthdayData } from '@/config/messages';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';

export const BirthdaySection: React.FC = () => {
  const [isBlown, setIsBlown] = useState(false);

  const triggerCelebration = () => {
    setIsBlown(true);

    // Trigger multi-stage romantic luxury confetti
    try {
      const colors = ['#F2A7C6', '#E8C58A', '#C7A5F5', '#FFF7FC'];

      // Center burst
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.6 },
        colors,
      });

      // Left fountain
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0.1, y: 0.7 },
          colors,
        });
      }, 250);

      // Right fountain
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 0.9, y: 0.7 },
          colors,
        });
      }, 400);
    } catch (e) {
      console.warn("Confetti error:", e);
    }
  };

  return (
    <section id="birthday" className="relative min-h-screen w-full py-28 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#10091C] via-[#241331]/90 to-[#10091C] overflow-hidden select-none flex flex-col items-center justify-center">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#F2A7C6]/15 via-[#E8C58A]/15 to-[#C7A5F5]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 w-full flex flex-col items-center text-center">
        {/* Birthday Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#241331]/80 border border-[#E8C58A]/40 backdrop-blur-md mb-6 shadow-gold-glow animate-float-slow">
          <Cake size={14} className="text-[#E8C58A]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#E8C58A] font-semibold">
            November 15 • A Day For You
          </span>
          <Heart size={13} className="text-[#F2A7C6] fill-[#F2A7C6]" />
        </div>

        {/* Main Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#FFF7FC] text-glow-rose tracking-tight mb-4 uppercase">
          {birthdayData.mainHeading}
        </h2>

        {/* Supporting Message */}
        <p className="font-serif text-lg sm:text-2xl text-[#C7A5F5]/90 italic max-w-2xl mx-auto mb-10">
          "{birthdayData.supportingMessage}"
        </p>

        {/* 3D Birthday Cake Interactive Scene Canvas */}
        <div className="relative w-full max-w-2xl h-[380px] sm:h-[460px] rounded-3xl overflow-hidden glass-panel border border-[#E8C58A]/30 shadow-gold-glow mb-8">
          <Canvas
            camera={{ position: [0, 1.2, 4.5], fov: 45 }}
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 2]}
          >
            <ambientLight intensity={0.7} />
            <directionalLight position={[4, 5, 4]} intensity={1.8} color="#FFE8BD" />
            <directionalLight position={[-4, 3, -3]} intensity={1.4} color="#F2A7C6" />
            <directionalLight position={[0, -3, 2]} intensity={0.5} color="#9B6CD8" />

            <Suspense fallback={null}>
              <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.25}>
                <BirthdayCake3D isBlown={isBlown} onBlowCandles={triggerCelebration} />
              </Float>
              <PetalsField count={30} />
              <SparkleField count={100} />
            </Suspense>
          </Canvas>

          {/* Interactive Tap Prompt Overlay */}
          {!isBlown ? (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center pointer-events-none">
              <span className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#10091C]/80 border border-[#E8C58A]/50 text-xs text-[#E8C58A] tracking-widest uppercase font-semibold backdrop-blur-md shadow-gold-glow animate-pulse">
                <Flame size={14} className="text-[#E8C58A]" />
                Click candles to make a wish & blow them out
              </span>
            </div>
          ) : (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center pointer-events-auto">
              <button
                onClick={() => setIsBlown(false)}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10091C]/80 hover:bg-[#241331] border border-white/20 text-xs text-[#FFF7FC]/80 hover:text-[#FFF7FC] tracking-wider transition-colors cursor-pointer backdrop-blur-md"
              >
                <RotateCcw size={13} /> Relight Candles
              </button>
            </div>
          )}
        </div>

        {/* Interactive Action or Celebratory Message Card */}
        <AnimatePresence mode="wait">
          {!isBlown ? (
            <motion.div
              key="prompt"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="flex flex-col items-center"
            >
              <p className="font-serif text-lg text-[#FFF7FC]/80 italic mb-5">
                {birthdayData.wishPrompt}
              </p>
              <Button
                variant="luxury"
                size="lg"
                onClick={triggerCelebration}
                icon={<Sparkles size={16} className="text-[#E8C58A]" />}
              >
                Blow Out Candles
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="wishes"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl"
            >
              <GlassCard glow="gold" className="p-8 text-center border-2 border-[#E8C58A]/50 shadow-gold-glow">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#241331] border border-[#E8C58A]/60 mx-auto mb-4 text-[#E8C58A]">
                  <Sparkles size={22} className="animate-spin" style={{ animationDuration: '6s' }} />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFF7FC] mb-3 text-glow-rose">
                  May All Your Dreams Come True ✨
                </h3>
                <p className="font-serif text-base sm:text-lg text-[#FFF7FC]/90 italic leading-relaxed mb-4">
                  "{birthdayData.celebrationNote}"
                </p>
                <p className="text-xs uppercase tracking-widest text-[#E8C58A] font-semibold">
                  Happy Birthday, Swetha ❤️
                </p>
              </GlassCard>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

