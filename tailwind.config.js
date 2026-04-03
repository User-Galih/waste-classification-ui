/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // PENAMBAHAN: Mendaftarkan Plus Jakarta Sans sebagai font sans default
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        'primary': '#10B981', // Emerald-500
        'primary-dark': '#059669', // Emerald-600
        'secondary': '#F0FDF4', // Emerald-50
        'dark-slate': '#0F172A', // Slate-900
        'light-slate': '#F1F5F9', // Slate-100
        'brand-light-green': '#ECFDF5', // custom, lebih terang dari secondary
        'brand-green': '#D1FAE5',    // custom
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideShow: {
          '0%, 100%': { transform: 'translateX(0%)' },
          '33%': { transform: 'translateX(-100%)' },
          '66%': { transform: 'translateX(-200%)' }, 
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: { 
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.7s ease-out forwards',
        slideShow: 'slideShow 24s infinite ease-in-out',
        marquee: 'marquee 60s linear infinite',
        marquee2: 'marquee2 60s linear infinite',
      },
    },
  },
  plugins: [],
}
