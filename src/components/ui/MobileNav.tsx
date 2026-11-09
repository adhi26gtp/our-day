import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, BookOpen, Camera, Mail, Calendar, Infinity, ArrowUp } from 'lucide-react';

export const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'her-universe', label: 'Her Universe', icon: <Sparkles size={16} /> },
    { id: 'three-years-timeline', label: 'Our Story (3 Chapters)', icon: <BookOpen size={16} /> },
    { id: 'gallery', label: 'Photo Gallery', icon: <Camera size={16} /> },
    { id: 'love-letter', label: 'Love Letter', icon: <Mail size={16} /> },
    { id: 'birthday', label: 'Birthday Celebration', icon: <Calendar size={16} /> },
    { id: 'anniversary', label: '3-Year Anniversary', icon: <Infinity size={16} /> },
    { id: 'finale', label: 'The Final Promise', icon: <Sparkles size={16} /> },
  ];

  const handleJump = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="lg:hidden fixed bottom-6 right-6 z-40">
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#241331] to-[#3a1848] border-2 border-[#E8C58A]/60 shadow-gold-glow flex items-center justify-center text-[#E8C58A] cursor-pointer"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Floating Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-16 right-0 w-64 p-4 rounded-2xl bg-[#1e0e2e]/95 border border-[#E8C58A]/40 backdrop-blur-2xl shadow-gold-glow flex flex-col gap-2"
          >
            <span className="text-[10px] uppercase tracking-widest text-[#E8C58A] font-semibold px-2 pb-1 border-b border-white/10">
              Jump To Section
            </span>

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleJump(item.id)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-[#FFF7FC]/80 hover:text-[#FFF7FC] hover:bg-[#241331] transition-colors text-left"
              >
                <span className="text-[#F2A7C6]">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}

            <button
              onClick={() => {
                setIsOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-[#E8C58A] hover:bg-[#241331] transition-colors text-left border-t border-white/10 mt-1"
            >
              <ArrowUp size={14} />
              <span>Back to Top</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
