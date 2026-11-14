import React from 'react';
import { Heart, Sparkles, RotateCcw, ArrowUp } from 'lucide-react';
import { siteConfig } from '../data/config';

export const FinalSurprise = ({ onReplay }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="final-surprise" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 20px 60px 20px',
      position: 'relative',
      background: 'linear-gradient(180deg, #E6F3FB 0%, #D8ECF8 50%, #CDE5F6 100%)',
      textAlign: 'center',
      overflow: 'hidden'
    }}>
      {/* Floating subtle hearts and butterflies */}
      <div style={{ position: 'absolute', top: '10%', left: '10%', fontSize: '28px' }} className="animate-butterfly">🦋</div>
      <div style={{ position: 'absolute', top: '18%', right: '12%', fontSize: '30px' }} className="animate-float">🩵</div>
      <div style={{ position: 'absolute', bottom: '15%', left: '15%', fontSize: '24px' }} className="animate-float">✨</div>
      <div style={{ position: 'absolute', bottom: '12%', right: '10%', fontSize: '32px' }} className="animate-butterfly">🩵</div>

      <div className="container-narrow" style={{ maxWidth: '680px', position: 'relative', zIndex: 10 }}>
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
          marginBottom: '20px'
        }}>
          <Sparkles size={13} color="var(--color-primary)" />
          The Final Promise
          <Heart size={12} fill="var(--color-primary)" color="var(--color-primary)" />
        </span>

        {/* Chibi Forever Hug Illustration Card */}
        <div style={{
          maxWidth: '360px',
          width: '100%',
          margin: '0 auto 28px auto'
        }}>
          <div className="polaroid-frame" style={{ transform: 'rotate(-1deg)' }}>
            <div className="washi-tape" style={{ width: '90px' }} />
            <div style={{
              width: '100%',
              aspectRatio: '1 / 1',
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: 'var(--color-secondary-soft)',
              position: 'relative'
            }}>
              <img
                src="/images/chibi/chibi_forever_hug.png"
                alt="Swetha & Adhi Forever Hug"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div style={{
              marginTop: '10px',
              fontFamily: 'var(--font-handwritten)',
              fontSize: '1.25rem',
              color: 'var(--color-text-navy)',
              fontWeight: '700'
            }}>
              "En chellam dii nee... 🩵"
            </div>
          </div>
        </div>

        {/* The Exact Final Surprise Messages */}
        <div className="scrapbook-card" style={{
          padding: 'clamp(24px, 5vw, 36px)',
          background: 'rgba(255, 255, 255, 0.96)',
          border: '2px solid var(--color-primary)',
          boxShadow: 'var(--shadow-lg), var(--shadow-glow)',
          marginBottom: '32px'
        }}>
          <p style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: 'clamp(1.2rem, 3.8vw, 1.45rem)',
            color: 'var(--color-text-navy)',
            lineHeight: 1.6,
            fontWeight: '600',
            marginBottom: '16px'
          }}>
            "{siteConfig.finalSurprise.line1}"
          </p>

          <p style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: 'clamp(1.2rem, 3.8vw, 1.45rem)',
            color: 'var(--color-text-navy)',
            lineHeight: 1.6,
            fontWeight: '600',
            marginBottom: '20px'
          }}>
            "{siteConfig.finalSurprise.line2}"
          </p>

          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.5rem, 4.5vw, 2.1rem)',
            fontWeight: '800',
            color: 'var(--color-primary-dark)',
            marginBottom: '14px',
            lineHeight: 1.2
          }}>
            {siteConfig.finalSurprise.line3}
          </h3>

          <div style={{
            padding: '14px 20px',
            background: 'var(--color-secondary-soft)',
            borderRadius: 'var(--radius-sm)',
            border: '1.5px dashed var(--color-primary)',
            marginTop: '12px'
          }}>
            <h4 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.2rem, 3.6vw, 1.55rem)',
              fontWeight: '800',
              color: 'var(--color-text-navy)',
              letterSpacing: '0.5px'
            }}>
              "{siteConfig.finalSurprise.promise}"
            </h4>
          </div>

          <p style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: '1.35rem',
            color: 'var(--color-primary)',
            fontWeight: '700',
            marginTop: '18px'
          }}>
            — {siteConfig.finalSurprise.subtext}
          </p>
        </div>

        {/* Buttons: Replay & Top */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <button
            onClick={onReplay}
            style={{
              background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: 'var(--radius-full)',
              padding: '12px 28px',
              fontSize: '14px',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 6px 18px rgba(56, 163, 241, 0.35)'
            }}
          >
            <RotateCcw size={15} />
            <span>Replay Surprise Envelope 🩵</span>
          </button>

          <button
            onClick={scrollToTop}
            style={{
              background: '#FFFFFF',
              color: 'var(--color-primary-dark)',
              border: '1.5px solid var(--color-primary)',
              borderRadius: 'var(--radius-full)',
              padding: '12px 24px',
              fontSize: '14px',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <ArrowUp size={15} />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </section>
  );
};

