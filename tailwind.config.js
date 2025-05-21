/** @type {import('tailwindcss').Config} */
const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');
const aspectRatio = require('@tailwindcss/aspect-ratio');
const containerQueries = require('@tailwindcss/container-queries');
const scrollbarHide = require('tailwind-scrollbar-hide');
const animate = require('tailwindcss-animate');
const debugScreens = require('tailwindcss-debug-screens');
const flip = require('tailwindcss-flip');

module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  safelist: [
    'text-primary',
    'text-secondary',
    'text-accent',
    'text-success',
    'text-warning',
    'text-danger',
    'bg-primary',
    'bg-accent',
    'hover:shadow-lg',
    'hover:-translate-y-1',
    'transition',
    'duration-300',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        secondary: "#181E41",
        accent: "#574AE2",
        success: "#2F9C95",
        warning: "#F2CD5D",
        danger: "#FF1053",
        light: "#f9f9f9",
        graybg: "#f4f4f4",
      },
      animation: {
        gradient: "gradient 7s ease infinite",
        fade: "fade 0.6s ease-out forwards",
        slideup: "slideup 0.5s ease-out forwards"
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            backgroundSize: "400% 400%",
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundSize: "200% 200%",
            backgroundPosition: "100% 50%",
          },
        },
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        slideup: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      screens: {
        xs: "480px",
      },
      spacing: {
        'section': '2.5rem',
      },
    },
  },
  corePlugins: {
    direction: false,
  },
  plugins: [
    forms,
    typography,
    aspectRatio,
    containerQueries,
    scrollbarHide,
    animate,
    debugScreens,
    flip,
  ],
};