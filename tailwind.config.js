/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      xs: '320px',
      xs1: '375px',
      xs2: '400px',
      xs4: '425px',
      xs3: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1140px',
    },
  },
  plugins: [],
}
