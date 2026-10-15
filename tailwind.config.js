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
          50: '#FCFBF9',
          100: '#FAF8F5',
          200: '#F2EDE4',
          300: '#E5DDCF',
          400: '#D5C9B7',
        },
        sage: {
          50: '#F4F6F4',
          100: '#E5ECE6',
          200: '#CAD7CC',
          300: '#A4BCAB',
          500: '#526956',
          600: '#435647',
          700: '#344337',
          800: '#263229',
        },
        slateGreen: {
          800: '#22362C',
          900: '#182720',
          950: '#0F1A15',
        },
        charcoal: {
          600: '#59635C',
          700: '#3D4540',
          800: '#292F2B',
          900: '#1C211E',
        },
        terracotta: {
          400: '#D47E66',
          500: '#BE6951',
          600: '#A3533D',
        },
        warmStone: '#EFEAE2',
      },
      fontFamily: {
        serif: ['"Newsreader"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.035em',
        editorial: '-0.02em',
        widestLuxe: '0.18em',
      },
      boxShadow: {
        subtle: '0 2px 10px rgba(28, 33, 30, 0.04)',
        editorial: '0 16px 36px -8px rgba(28, 33, 30, 0.07)',
      },
    },
  },
  plugins: [],
};
