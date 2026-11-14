import React from 'react';
import { Heart, Sparkles, Calendar, Cake } from 'lucide-react';
import { siteConfig } from '../data/config';

export const Hero = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '92vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 20px 60px 20px',
      textAlign: 'center',
      overflow: 'hidden'
    }}>
      {/* Floating Decorative Scrapbook Stickers */}
      <div style={{ position: 'absolute', top: '15%', left: '8%', fontSize: '26px' }} className="animate-butterfly">🩵</div>
      <div style={{ position: 'absolute', top: '25%', right: '10%', fontSize: '24px' }} className="animate-float">✨</div>
      <div style={{ position: 'absolute', bottom: '15%', left: '12%', fontSize: '22px' }} className="animate-float">🦋</div>
      <div style={{ position: 'absolute', bottom: '18%', right: '8%', fontSize: '28px' }} className="animate-butterfly">🩵</div>

      <div className="container-narrow" style={{ position: 'relative', zIndex: 10 }}>
        {/* Twin Celebration Ribbon Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 20px',
          background: 'rgba(255, 255, 255, 0.95)',
          border: '1.5px solid var(--color-primary)',
          borderRadius: 'var(--radius-full)',
          boxShadow: '0 4px 16px rgba(91, 168, 232, 0.25)',
          marginBottom: '20px'
        }}>
          <Cake size={14} color="var(--color-primary)" />
          <span style={{
            fontSize: '12px',
            fontWeight: '800',
            letterSpacing: '1px',
            color: 'var(--color-primary-dark)',
            textTransform: 'uppercase'
          }}>
            Birthday + 3rd Love Anniversary 🩵
          </span>
          <Heart size={13} fill="var(--color-primary)" color="var(--color-primary)" />
        </div>

        {/* Main Hero Heading */}
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2.1rem, 7vw, 3.8rem)',
          fontWeight: '800',
          color: 'var(--color-text-navy)',
          lineHeight: 1.18,
          marginBottom: '12px',
          letterSpacing: '-0.5px'
        }}>
          Happy Birthday Dii Sakkaraiii! <span className="blue-glow">🩵</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.1rem, 3.8vw, 1.6rem)',
          fontWeight: '700',
          color: 'var(--color-primary-dark)',
          marginBottom: '28px',
          lineHeight: 1.4
        }}>
          {siteConfig.heroTagline}
        </p>

        {/* Chibi Couple Hero Polaroid Card */}
        <div style={{
          display: 'inline-block',
          maxWidth: '380px',
          width: '100%',
          margin: '0 auto 32px auto'
        }}>
          <div className="polaroid-frame" style={{ transform: 'rotate(-1.5deg)' }}>
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
                src="/images/chibi/chibi_couple_hero.png"
                alt="Swetha & Adhi Cute Chibi Couple"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div style={{
              marginTop: '12px',
              fontFamily: 'var(--font-handwritten)',
              fontSize: 'clamp(1.2rem, 3.5vw, 1.45rem)',
              color: 'var(--color-text-navy)',
              fontWeight: '700'
            }}>
              "Un sirippu dhaan dii en ulagam! 🩵"
            </div>
          </div>
        </div>

        {/* Quick Date Milestone Pill */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '32px'
        }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            background: 'var(--color-cream)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-full)',
            fontSize: '12px',
            fontWeight: '600',
            color: 'var(--color-text-charcoal)'
          }}>
            <Calendar size={13} color="var(--color-primary)" />
            Began: Nov 14, 2023 • 10:37 PM
          </span>

          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            background: 'var(--color-secondary-soft)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-full)',
            fontSize: '12px',
            fontWeight: '700',
            color: 'var(--color-primary-dark)'
          }}>
            <Heart size={13} fill="var(--color-primary)" color="var(--color-primary)" />
            3 Years of Pure Love 🩵
          </span>
        </div>

        {/* Action Button */}
        <div>
          <button
            onClick={() => scrollToSection('timeline')}
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
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <span>Namma Story ah Paaru 🩵</span>
            <Sparkles size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
