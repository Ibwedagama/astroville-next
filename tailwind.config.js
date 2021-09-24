module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brand-dark': '#262626',
        'brand-pink': '#FF528C',
        'brand-gray': '#EEEEEE',
      },
      fontFamily: {
        'display': ['Spartan'],
        'body': ['Comfortaa']
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
