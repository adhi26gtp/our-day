import React from 'react';
import { Mail, Heart, Sparkles, Feather } from 'lucide-react';
import { loveLetterData } from '../data/letter';

export const LoveLetter = () => {
  return (
    <section id="love-letter" style={{
      padding: '80px 20px',
      position: 'relative'
    }}>
      <div className="container-narrow" style={{ maxWidth: '780px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 16px',
            background: 'var(--color-bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-full)',
            fontSize: '11px',
            fontWeight: '700',
            color: 'var(--color-primary-dark)',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '10px'
          }}>
            <Feather size={13} color="var(--color-primary)" />
            Straight From My Heart
          </span>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
            fontWeight: '800',
            color: 'var(--color-text-navy)',
            lineHeight: 1.2
          }}>
            My Love Letter • Unakkaga Mattum 🩵
          </h2>
          <p style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: 'clamp(1.15rem, 3.8vw, 1.4rem)',
            color: 'var(--color-text-charcoal)',
            marginTop: '8px'
          }}>
            Indha 3 varushathula naan un mela vecha anba indha letter la ezhudhi irukken...
          </p>
        </div>

        {/* Vintage Scrapbook Letter Paper Card */}
        <div style={{
          position: 'relative',
          background: 'var(--color-cream)',
          border: '1.5px solid var(--border-dashed)',
          borderRadius: 'var(--radius-md)',
          boxShadow: '0 16px 40px rgba(56, 163, 241, 0.15), 0 4px 12px rgba(21, 43, 68, 0.08)',
          padding: 'clamp(28px, 6vw, 48px)',
          backgroundImage: 'radial-gradient(circle at 10% 10%, rgba(184, 220, 250, 0.2) 0%, transparent 40%)'
        }}>
          {/* Washi Tape on top */}
          <div className="washi-tape" style={{ width: '120px', height: '24px', top: '-12px' }} />

          {/* Letter Stamp */}
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '60px',
            height: '70px',
            border: '2px dashed var(--color-primary)',
            borderRadius: '6px',
            padding: '4px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255, 255, 255, 0.8)',
            transform: 'rotate(4deg)'
          }}>
            <span style={{ fontSize: '20px' }}>🩵</span>
            <span style={{ fontSize: '8px', fontWeight: '800', color: 'var(--color-primary-dark)', textTransform: 'uppercase', marginTop: '2px' }}>
              NOV 14
            </span>
          </div>

          {/* Letter Salutation */}
          <h3 style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: 'clamp(1.5rem, 4.5vw, 1.9rem)',
            fontWeight: '700',
            color: 'var(--color-primary-dark)',
            marginBottom: '20px'
          }}>
            {loveLetterData.salutation}
          </h3>

          {/* Letter Paragraphs */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            fontFamily: 'var(--font-handwritten)',
            fontSize: 'clamp(1.2rem, 3.8vw, 1.45rem)',
            color: 'var(--color-text-navy)',
            lineHeight: 1.65,
            fontWeight: '600'
          }}>
            {loveLetterData.paragraphs.map((p, idx) => (
              <p key={idx}>
                {p}
              </p>
            ))}
          </div>

          {/* Signature */}
          <div style={{
            marginTop: '36px',
            textAlign: 'right',
            borderTop: '1px dashed var(--border-color)',
            paddingTop: '16px'
          }}>
            <div style={{
              fontFamily: 'var(--font-handwritten)',
              fontSize: '1.25rem',
              color: 'var(--color-text-charcoal)'
            }}>
              {loveLetterData.signoff}
            </div>
            <div style={{
              fontFamily: 'var(--font-handwritten)',
              fontSize: '1.8rem',
              fontWeight: '700',
              color: 'var(--color-primary-dark)'
            }}>
              {loveLetterData.signature} 🩵
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

