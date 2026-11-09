/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#090510',
          DEFAULT: '#10091C',
          light: '#180E2B',
        },
        violet: {
          deep: '#241331',
          rich: '#321A44',
          glow: '#4A2366',
        },
        rose: {
          romantic: '#F2A7C6',
          blush: '#F8C8DC',
          deep: '#D15886',
        },
        lavender: {
          soft: '#DBC5F7',
          DEFAULT: '#C7A5F5',
          deep: '#9B6CD8',
        },
        gold: {
          champagne: '#E8C58A',
          warm: '#F5DCAC',
          shimmer: '#FFE8BD',
        },
        softwhite: {
          DEFAULT: '#FFF7FC',
          muted: '#E6D7E3',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(242, 167, 198, 0.4))' },
          '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 35px rgba(232, 197, 138, 0.7))' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      boxShadow: {
        'glass-sm': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glass': '0 8px 32px 0 rgba(16, 9, 28, 0.37)',
        'glass-glow': '0 8px 32px 0 rgba(199, 165, 245, 0.15)',
        'gold-glow': '0 0 30px rgba(232, 197, 138, 0.3)',
        'rose-glow': '0 0 35px rgba(242, 167, 198, 0.35)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}

