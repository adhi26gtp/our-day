import React, { useState } from 'react';
import { Camera, X, ZoomIn, Heart, Sparkles } from 'lucide-react';
import { galleryPhotos } from '../data/gallery';

export const Gallery = () => {
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <section id="gallery" style={{
      padding: '80px 20px',
      position: 'relative'
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
            <Camera size={13} color="var(--color-primary)" />
            Polaroids of Our Memories
          </span>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
            fontWeight: '800',
            color: 'var(--color-text-navy)',
            lineHeight: 1.2
          }}>
            Photo Gallery • Our Little World 🩵
          </h2>
          <p style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: 'clamp(1.15rem, 3.8vw, 1.4rem)',
            color: 'var(--color-text-charcoal)',
            marginTop: '8px'
          }}>
            Prathi polaroid pinnadiyum oru azhagaana memory irukku dii sakkaraiii!
          </p>
        </div>

        {/* Polaroid Scrapbook Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '30px',
          padding: '10px 0'
        }}>
          {galleryPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="polaroid-frame"
              style={{
                cursor: 'pointer',
                transform: `rotate(${photo.rotation})`
              }}
            >
              {/* Tape on top */}
              <div className="washi-tape" style={{ width: '80px', height: '20px', top: '-10px' }} />

              {/* Photo Box */}
              <div style={{
                width: '100%',
                aspectRatio: '4 / 3.8',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: 'var(--color-secondary-soft)',
                position: 'relative'
              }}>
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />

                {/* Tag Pill */}
                <span style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  padding: '4px 10px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '10px',
                  fontWeight: '700',
                  color: 'var(--color-primary-dark)',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  {photo.tag}
                </span>
              </div>

              {/* Polaroid Caption */}
              <div style={{ marginTop: '14px', textAlign: 'center' }}>
                <h4 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '15px',
                  fontWeight: '700',
                  color: 'var(--color-text-navy)',
                  marginBottom: '4px'
                }}>
                  {photo.title}
                </h4>
                <p style={{
                  fontFamily: 'var(--font-handwritten)',
                  fontSize: '14px',
                  color: 'var(--color-text-charcoal)',
                  lineHeight: '1.4'
                }}>
                  "{photo.caption}"
                </p>
                <span style={{
                  fontSize: '11px',
                  color: 'var(--color-text-muted)',
                  display: 'block',
                  marginTop: '6px'
                }}>
                  {photo.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {activePhoto && (
        <div
          onClick={() => setActivePhoto(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(21, 43, 68, 0.85)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="polaroid-frame"
            style={{
              maxWidth: '560px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '16px 16px 28px 16px',
              transform: 'none'
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePhoto(null)}
              aria-label="Close photo"
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1.5px solid var(--color-primary)',
                color: 'var(--color-primary-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              <X size={18} />
            </button>

            {/* Modal Image */}
            <div style={{
              width: '100%',
              maxHeight: '58vh',
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: 'var(--color-secondary-soft)',
              marginBottom: '16px'
            }}>
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>

            {/* Modal Info */}
            <div style={{ textAlign: 'center' }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '4px 12px',
                background: 'var(--color-secondary-soft)',
                borderRadius: 'var(--radius-full)',
                fontSize: '11px',
                fontWeight: '700',
                color: 'var(--color-primary-dark)',
                marginBottom: '8px'
              }}>
                <Sparkles size={12} />
                {activePhoto.tag} • {activePhoto.date}
              </span>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.3rem',
                fontWeight: '800',
                color: 'var(--color-text-navy)',
                marginBottom: '6px'
              }}>
                {activePhoto.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-handwritten)',
                fontSize: '1.15rem',
                color: 'var(--color-text-charcoal)',
                lineHeight: 1.4
              }}>
                "{activePhoto.caption}"
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

