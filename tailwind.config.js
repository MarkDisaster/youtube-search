module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['"Roboto","Arial",sans-serif'],
      'mono': ['"Oswald", sans- serif']
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')
  ],
}