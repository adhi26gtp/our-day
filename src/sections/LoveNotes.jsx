import React, { useState } from 'react';
import { Heart, Sparkles, HelpCircle } from 'lucide-react';
import { loveNotes } from '../data/loveNotes';

export const LoveNotes = () => {
  const [revealedIds, setRevealedIds] = useState([]);

  const toggleReveal = (id) => {
    if (revealedIds.includes(id)) {
      setRevealedIds(revealedIds.filter((item) => item !== id));
    } else {
      setRevealedIds([...revealedIds, id]);
    }
  };

  return (
    <section id="love-notes" style={{
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
            <Sparkles size={13} color="var(--color-primary)" />
            Click / Tap Each Note
          </span>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
            fontWeight: '800',
            color: 'var(--color-text-navy)',
            lineHeight: 1.2
          }}>
            Reasons Why I Love You 🩵
          </h2>
          <p style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: 'clamp(1.15rem, 3.8vw, 1.4rem)',
            color: 'var(--color-text-charcoal)',
            marginTop: '8px'
          }}>
            Keezha irukura card ah tap panni en manasula irukura secret ah paaru dii!
          </p>
        </div>

        {/* Love Notes Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '20px'
        }}>
          {loveNotes.map((note) => {
            const isRevealed = revealedIds.includes(note.id);
            return (
              <div
                key={note.id}
                onClick={() => toggleReveal(note.id)}
                className="scrapbook-card"
                style={{
                  minHeight: '170px',
                  padding: '20px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: isRevealed ? 'var(--color-cream)' : 'var(--color-bg-card)',
                  border: isRevealed ? '2px solid var(--color-primary)' : '1.5px solid var(--border-color)',
                  transition: 'all 0.35s ease',
                  position: 'relative'
                }}
              >
                {/* Tag & Emoji */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    color: 'var(--color-primary-dark)',
                    textTransform: 'uppercase'
                  }}>
                    {note.tag}
                  </span>
                  <span style={{ fontSize: '20px' }}>
                    {isRevealed ? "🩵" : note.frontEmoji}
                  </span>
                </div>

                {/* Content */}
                <div style={{ margin: '14px 0', textAlign: 'center' }}>
                  {!isRevealed ? (
                    <div>
                      <h4 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        color: 'var(--color-text-navy)',
                        marginBottom: '6px'
                      }}>
                        {note.frontText}
                      </h4>
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '12px',
                        color: 'var(--color-primary-dark)',
                        fontWeight: '600'
                      }}>
                        <HelpCircle size={12} /> Tap to read 🩵
                      </span>
                    </div>
                  ) : (
                    <p style={{
                      fontFamily: 'var(--font-handwritten)',
                      fontSize: '1.15rem',
                      color: 'var(--color-text-navy)',
                      lineHeight: '1.45',
                      fontWeight: '600'
                    }}>
                      "{note.revealText}"
                    </p>
                  )}
                </div>

                {/* Hint Footer */}
                <div style={{ textAlign: 'right', fontSize: '10px', color: 'var(--color-text-muted)' }}>
                  {isRevealed ? "Tap to close" : "Secret note inside"}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
