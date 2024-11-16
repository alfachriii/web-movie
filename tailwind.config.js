/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      xs: '0.4rem',
      sm: '0.5rem',
      base: '0.7rem',
      xl: '0.8rem',
      '2xl': '1rem',
      '3xl': '1.2rem',
      '4xl': '1.5rem',
      '5': '5rem',
    }
  },
  plugins: [],
}

