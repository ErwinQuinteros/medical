/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#14457B',
        lightBlue: '#2490EB',
        textGray: '#666666',
        background: '#F9FAFB',
      },
    },
  },
  plugins: [],
};