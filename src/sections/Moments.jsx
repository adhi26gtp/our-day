import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { favouriteMoments } from '../data/moments';

export const Moments = () => {
  return (
    <section id="moments" style={{
      padding: '80px 20px',
      position: 'relative',
      background: 'linear-gradient(180deg, rgba(235, 244, 252, 0.5) 0%, rgba(247, 250, 253, 0.7) 100%)'
    }}>
      <div className="container-narrow">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
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
            <Heart size={13} fill="var(--color-primary)" color="var(--color-primary)" />
            Unforgettable Little Things
          </span>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
            fontWeight: '800',
            color: 'var(--color-text-navy)',
            lineHeight: 1.2
          }}>
            Our Favourite Moments 🩵
          </h2>
          <p style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: 'clamp(1.15rem, 3.8vw, 1.4rem)',
            color: 'var(--color-text-charcoal)',
            marginTop: '8px'
          }}>
            Van la kai pudichadhu la irundhu... namma shared ice cream varaikkum!
          </p>
        </div>

        {/* Moments Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
          gap: '26px'
        }}>
          {favouriteMoments.map((item) => (
            <div
              key={item.id}
              className="scrapbook-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                padding: '0'
              }}
            >
              {/* Image Container */}
              <div style={{
                width: '100%',
                height: '190px',
                position: 'relative',
                backgroundColor: 'var(--color-secondary-soft)',
                overflow: 'hidden'
              }}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  padding: '4px 10px',
                  background: 'rgba(255, 255, 255, 0.92)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '11px',
                  fontWeight: '700',
                  color: 'var(--color-primary-dark)',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  {item.emoji} {item.tagline}
                </span>
              </div>

              {/* Text Body */}
              <div style={{ padding: '20px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: 'var(--color-text-navy)',
                  marginBottom: '8px'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: 'var(--color-text-charcoal)',
                  lineHeight: '1.6'
                }}>
                  {item.tanglish}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
