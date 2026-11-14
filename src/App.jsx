import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { OpeningEnvelope } from './components/OpeningEnvelope';
import { AudioPlayer } from './components/AudioPlayer';
import { Hero } from './sections/Hero';
import { Timeline } from './sections/Timeline';
import { Gallery } from './sections/Gallery';
import { Moments } from './sections/Moments';
import { LoveNotes } from './sections/LoveNotes';
import { Puzzle } from './sections/Puzzle';
import { BirthdaySurprise } from './sections/BirthdaySurprise';
import { Countdown } from './sections/Countdown';
import { LoveLetter } from './sections/LoveLetter';
import { FinalSurprise } from './sections/FinalSurprise';

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const handleEnvelopeComplete = () => {
    setIsEnvelopeOpen(true);
    setIsPlayingMusic(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleMusic = () => {
    setIsPlayingMusic((prev) => !prev);
  };

  const handleReplay = () => {
    setIsEnvelopeOpen(false);
    setIsPlayingMusic(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Opening Envelope Gate */}
      {!isEnvelopeOpen && (
        <OpeningEnvelope onOpenComplete={handleEnvelopeComplete} />
      )}

      {/* Main Celebration Website */}
      {isEnvelopeOpen && (
        <>
          <Navbar />
          
          <main>
            <Hero />
            <div id="story">
              <Timeline />
            </div>
            <div id="gallery">
              <Gallery />
            </div>
            <div id="moments">
              <Moments />
            </div>
            <div id="notes">
              <LoveNotes />
            </div>
            <div id="puzzle">
              <Puzzle />
            </div>
            <div id="birthday">
              <BirthdaySurprise />
            </div>
            <Countdown />
            <div id="letter">
              <LoveLetter />
            </div>
            <FinalSurprise onReplay={handleReplay} />
          </main>

          {/* Floating Audio Player */}
          <AudioPlayer 
            isPlaying={isPlayingMusic} 
            onTogglePlay={handleToggleMusic} 
          />

          {/* Gentle Footer Note */}
          <footer
            style={{
              padding: '36px 20px',
              textAlign: 'center',
              background: 'var(--cream, #fffdf8)',
              borderTop: '1px dashed var(--color-primary-light, #BAE6FD)',
              color: 'var(--color-text-muted, #64748B)',
              fontSize: '0.88rem',
            }}
          >
            <p style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              Handcrafted with pure love by <strong style={{ color: 'var(--color-primary-dark, #0284C7)' }}>Adhithian</strong> for <strong style={{ color: 'var(--color-primary-dark, #0284C7)' }}>Swetha</strong> 🩵
            </p>
            <p style={{ margin: '8px 0 0', fontSize: '0.8rem', opacity: 0.85 }}>
              November 14, 2023 · 10:37 PM — Forever & Always
            </p>
          </footer>
        </>
      )}
    </div>
  );
}
