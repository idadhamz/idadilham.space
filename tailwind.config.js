module.exports = {
  // purge: [],
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans' : ['Montserrat', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [],
}
