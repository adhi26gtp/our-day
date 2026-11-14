import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Cake, Sparkles, Flame, Heart, Gift, RotateCcw } from 'lucide-react';

export const BirthdaySurprise = () => {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [revealedWish, setRevealedWish] = useState(false);

  const handleBlowCandles = () => {
    setCandlesBlown(true);
    try {
      // Confetti burst
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#5BA8E8', '#B8DCFA', '#FFFFFF', '#92C6F0', '#E4DEFC']
      });
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 60,
          origin: { x: 0.15, y: 0.65 },
          colors: ['#5BA8E8', '#B8DCFA', '#FFFFFF']
        });
      }, 200);
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 60,
          origin: { x: 0.85, y: 0.65 },
          colors: ['#5BA8E8', '#B8DCFA', '#FFFFFF']
        });
      }, 350);
    } catch (e) {
      console.log("Confetti trigger:", e);
    }
  };

  return (
    <section id="birthday" style={{
      padding: '90px 20px',
      position: 'relative',
      background: 'linear-gradient(180deg, #F0F7FD 0%, #E3F1FB 50%, #D8ECF9 100%)',
      textAlign: 'center'
    }}>
      <div className="container-narrow" style={{ maxWidth: '720px', margin: '0 auto' }}>
        {/* Badge */}
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 18px',
          background: 'rgba(255, 255, 255, 0.95)',
          border: '1.5px solid var(--color-primary)',
          borderRadius: 'var(--radius-full)',
          fontSize: '11px',
          fontWeight: '800',
          color: 'var(--color-primary-dark)',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '14px'
        }}>
          <Cake size={13} color="var(--color-primary)" />
          A Very Special Birthday Surprise
          <Heart size={12} fill="var(--color-primary)" color="var(--color-primary)" />
        </span>

        {/* Heading */}
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2rem, 6vw, 3rem)',
          fontWeight: '800',
          color: 'var(--color-text-navy)',
          lineHeight: 1.18,
          marginBottom: '10px'
        }}>
          Happy Birthday Dii Sakkaraiii! 🎂🩵
        </h2>

        <p style={{
          fontFamily: 'var(--font-handwritten)',
          fontSize: 'clamp(1.2rem, 4vw, 1.55rem)',
          color: 'var(--color-primary-dark)',
          fontWeight: '700',
          marginBottom: '32px'
        }}>
          "Innaiku unakku mattum dhaan indha ulagame celebrate pannudhu!"
        </p>

        {/* Chibi Birthday Cake Card */}
        <div style={{
          maxWidth: '360px',
          width: '100%',
          margin: '0 auto 28px auto'
        }}>
          <div className="polaroid-frame" style={{ transform: 'rotate(1deg)' }}>
            <div className="washi-tape" style={{ width: '80px', height: '18px', top: '-9px' }} />
            <div style={{
              width: '100%',
              aspectRatio: '1 / 1',
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: 'var(--color-secondary-soft)',
              position: 'relative'
            }}>
              <img
                src="/images/chibi/chibi_birthday_cake.png"
                alt="Chibi Birthday Cake for Swetha"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              
              {/* Floating Candle Badge */}
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(255, 255, 255, 0.95)',
                padding: '6px 12px',
                borderRadius: 'var(--radius-full)',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '11px',
                fontWeight: '700',
                color: candlesBlown ? 'var(--color-text-muted)' : '#E06A26',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <Flame size={13} fill={candlesBlown ? "none" : "#E06A26"} color={candlesBlown ? "#999" : "#E06A26"} />
                <span>{candlesBlown ? "Candles Blown! ✨" : "Candles are Glowing"}</span>
              </div>
            </div>

            <div style={{
              marginTop: '12px',
              fontFamily: 'var(--font-handwritten)',
              fontSize: '1.25rem',
              color: 'var(--color-text-navy)',
              fontWeight: '700'
            }}>
              {candlesBlown ? "Wish made with love! 🩵" : "Make a wish & blow the candles!"}
            </div>
          </div>
        </div>

        {/* Interactive Candle Blowing Button */}
        <div style={{ marginBottom: '28px' }}>
          {!candlesBlown ? (
            <button
              onClick={handleBlowCandles}
              style={{
                background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: 'var(--radius-full)',
                padding: '14px 34px',
                fontSize: '15px',
                fontWeight: '700',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(56, 163, 241, 0.4)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'transform 0.2s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Flame size={16} />
              <span>Blow The Candles & Make A Wish! 🩵</span>
            </button>
          ) : (
            <button
              onClick={() => setCandlesBlown(false)}
              style={{
                background: '#FFFFFF',
                color: 'var(--color-primary-dark)',
                border: '1.5px solid var(--color-primary)',
                borderRadius: 'var(--radius-full)',
                padding: '8px 20px',
                fontSize: '12px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <RotateCcw size={13} />
              <span>Light Candles Again</span>
            </button>
          )}
        </div>

        {/* Hidden Message Reveal Button */}
        <div>
          {!revealedWish ? (
            <button
              onClick={() => setRevealedWish(true)}
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                color: 'var(--color-primary-dark)',
                border: '1.5px dashed var(--color-primary)',
                borderRadius: 'var(--radius-full)',
                padding: '12px 28px',
                fontSize: '14px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <Gift size={16} color="var(--color-primary)" />
              <span>Click to Reveal My Special Birthday Wish for You 🩵</span>
            </button>
          ) : (
            <div className="scrapbook-card" style={{
              maxWidth: '520px',
              margin: '0 auto',
              padding: '24px 28px',
              border: '2px solid var(--color-primary)',
              background: 'var(--color-cream)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginBottom: '8px' }}>
                <Sparkles size={16} color="var(--color-primary)" />
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: '800', color: 'var(--color-text-navy)' }}>
                  En Manasula Irukura Birthday Wish 🩵
                </h4>
              </div>
              <p style={{
                fontFamily: 'var(--font-handwritten)',
                fontSize: '1.3rem',
                color: 'var(--color-text-navy)',
                lineHeight: 1.5,
                fontWeight: '700'
              }}>
                "Un sirippu, un anbu, un presence dhaan dii en life oda biggest gift. En birthday wish enna theriyuma? Namma rendu perum ipdiye eppovum sandhosham ah, kai korthu travel pannanum dii sakkaraiii! 🩵"
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

