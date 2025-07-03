/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px #fff' },
          '50%': { boxShadow: '0 0 15px #0ff' },
        },
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite',
      },
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
        'nebula-success': '#88FFCC',
        'nebula-error': '#FF4E8E',
        'nebula-notification': '#FFE8A3',
        'nebula-success-dark': '#4ED9A4',
        'nebula-error-dark': '#D8366E',
        'nebula-notification-dark': '#E6B877',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animated'), require('tailwindcss-animate')],
};
