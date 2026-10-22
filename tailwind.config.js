/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F50057',
        accent: '#FF6F61',
        dark: '#111827',
        soft: '#F8FAFC',
        muted: '#64748B'
      },
      boxShadow: {
        soft: '0 14px 40px rgba(15, 23, 42, 0.08)',
        strong: '0 24px 60px rgba(15, 23, 42, 0.12)'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};
