module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brand-dark': '#262626',
        'brand-pink': '#FF528C',
        'brand-gray': '#EEEEEE',
        'brand-text': '#7D7D7D'
      },
      fontFamily: {
        'display': ['Spartan'],
        'body': ['Comfortaa']
      },
      margin: {
        '-100': '-100%'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
