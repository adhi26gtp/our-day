import React from 'react';
import { Calendar, Heart, Sparkles } from 'lucide-react';
import { timelineEvents } from '../data/timeline';

export const Timeline = () => {
  return (
    <section id="timeline" style={{
      padding: '80px 20px',
      position: 'relative',
      background: 'linear-gradient(180deg, rgba(235, 244, 252, 0.4) 0%, rgba(212, 236, 255, 0.3) 100%)'
    }}>
      <div className="container-narrow">
        {/* Section Header */}
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
            <Sparkles size={13} color="var(--color-primary)" />
            Memories We Built Together
          </span>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
            fontWeight: '800',
            color: 'var(--color-text-navy)',
            lineHeight: 1.2
          }}>
            Namma Story • Relationship Timeline 🩵
          </h2>
          <p style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: 'clamp(1.15rem, 3.8vw, 1.4rem)',
            color: 'var(--color-text-charcoal)',
            marginTop: '8px'
          }}>
            School corridors la start aagi... innaiku namma 3rd anniversary varaikkum!
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div style={{
          position: 'relative',
          maxWidth: '780px',
          margin: '0 auto',
          paddingLeft: '24px',
          paddingRight: '10px'
        }}>
          {/* Vertical Connecting Line */}
          <div style={{
            position: 'absolute',
            top: '20px',
            bottom: '20px',
            left: '12px',
            width: '3px',
            background: 'linear-gradient(180deg, var(--color-primary) 0%, var(--color-secondary) 50%, var(--color-primary-dark) 100%)',
            borderRadius: '2px'
          }} />

          {/* Timeline Nodes */}
          {timelineEvents.map((event) => (
            <div
              key={event.id}
              style={{
                position: 'relative',
                marginBottom: '36px',
                paddingLeft: '26px'
              }}
            >
              {/* Timeline Marker Dot */}
              <div style={{
                position: 'absolute',
                top: '12px',
                left: '-19px',
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: '#FFFFFF',
                border: '2.5px solid var(--color-primary)',
                boxShadow: '0 0 10px rgba(91, 168, 232, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '13px',
                zIndex: 2
              }}>
                <Heart size={13} fill="var(--color-primary)" color="var(--color-primary)" />
              </div>

              {/* Scrapbook Memory Card */}
              <div className="scrapbook-card" style={{ padding: '20px 22px' }}>
                {/* Washi tape on first card */}
                {event.order === 1 && <div className="washi-tape" style={{ width: '70px', height: '18px', top: '-9px' }} />}

                {/* Top Badge & Date */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '10px'
                }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '4px 10px',
                    background: 'var(--color-secondary-soft)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '11px',
                    fontWeight: '700',
                    color: 'var(--color-primary-dark)'
                  }}>
                    <span>{event.emoji}</span>
                    <span>{event.badge}</span>
                  </span>

                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: 'var(--color-text-muted)'
                  }}>
                    <Calendar size={12} color="var(--color-primary)" />
                    {event.dateText}
                  </span>
                </div>

                {/* Event Title */}
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.15rem, 3.5vw, 1.4rem)',
                  fontWeight: '700',
                  color: 'var(--color-text-navy)',
                  marginBottom: '8px'
                }}>
                  {event.title}
                </h3>

                {/* Tanglish Caption */}
                <p style={{
                  fontSize: '14px',
                  color: 'var(--color-text-charcoal)',
                  lineHeight: '1.6',
                  fontFamily: 'var(--font-main)'
                }}>
                  {event.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

