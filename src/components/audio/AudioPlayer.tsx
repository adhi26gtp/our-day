import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Pause, Play, Sparkles } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface AudioPlayerProps {
  autoStart?: boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ autoStart = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.65);
  const [showControls, setShowControls] = useState(false);
  const [usingSynthFallback, setUsingSynthFallback] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthIntervalRef = useRef<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Synthesized romantic soundscape fallback using Web Audio API
  const playRomanticChordNote = (freq: number, duration: number = 2.5, gainLevel: number = 0.08) => {
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Sine wave with gentle warm harmonics
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Smooth attack and soft decay
      const effectiveGain = isMuted ? 0 : gainLevel * volume;
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(Math.max(0.001, effectiveGain), ctx.currentTime + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration + 0.1);
    } catch (e) {
      console.warn("Audio Context note error:", e);
    }
  };

  const startAmbientSynth = () => {
    setUsingSynthFallback(true);
    // Romantic Pentatonic/Lydian chords: Eb4, G4, Bb4, C5, D5, F5
    const notes = [311.13, 392.00, 466.16, 523.25, 587.33, 622.25, 698.46];
    let step = 0;

    if (synthIntervalRef.current) clearInterval(synthIntervalRef.current);

    synthIntervalRef.current = window.setInterval(() => {
      if (!isPlaying) return;
      const note1 = notes[step % notes.length];
      const note2 = notes[(step + 2) % notes.length];
      playRomanticChordNote(note1, 3.2, 0.06);
      setTimeout(() => {
        playRomanticChordNote(note2, 2.8, 0.04);
      }, 700);
      step = (step + 1) % notes.length;
    }, 2400);
  };

  const stopAmbientSynth = () => {
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
  };

  const playMusic = async () => {
    try {
      if (audioRef.current) {
        audioRef.current.volume = isMuted ? 0 : volume;
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          await playPromise;
          setIsPlaying(true);
        }
      }
    } catch (err) {
      console.log("Audio file playback blocked or offline, switching to ambient romantic synth:", err);
      setIsPlaying(true);
      startAmbientSynth();
    }
  };

  const pauseMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    stopAmbientSynth();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  };

  const toggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    if (audioRef.current) {
      audioRef.current.muted = nextMute;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
    }
    if (val === 0) setIsMuted(true);
    else setIsMuted(false);
  };

  useEffect(() => {
    if (autoStart) {
      playMusic();
    }
    return () => {
      stopAmbientSynth();
    };
  }, [autoStart]);

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center space-x-2">
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={siteConfig.audioTrack.url}
        loop
        preload="auto"
        onError={() => {
          console.warn("Audio file failed to load, preparing ambient synth fallback.");
        }}
      />

      {/* Floating Glassmorphic Audio Controller */}
      <div 
        className="relative group flex items-center bg-[#10091C]/75 backdrop-blur-xl border border-[#F2A7C6]/25 rounded-full px-3.5 py-2 shadow-glass-glow transition-all duration-300 hover:border-[#E8C58A]/50 hover:bg-[#241331]/80"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        {/* Equalizer animation when playing */}
        <div className="flex items-center space-x-1 mr-2.5">
          {[1, 2, 3, 4].map((bar) => (
            <span
              key={bar}
              className={`w-0.5 rounded-full bg-gradient-to-t from-[#F2A7C6] to-[#E8C58A] transition-all ${
                isPlaying && !isMuted ? 'animate-pulse' : 'h-1.5 opacity-40'
              }`}
              style={{
                height: isPlaying && !isMuted ? `${(bar * 5) % 16 + 8}px` : '6px',
                animationDuration: `${0.4 + bar * 0.2}s`,
              }}
            />
          ))}
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause music" : "Play romantic soundtrack"}
          className="p-1 rounded-full text-[#F2A7C6] hover:text-[#E8C58A] transition-colors focus:outline-none"
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
        </button>

        {/* Mute Button */}
        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute" : "Mute"}
          className="p-1 text-[#FFF7FC]/70 hover:text-[#FFF7FC] transition-colors focus:outline-none"
        >
          {isMuted || volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>

        {/* Track Label */}
        <div className="hidden sm:flex flex-col ml-1 mr-1 text-left max-w-[120px] overflow-hidden">
          <span className="text-[10px] uppercase tracking-widest text-[#E8C58A] font-semibold truncate flex items-center gap-1">
            <Sparkles size={8} /> {usingSynthFallback ? "Romantic Synth" : "Soundtrack"}
          </span>
          <span className="text-[11px] text-[#FFF7FC]/80 font-serif italic truncate">
            {siteConfig.audioTrack.title}
          </span>
        </div>

        {/* Expandable Volume Slider */}
        <div
          className={`flex items-center overflow-hidden transition-all duration-300 ${
            showControls ? 'w-20 opacity-100 ml-2' : 'w-0 opacity-0'
          }`}
        >
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-18 h-1 bg-[#241331] rounded-lg appearance-none cursor-pointer accent-[#F2A7C6]"
            aria-label="Volume slider"
          />
        </div>
      </div>
    </div>
  );
};
