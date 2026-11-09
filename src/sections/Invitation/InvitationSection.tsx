import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { InvitationScene } from '@/components/3d/InvitationScene';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';

interface InvitationSectionProps {
  onEnter: () => void;
}

export const InvitationSection: React.FC<InvitationSectionProps> = ({ onEnter }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleEnterClick = () => {
    setIsTransitioning(true);
    // Allow the transition animations to play out smoothly
    setTimeout(() => {
      onEnter();
    }, 1100);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#10091C] flex items-center justify-center select-none">
      {/* Dynamic ambient radial gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#241331]/60 via-[#10091C]/90 to-[#090510] pointer-events-none" />
      
      {/* Subtle glowing vignette */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#F2A7C6]/15 via-[#C7A5F5]/10 to-[#E8C58A]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* 3D Glass Heart Scene */}
      <motion.div
        className="absolute inset-0 z-10"
        animate={isTransitioning ? { scale: 1.6, opacity: 0, filter: 'blur(10px)' } : { scale: 1, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <InvitationScene interactive={!isTransitioning} />
      </motion.div>

      {/* Elegant Foreground Typography & Call to Action */}
      <AnimatePresence>
        {!isTransitioning && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40, filter: 'blur(8px)' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative z-20 flex flex-col items-center text-center px-6 max-w-4xl mt-auto pb-14 md:pb-20"
          >
            {/* Romantic Crown Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#241331]/80 border border-[#E8C58A]/35 backdrop-blur-md mb-6 shadow-gold-glow"
            >
              <Sparkles size={13} className="text-[#E8C58A] animate-pulse" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#E8C58A] font-medium">
                A Private Digital Gift
              </span>
              <Heart size={12} className="text-[#F2A7C6] fill-[#F2A7C6]" />
            </motion.div>

            {/* Main Invitation Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9 }}
              className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#FFF7FC] text-glow-rose leading-[1.15] mb-4"
            >
              A little universe, <br className="hidden sm:inline" />
              <span className="italic font-light bg-gradient-to-r from-[#F2A7C6] via-[#E8C58A] to-[#C7A5F5] bg-clip-text text-transparent">
                created just for you.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.9 }}
              className="font-serif text-lg sm:text-xl md:text-2xl text-[#C7A5F5]/90 tracking-wide mb-8 italic"
            >
              For {siteConfig.partnerName}, with all my heart.
            </motion.p>

            {/* ENTER MY WORLD button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              <Button
                variant="luxury"
                size="xl"
                onClick={handleEnterClick}
                icon={<Sparkles size={18} className="text-[#E8C58A] animate-spin" style={{ animationDuration: '6s' }} />}
                className="px-8 sm:px-12 py-4 sm:py-4.5"
              >
                Enter My World
              </Button>
            </motion.div>

            {/* Soft hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 1 }}
              className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#FFF7FC]/40"
            >
              <span>Turn on sound for the full experience</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cinematic Flash Transition Overlay */}
      {isTransitioning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
          className="absolute inset-0 z-30 bg-gradient-to-t from-[#10091C] via-[#241331] to-[#10091C] pointer-events-none"
        />
      )}
    </div>
  );
};
