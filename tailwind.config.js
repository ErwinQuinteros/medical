/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#14457B',      // azul principal
        lightBlue: '#2490EB',    // azul claro
        textGray: '#666666',     // gris para texto
        background: '#F9FAFB',   // fondo general
      },
    },
  },
  plugins: [],
}