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
          50: '#FCFAF6',
          100: '#F9F6F0',
          200: '#F2EDE3',
          300: '#E6DDD1',
          400: '#D5C7B6',
        },
        sage: {
          50: '#F4F6F4',
          100: '#E5ECE6',
          200: '#C9D7CB',
          300: '#A1B9A4',
          500: '#4F6653',
          600: '#415444',
          700: '#324135',
          800: '#242F26',
        },
        slateGreen: {
          800: '#25352B',
          900: '#1B2720',
          950: '#121A15',
        },
        charcoal: {
          600: '#5A625C',
          700: '#3D433E',
          800: '#2B302C',
          900: '#1D211E',
        },
        terracotta: {
          400: '#D0765D',
          500: '#B86249',
          600: '#9E4E38',
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', '"Newsreader"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        paper: '0 1px 3px rgba(35, 38, 35, 0.05), 0 10px 25px -5px rgba(35, 38, 35, 0.04)',
        handcrafted: '0 4px 20px -2px rgba(35, 38, 35, 0.07)',
      },
    },
  },
  plugins: [],
};
