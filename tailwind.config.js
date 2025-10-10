/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  important: false,
  corePlugins: {
    preflight: true,
  },
  theme: {
    extend: {
      colors: {
        primary: '#a03478',
        secondary: '#00b7ff',
        accent: '#F76a00',
        dark: '#181818',
        white: '#ffffff',
      },
      backgroundImage: {
        'logo-gradient': 'linear-gradient(45deg, #00b7ff 0%, #a03478 50%, #F76a00 100%)',
        'logo-gradient-hover': 'linear-gradient(45deg, #0099e6 0%, #8a2a66 50%, #e55a00 100%)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontWeight: {
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: '0.8',
          },
        },
      },
    },
  },
  plugins: [],
}