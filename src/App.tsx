import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { InvitationSection } from '@/sections/Invitation/InvitationSection';
import { HerUniverseSection } from '@/sections/HerUniverse/HerUniverseSection';
import { ThreeYearsSection } from '@/sections/ThreeYears/ThreeYearsSection';
import { GallerySection } from '@/sections/Gallery/GallerySection';
import { LoveLetterSection } from '@/sections/LoveLetter/LoveLetterSection';
import { BirthdaySection } from '@/sections/Birthday/BirthdaySection';
import { AnniversarySection } from '@/sections/Anniversary/AnniversarySection';
import { FinaleSection } from '@/sections/Finale/FinaleSection';
import { AudioPlayer } from '@/components/audio/AudioPlayer';
import { MobileNav } from '@/components/ui/MobileNav';
import { Heart } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const App: React.FC = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const [audioStarted, setAudioStarted] = useState(false);

  // Initialize Lenis smooth scroll once entered
  useEffect(() => {
    if (!hasEntered) return;

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const animId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animId);
      lenis.destroy();
    };
  }, [hasEntered]);

  const handleEnterWorld = () => {
    setHasEntered(true);
    setAudioStarted(true);
  };

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setHasEntered(false);
    }, 600);
  };

  return (
    <div className="relative min-h-screen bg-[#10091C] text-[#FFF7FC] font-sans selection:bg-[#F2A7C6]/30 selection:text-[#E8C58A]">
      {/* Audio Player (Persists across entire experience, starts on user interaction) */}
      <AudioPlayer autoStart={audioStarted} />

      {!hasEntered ? (
        /* SECTION 01: THE INVITATION SCREEN (PHASE 2) */
        <InvitationSection onEnter={handleEnterWorld} />
      ) : (
        /* MAIN UNIVERSE EXPERIENCE (PHASES 3 – 9) */
        <main className="relative w-full">
          {/* Top Sticky Navigation Pill */}
          <nav className="fixed top-6 left-6 z-40 hidden lg:flex items-center gap-3 px-4 py-2 rounded-full bg-[#180E2B]/85 backdrop-blur-xl border border-white/10 shadow-glass">
            <span className="font-serif text-sm font-semibold tracking-wider text-[#E8C58A] flex items-center gap-1.5">
              <Heart size={14} className="fill-[#F2A7C6] text-[#F2A7C6]" />
              {siteConfig.partnerName} & Adhithian
            </span>
            <span className="text-white/20">|</span>
            <a href="#her-universe" className="text-xs text-[#FFF7FC]/70 hover:text-[#E8C58A] transition-colors">
              Her Universe
            </a>
            <span className="text-white/20">•</span>
            <a href="#three-years-timeline" className="text-xs text-[#FFF7FC]/70 hover:text-[#F2A7C6] transition-colors">
              Our Story
            </a>
            <span className="text-white/20">•</span>
            <a href="#gallery" className="text-xs text-[#FFF7FC]/70 hover:text-[#C7A5F5] transition-colors">
              Gallery
            </a>
            <span className="text-white/20">•</span>
            <a href="#love-letter" className="text-xs text-[#FFF7FC]/70 hover:text-[#E8C58A] transition-colors">
              Love Letter
            </a>
            <span className="text-white/20">•</span>
            <a href="#birthday" className="text-xs text-[#FFF7FC]/70 hover:text-[#F2A7C6] transition-colors">
              Birthday
            </a>
            <span className="text-white/20">•</span>
            <a href="#anniversary" className="text-xs text-[#FFF7FC]/70 hover:text-[#E8C58A] transition-colors">
              Anniversary
            </a>
          </nav>

          {/* SECTION 02: HER UNIVERSE (PHASE 3) */}
          <HerUniverseSection />

          {/* SECTION 03 & 04: THREE YEARS, COUNTLESS MEMORIES (PHASE 4) */}
          <ThreeYearsSection />

          {/* SECTION 05: OUR LITTLE UNIVERSE - PHOTO GALLERY (PHASE 5) */}
          <GallerySection />

          {/* SECTION 06: WORDS FROM MY HEART - LOVE LETTER (PHASE 6) */}
          <LoveLetterSection />

          {/* SECTION 07: HAPPY BIRTHDAY, SWETHA (PHASE 7) */}
          <BirthdaySection />

          {/* SECTION 08: THREE YEARS OF US - ANNIVERSARY (PHASE 8) */}
          <AnniversarySection />

          {/* SECTION 09: THE FINAL SURPRISE & FINALE (PHASE 9) */}
          <FinaleSection onReplay={handleReplay} />

          {/* Mobile Navigation Quick-Jump Dock */}
          <MobileNav />

          {/* Elegant Footer */}
          <footer className="w-full py-16 px-6 text-center border-t border-white/10 bg-[#05020a] text-[#FFF7FC]/60">
            <div className="max-w-2xl mx-auto flex flex-col items-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#241331] border border-[#E8C58A]/40 mb-4 text-[#F2A7C6]">
                <Heart size={18} className="fill-[#F2A7C6]" />
              </div>
              <p className="font-serif text-xl sm:text-2xl text-[#FFF7FC] italic mb-2">
                "Some stories are written in books. Ours is written in the little moments we share."
              </p>
              <p className="text-xs uppercase tracking-widest text-[#E8C58A] font-semibold mb-3">
                Happy Birthday & Happy 3rd Anniversary, Swetha ❤️
              </p>
              <p className="text-[11px] text-[#FFF7FC]/40 tracking-wider">
                November 15, 2026 • Built with Love
              </p>
            </div>
          </footer>
        </main>
      )}
    </div>
  );
};

export default App;
