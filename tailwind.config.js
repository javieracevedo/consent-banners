/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      'didomi-blue': '#254051',
      'didomi-light-blue': '#1d4153'
    },
    fontFamily: {
      'ibm-plex-serif': ['IBM Plex Serif', 'serif'],
      'ibm-plex-sans': ['IBM Plex Sans', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
};
