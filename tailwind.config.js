/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      'ibm-plex-serif': ['IBM Plex Serif', 'serif'],
      'ibm-plex-sans': ['IBM Plex Sans', 'sans-serif']
    },
    extend: {
      colors: {
        'didomi-dark-blue': '#254051',
        'didomi-light-blue': '#e2f1f8',
        'didomi-gray': '#607884'
      }
    }
  },
  plugins: []
};
