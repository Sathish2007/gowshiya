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
          950: '#040308',
          900: '#090712',
          850: '#0d0a1b',
          800: '#130e24',
          700: '#1b1435',
          600: '#261c47',
        },
        rose: {
          450: '#f6526e',
          550: '#e11d48',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Outfit"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cursive: ['"Dancing Script"', '"Great Vibes"', 'cursive'],
        script: ['"Great Vibes"', 'cursive'],
        tamil: ['"Noto Sans Tamil"', 'sans-serif'],
      },
      boxShadow: {
        'glow-rose': '0 0 25px -3px rgba(244, 63, 94, 0.45)',
        'glow-rose-lg': '0 0 45px -5px rgba(244, 63, 94, 0.55)',
        'glow-purple': '0 0 30px -3px rgba(168, 85, 247, 0.4)',
        'glow-gold': '0 0 25px -3px rgba(245, 158, 11, 0.35)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.45), inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
        'glass-button': '0 8px 24px rgba(244, 63, 94, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.25)',
      },
      animation: {
        'float': 'floating 6s ease-in-out infinite',
        'float-slow': 'floating 10s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.04)', opacity: '0.92' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 10px rgba(244,63,94,0.4))' },
          '100%': { filter: 'drop-shadow(0 0 25px rgba(244,63,94,0.8))' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
