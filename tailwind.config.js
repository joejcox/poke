module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      container: {
        padding: '2rem',
        screens: {
          '2xl': '1350px',
        },
      },
    },
  },
  plugins: [],
}
