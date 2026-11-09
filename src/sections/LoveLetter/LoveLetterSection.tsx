import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, MailOpen, Feather } from 'lucide-react';
import { loveLetter } from '@/config/messages';
import { Button } from '@/components/ui/Button';

export const LoveLetterSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="love-letter" className="relative w-full py-28 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#10091C] via-[#200f2e] to-[#10091C] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#F2A7C6]/15 via-[#E8C58A]/10 to-[#C7A5F5]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#241331]/80 border border-[#E8C58A]/35 backdrop-blur-md mb-4 shadow-gold-glow">
            <Feather size={13} className="text-[#E8C58A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#E8C58A] font-medium">
              Words From My Heart
            </span>
            <Heart size={12} className="text-[#F2A7C6] fill-[#F2A7C6]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#FFF7FC] text-glow-rose tracking-tight mb-3">
            A Letter Written For You
          </h2>
          <p className="font-serif text-lg sm:text-xl text-[#C7A5F5]/85 italic max-w-xl mx-auto">
            Every word here was kept inside my heart, waiting for this very day.
          </p>
        </div>

        {/* ENVELOPE & LETTER CONTAINER */}
        <div className="w-full max-w-2xl relative flex flex-col items-center">
          {!isOpen ? (
            /* CLOSED ENVELOPE STAGE */
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              onClick={() => setIsOpen(true)}
              className="relative w-full max-w-lg aspect-[1.5/1] rounded-2xl bg-gradient-to-br from-[#2b143a] via-[#1f0d2b] to-[#14081c] border-2 border-[#E8C58A]/50 shadow-gold-glow p-8 flex flex-col items-center justify-between cursor-pointer group select-none overflow-hidden"
            >
              {/* Envelope flap aesthetic styling */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-[#36194a]/40 border-b border-[#E8C58A]/30 [clip-path:polygon(0_0,100%_0,50%_100%)] pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between w-full text-xs text-[#E8C58A] tracking-widest uppercase">
                <span className="flex items-center gap-1.5 font-medium">
                  <Mail size={14} /> Confidential & True
                </span>
                <span>{loveLetter.date}</span>
              </div>

              {/* Golden Wax Seal in Center */}
              <div className="relative z-10 flex flex-col items-center my-auto">
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-[#9B2245] via-[#D15886] to-[#E8C58A] p-[2px] shadow-rose-glow group-hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full rounded-full bg-[#4A1525] flex items-center justify-center border border-[#FFE8BD]/60">
                    <Heart size={28} className="text-[#FFE8BD] fill-[#FFE8BD] animate-pulse" />
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#E8C58A] mt-2 font-semibold">
                  Click To Break Seal
                </span>
              </div>

              <div className="relative z-10 text-center font-serif text-xl sm:text-2xl text-[#FFF7FC] italic text-glow-rose">
                {loveLetter.greeting}
              </div>
            </motion.div>
          ) : (
            /* OPENED LETTER STAGE — PROGRESSIVE REVEAL */
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full rounded-3xl bg-gradient-to-b from-[#1c0c29] via-[#14081d] to-[#10091C] border border-[#E8C58A]/40 shadow-gold-glow p-8 sm:p-12 md:p-14 overflow-hidden"
            >
              {/* Decorative delicate border lines */}
              <div className="absolute inset-3 border border-[#E8C58A]/20 rounded-2xl pointer-events-none" />

              {/* Letter Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E8C58A]/20">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E8C58A]">
                  <MailOpen size={16} />
                  <span>Personal Letter</span>
                </div>
                <span className="font-serif text-sm italic text-[#C7A5F5]">
                  {loveLetter.date}
                </span>
              </div>

              {/* Salutation */}
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-serif text-2xl sm:text-3xl text-[#FFF7FC] font-semibold mb-6 text-glow-rose"
              >
                {loveLetter.greeting}
              </motion.h3>

              {/* Progressively Revealed Paragraphs */}
              <div className="space-y-6 text-[#FFF7FC]/85 font-serif text-base sm:text-lg md:text-xl leading-relaxed">
                {loveLetter.paragraphs.map((p, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.35, duration: 0.8 }}
                    className="first-letter:text-3xl first-letter:font-bold first-letter:text-[#E8C58A] first-letter:mr-1"
                  >
                    {p}
                  </motion.p>
                ))}
              </div>

              {/* Signoff and Signature */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + loveLetter.paragraphs.length * 0.35, duration: 0.8 }}
                className="mt-10 pt-6 border-t border-[#E8C58A]/20 flex flex-col items-end text-right"
              >
                <p className="font-serif text-base italic text-[#C7A5F5] mb-2">
                  {loveLetter.signoff}
                </p>
                <p className="font-script text-3xl sm:text-4xl text-[#E8C58A] text-glow-gold">
                  {loveLetter.signature}
                </p>
                <p className="text-xs uppercase tracking-widest text-[#FFF7FC]/40 mt-1">
                  November 15, 2026
                </p>
              </motion.div>

              {/* Close / Fold Back Action */}
              <div className="mt-8 flex justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-xs"
                >
                  Fold Letter Back
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
