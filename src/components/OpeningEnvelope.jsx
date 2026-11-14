import React, { useState } from 'react';
import { Heart, Sparkles, MailOpen } from 'lucide-react';
import { siteConfig } from '../data/config';

export const OpeningEnvelope = ({ onOpenComplete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleEnvelopeClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleEnterWorld = (e) => {
    e.stopPropagation();
    setIsExiting(true);
    setTimeout(() => {
      onOpenComplete();
    }, 700);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      background: 'linear-gradient(135deg, #E6F3FB 0%, #D8ECF8 50%, #CDE5F6 100%)',
      opacity: isExiting ? 0 : 1,
      transform: isExiting ? 'scale(1.06)' : 'scale(1)',
      transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s ease',
      userSelect: 'none',
      overflow: 'hidden'
    }}>
      {/* Floating Decorative Elements in Background */}
      <div style={{ position: 'absolute', top: '12%', left: '15%', fontSize: '28px', opacity: 0.55 }} className="animate-float">🩵</div>
      <div style={{ position: 'absolute', top: '22%', right: '18%', fontSize: '24px', opacity: 0.45 }} className="animate-butterfly">🦋</div>
      <div style={{ position: 'absolute', bottom: '15%', left: '20%', fontSize: '22px', opacity: 0.5 }} className="animate-butterfly">✨</div>
      <div style={{ position: 'absolute', bottom: '20%', right: '15%', fontSize: '32px', opacity: 0.5 }} className="animate-float">🩵</div>

      {/* Invitation Text */}
      <div style={{ textAlign: 'center', marginBottom: '24px', maxWidth: '400px' }}>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 16px',
          background: 'rgba(255, 255, 255, 0.85)',
          border: '1px solid var(--color-primary)',
          borderRadius: 'var(--radius-full)',
          fontSize: '12px',
          fontWeight: '700',
          color: 'var(--color-primary-dark)',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '12px'
        }}>
          <Sparkles size={13} color="var(--color-primary)" />
          A Secret For Swetha
          <Heart size={12} fill="var(--color-primary)" color="var(--color-primary)" />
        </span>
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.6rem, 5vw, 2.2rem)',
          fontWeight: '800',
          color: 'var(--color-text-navy)',
          lineHeight: 1.25
        }}>
          Oru Chinna Surprise Unakkaga Dii...
        </h1>
        <p style={{
          fontFamily: 'var(--font-handwritten)',
          fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
          color: 'var(--color-text-charcoal)',
          marginTop: '6px'
        }}>
          {isOpen ? "Keezha irukura letter ah paaru sakkaraiii! 🩵" : "En chellatha click panni open pannu! ✨"}
        </p>
      </div>

      {/* THE ROMANTIC ENVELOPE */}
      <div
        onClick={handleEnvelopeClick}
        style={{
          position: 'relative',
          width: 'clamp(290px, 86vw, 420px)',
          height: 'clamp(210px, 58vw, 270px)',
          perspective: '1000px',
          cursor: isOpen ? 'default' : 'pointer',
          transition: 'transform 0.4s ease'
        }}
      >
        {/* Envelope Back Body */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(145deg, #B5DCF9 0%, #9BCBF1 100%)',
          borderRadius: '16px',
          boxShadow: '0 20px 40px rgba(56, 163, 241, 0.25), 0 6px 14px rgba(21, 43, 68, 0.1)',
          border: '2px solid rgba(255, 255, 255, 0.8)',
          overflow: 'visible'
        }}>
          {/* Triangular Top Flap */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '50%',
            background: 'linear-gradient(180deg, #A8D5F7 0%, #89C3F0 100%)',
            clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            transformOrigin: 'top center',
            transform: isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
            transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: isOpen ? 1 : 10,
            boxShadow: '0 4px 10px rgba(0,0,0,0.06)'
          }} />

          {/* Envelope Pocket Front Left & Right Folds */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, #B0D7F6 0%, #92C5EE 100%)',
            clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 0, 50% 50%)',
            borderRadius: '14px',
            zIndex: 8,
            pointerEvents: 'none'
          }} />

          {/* Blue Heart Wax Seal */}
          {!isOpen && (
            <div style={{
              position: 'absolute',
              top: '46%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #4AA0E8 0%, #2A83CE 100%)',
              border: '3px solid #FFFFFF',
              boxShadow: '0 8px 20px rgba(42, 131, 206, 0.4), 0 0 15px rgba(255, 255, 255, 0.8)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 15,
              animation: 'pulseHeart 2s infinite'
            }}>
              <span style={{ fontSize: '24px' }}>🩵</span>
              <span style={{ fontSize: '9px', fontWeight: '800', color: '#FFFFFF', letterSpacing: '0.5px' }}>
                OPEN
              </span>
            </div>
          )}

          {/* THE LETTER INSIDE (Slides out smoothly when opened) */}
          <div style={{
            position: 'absolute',
            top: '8px',
            left: '12px',
            right: '12px',
            bottom: '8px',
            background: 'var(--color-cream)',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
            border: '1.5px dashed var(--color-primary)',
            padding: '18px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'center',
            zIndex: isOpen ? 20 : 5,
            transform: isOpen ? 'translateY(-65px) scale(1.04)' : 'translateY(0)',
            opacity: isOpen ? 1 : 0.4,
            transition: 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, opacity 0.5s ease',
            pointerEvents: isOpen ? 'auto' : 'none'
          }}>
            {/* Washi tape on top of letter */}
            <div className="washi-tape" style={{ width: '80px', height: '18px', top: '-9px' }} />

            <div>
              <span style={{
                fontFamily: 'var(--font-handwritten)',
                fontSize: '15px',
                color: 'var(--color-primary-dark)',
                fontWeight: '700'
              }}>
                Dear Sakkaraiii 🩵
              </span>

              {/* Exact Special Message Requested by User */}
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.1rem, 3.8vw, 1.45rem)',
                fontWeight: '800',
                color: '#152B44',
                marginTop: '10px',
                lineHeight: 1.3,
                letterSpacing: '0.5px'
              }}>
                "{siteConfig.envelopeMessage}"
              </h2>

              <p style={{
                fontFamily: 'var(--font-handwritten)',
                fontSize: 'clamp(1rem, 3.2vw, 1.25rem)',
                color: 'var(--color-primary-dark)',
                marginTop: '6px'
              }}>
                Happy Birthday & Happy 3rd Anniversary dii! 🩵
              </p>
            </div>

            {/* Enter Button */}
            <button
              onClick={handleEnterWorld}
              style={{
                background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: 'var(--radius-full)',
                padding: '10px 22px',
                fontSize: '13px',
                fontWeight: '700',
                letterSpacing: '0.8px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 6px 18px rgba(56, 163, 241, 0.4)',
                marginTop: '12px'
              }}
            >
              <span>Enter Namma World 🩵</span>
              <Sparkles size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Touch prompt hint */}
      {!isOpen && (
        <p style={{
          marginTop: '22px',
          fontSize: '13px',
          fontWeight: '600',
          color: 'var(--color-primary-dark)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <span>Touch the blue seal to open</span>
          <span className="animate-pulse-heart">🩵</span>
        </p>
      )}
    </div>
  );
};
