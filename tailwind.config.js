/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        'screen-1080': '1080px',
      },
      boxShadow: {
        popup: '0 10px 20px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        'nebula-100': '#FFF2FF',
        'nebula-200': '#FABBFE',
        'nebula-300': '#EA81F8',
        'nebula-400': '#CA46E6',
        'nebula-500': '#9B12C4',
        'nebula-600': '#71069D',
        'nebula-700': '#4D0175',
        'nebula-800': '#2E004E',
        'nebula-900': '#140026',
        'nebula-primary': '#9B12C4',
        'nebula-success': '#4EFA9F',
        'nebula-error': '#FF4E74',
        'nebula-notification': '#FFE66D',
        'nebula-success-dark': '#2BB97D',
        'nebula-error-dark': '#D83658',
        'nebula-notification-dark': '#D4C359',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animated'), require('tailwindcss-animate')],
};
