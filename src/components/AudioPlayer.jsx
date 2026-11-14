import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';
import { siteConfig } from '../data/config';

export const AudioPlayer = ({ isPlaying, onTogglePlay }) => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log("Audio autoplay prevented or waiting for interaction:", err);
        });
      }
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    audioRef.current.muted = nextMute;
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 999,
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: 'rgba(255, 255, 255, 0.94)',
      border: '1.5px solid var(--color-primary)',
      borderRadius: 'var(--radius-full)',
      padding: '8px 16px',
      boxShadow: 'var(--shadow-md), var(--shadow-glow)',
      backdropFilter: 'blur(10px)',
      userSelect: 'none'
    }}>
      <audio
        ref={audioRef}
        src={siteConfig.audioPath}
        loop
        preload="auto"
      />

      {/* Animated Equalizer Bars */}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '16px', marginRight: '4px' }}>
        {[1, 2, 3, 4].map((bar) => (
          <span
            key={bar}
            style={{
              width: '3px',
              height: isPlaying && !isMuted ? `${(bar * 5) % 14 + 6}px` : '4px',
              backgroundColor: 'var(--color-primary)',
              borderRadius: '2px',
              transition: 'height 0.25s ease',
              animation: isPlaying && !isMuted ? `floatGentle ${0.4 + bar * 0.2}s infinite alternate` : 'none'
            }}
          />
        ))}
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={onTogglePlay}
        aria-label={isPlaying ? "Pause music" : "Play romantic song"}
        style={{
          background: 'var(--color-primary)',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '50%',
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(91, 168, 232, 0.4)'
        }}
      >
        {isPlaying ? <Pause size={14} /> : <Play size={14} style={{ marginLeft: '2px' }} />}
      </button>

      {/* Track Label */}
      <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', maxWidth: '110px' }}>
        <span style={{ fontSize: '10px', fontWeight: '700', color: 'var(--color-primary-dark)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Namma Song 🩵
        </span>
        <span style={{ fontSize: '11px', color: 'var(--color-text-charcoal)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          Melody 🎵
        </span>
      </div>

      {/* Mute Button */}
      <button
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute" : "Mute"}
        style={{
          background: 'transparent',
          border: 'none',
          color: 'var(--color-text-muted)',
          cursor: 'pointer',
          padding: '4px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>
    </div>
  );
};
