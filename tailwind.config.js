/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        slide: 'slide 10s infinite'
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX( calc(-100% - 100px) )' },
          '50%': { transform: 'translateX( calc(-200% - 200px) )' },
          '100%': { transform: 'translateX( calc(-300% - 300px) )' }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}