import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Namma Story', href: '#story' },
    { label: 'Memories', href: '#gallery' },
    { label: 'Moments', href: '#moments' },
    { label: 'Love Notes', href: '#notes' },
    { label: 'Cute Game', href: '#puzzle' },
    { label: 'Cake & Wish', href: '#birthday' },
    { label: 'Love Letter', href: '#letter' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: '12px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 24px)',
        maxWidth: '1100px',
        zIndex: 50,
        transition: 'all 0.3s ease',
      }}
    >
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 20px',
          background: scrolled
            ? 'rgba(255, 255, 255, 0.92)'
            : 'rgba(255, 255, 255, 0.78)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(144, 205, 244, 0.45)',
          borderRadius: '24px',
          boxShadow: scrolled
            ? '0 10px 30px rgba(56, 178, 226, 0.16)'
            : '0 4px 18px rgba(56, 178, 226, 0.08)',
        }}
      >
        {/* Brand */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            color: 'var(--text-main)',
            fontWeight: 800,
            fontSize: '1.1rem',
          }}
        >
          <span style={{ fontSize: '1.25rem' }}>🩵</span>
          <span style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.5rem', color: 'var(--blue-deep)' }}>
            Swetha & Adhi
          </span>
          <span
            style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              padding: '2px 8px',
              borderRadius: '999px',
              background: 'var(--blue-pale)',
              color: 'var(--blue-deep)',
              border: '1px solid var(--blue-soft)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            3 Years
          </span>
        </a>

        {/* Desktop Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{
                textDecoration: 'none',
                color: 'var(--text-muted)',
                fontWeight: 600,
                fontSize: '0.86rem',
                padding: '6px 12px',
                borderRadius: '12px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--blue-deep)';
                e.currentTarget.style.background = 'var(--blue-pale)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-menu-btn"
          aria-label="Toggle navigation menu"
          style={{
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            border: '1px solid var(--blue-soft)',
            background: 'var(--blue-pale)',
            color: 'var(--blue-deep)',
            cursor: 'pointer',
          }}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          style={{
            marginTop: '8px',
            padding: '16px',
            background: 'rgba(255, 255, 255, 0.96)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '20px',
            border: '1px solid rgba(144, 205, 244, 0.45)',
            boxShadow: '0 16px 36px rgba(56, 178, 226, 0.18)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            animation: 'fadeIn 0.25s ease',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{
                textDecoration: 'none',
                color: 'var(--text-main)',
                fontWeight: 700,
                fontSize: '0.98rem',
                padding: '10px 14px',
                borderRadius: '12px',
                background: 'var(--blue-pale)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span>{link.label}</span>
              <Sparkles size={16} color="var(--blue-mid)" />
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}

