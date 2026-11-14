import React, { useState, useEffect } from 'react';
import { Heart, Clock, Sparkles, Calendar } from 'lucide-react';
import { siteConfig } from '../data/config';

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const targetTime = new Date(siteConfig.anniversaryTargetDate).getTime();
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isCompleted: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isCompleted: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="countdown" style={{
      padding: '70px 20px',
      position: 'relative',
      background: 'linear-gradient(180deg, rgba(212, 236, 255, 0.4) 0%, rgba(235, 244, 252, 0.6) 100%)',
      textAlign: 'center'
    }}>
      <div className="container-narrow" style={{ maxWidth: '640px', margin: '0 auto' }}>
        {/* Badge */}
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
          <Clock size={13} color="var(--color-primary)" />
          November 14, 2026 • 10:37 PM
        </span>

        {/* Heading */}
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
          fontWeight: '800',
          color: 'var(--color-text-navy)',
          lineHeight: 1.2
        }}>
          3 Years of Togetherness 🩵
        </h2>

        <p style={{
          fontFamily: 'var(--font-handwritten)',
          fontSize: 'clamp(1.15rem, 3.8vw, 1.4rem)',
          color: 'var(--color-text-charcoal)',
          marginTop: '6px',
          marginBottom: '28px'
        }}>
          Nov 14, 2023 - 10:37 PM la start aana namma kadhai... innayoda 3 full years!
        </p>

        {/* Live Countdown Cards Grid */}
        {!timeLeft.isCompleted ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '12px',
            marginBottom: '24px'
          }}>
            {[
              { label: 'Days', val: timeLeft.days },
              { label: 'Hours', val: timeLeft.hours },
              { label: 'Mins', val: timeLeft.minutes },
              { label: 'Secs', val: timeLeft.seconds },
            ].map((unit, idx) => (
              <div
                key={idx}
                className="scrapbook-card"
                style={{
                  padding: '16px 8px',
                  textAlign: 'center',
                  background: '#FFFFFF'
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.6rem, 5vw, 2.3rem)',
                  fontWeight: '800',
                  color: 'var(--color-primary-dark)',
                  lineHeight: 1
                }}>
                  {String(unit.val).padStart(2, '0')}
                </div>
                <div style={{
                  fontSize: '11px',
                  fontWeight: '700',
                  color: 'var(--color-text-muted)',
                  textTransform: 'uppercase',
                  marginTop: '6px',
                  letterSpacing: '0.5px'
                }}>
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            padding: '24px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-cream)',
            border: '2px solid var(--color-primary)',
            boxShadow: 'var(--shadow-md)',
            marginBottom: '20px'
          }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: '800', color: 'var(--color-primary-dark)' }}>
              Happy 3rd Love Anniversary Dii Sakkaraiii! 🩵🎉
            </h3>
            <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.25rem', color: 'var(--color-text-navy)', marginTop: '8px' }}>
              "1,096 days of loving you and counting! Innum aayiram varusham un koodave dhaan iruppen!"
            </p>
          </div>
        )}

        {/* Milestone Note */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 20px',
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: 'var(--radius-full)',
          fontSize: '12px',
          fontWeight: '600',
          color: 'var(--color-primary-dark)',
          border: '1px solid var(--border-color)'
        }}>
          <Heart size={14} fill="var(--color-primary)" color="var(--color-primary)" />
          <span>Official Time: Nov 14, 2023 at 10:37 PM (Asia/Kolkata)</span>
        </div>
      </div>
    </section>
  );
};
