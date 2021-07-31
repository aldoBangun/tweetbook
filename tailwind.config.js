module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          md: '540px',
          lg: '680px',
          xl: '800px'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
