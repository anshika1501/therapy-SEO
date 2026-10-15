/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linen: {
          50: '#FDFBF7',
          100: '#FBF9F5',
          200: '#F5F1E8',
          300: '#EAE3D5',
          400: '#DFD5C2',
        },
        sage: {
          50: '#F3F6F4',
          100: '#E4EDE6',
          200: '#C9DBCB',
          300: '#A4C0A7',
          500: '#5F7161',
          600: '#4D5E4F',
          700: '#3D4B3E',
          800: '#2F3A30',
        },
        slateGreen: {
          800: '#2D4039',
          900: '#1F2D28',
          950: '#141E1A',
        },
        charcoal: {
          700: '#3D4440',
          800: '#2C322E',
          900: '#242926',
        },
        terracotta: {
          400: '#D98973',
          500: '#C97A63',
          600: '#B0634E',
        },
        sand: '#E8DFD8',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(45, 64, 57, 0.06), 0 2px 6px -1px rgba(45, 64, 57, 0.04)',
        elevated: '0 12px 30px -4px rgba(45, 64, 57, 0.1), 0 4px 10px -2px rgba(45, 64, 57, 0.05)',
      },
    },
  },
  plugins: [],
};
