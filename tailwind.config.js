/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        blue: '#512FEB',
        primaryText: '#ffffff',
        secondaryText: 'rgba(255, 255, 255, 0.7)',
        cardBg: 'rgba(255, 255, 255, 0.06)',
        navbarBg: 'rgba(0, 0, 0, 0.5)',
        border:'rgba(255, 255, 255, 0.1)',
        ui:'rgba(255, 255, 255, 0.2)',
        badge:'#0d0d0d',
        dark:'#313131',
      },
      fontSize: {
        h1: ['35px', { lineHeight: '56px', fontWeight: '500' }],
        h2: ['28px', { lineHeight: '48px', fontWeight: '500' }],
        h3: ['26px', { lineHeight: '40px', fontWeight: '500' }],
        'h1-lg': ['60px', { lineHeight: '66px', fontWeight: '500' }],
        'h2-lg': ['50px', { lineHeight: '60px', fontWeight: '500' }],
        'h3-lg': ['40px', { lineHeight: '56px', fontWeight: '500' }],
        bodyM: ['18px', { lineHeight: '27px', fontWeight: '400' }],
        bodyS: ['16px', { lineHeight: '19px', fontWeight: '300' }],
        cardTitle: ['22px', { lineHeight: '26px', fontWeight: '500' }],
        cardContent: ['16px', { lineHeight: '22px', fontWeight: '400' }],
        bodyXS: ['14px', { lineHeight: '17px', fontWeight: '400' }],
        bodyXXS: ['12px', { lineHeight: '14px', fontWeight: '400' }],
        bodyXXXS: ['10px', { lineHeight: '12px', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
}