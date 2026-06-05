/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Primary accent — caramel/golden (#D4A373 base)
        golden: {
          50:  '#FDF9F0',
          100: '#FAF0DC',
          200: '#F0D9B5',
          300: '#E8C49A',
          400: '#DCB37F',
          500: '#D4A373',
          600: '#C08B5A',
          700: '#A47344',
          800: '#885D34',
          900: '#6C4826',
          950: '#3D2810',
        },
        // Secondary accent — sage green (#CCD5AE base)
        sage: {
          50:  '#F5F7ED',
          100: '#E9EDC9',
          200: '#D8DFAF',
          300: '#CCD5AE',
          400: '#B6C490',
          500: '#9EB375',
          600: '#84985D',
          700: '#6A7B4B',
          800: '#526138',
          900: '#3C4828',
          950: '#262E18',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
