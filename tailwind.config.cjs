/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#FAF9F7',          // Fondo claro cálido
        baseAlt: '#F1EFEA',       // Variante suave
        ink: '#1F2933',           // Texto principal
        inkSoft: '#4B5563',       // Texto secundario
        accent: '#0D9488',        // Verde/teal calmado principal
        accentAlt: '#6366F1',     // Toque secundario (lila suave)
        accentSoft: '#D9F3F0',    // Fondo suavizado para bloques
        line: '#E5E7EB'
      },
      fontFamily: {
        sans: ['Inter','system-ui','sans-serif'],
        display: ['Crimson Text','serif']
      },
      boxShadow: {
        card: '0 2px 4px -1px rgba(0,0,0,0.05), 0 8px 16px -4px rgba(15,23,42,0.08)'
      }
    }
  },
  plugins: [],
};
