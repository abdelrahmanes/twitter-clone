module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1d9bf0',
        primary_hover: '#1a8cd8',
        secondary_hover: '#0f14191a',
        retweet: '#00ba7c',
        like: '#f91881',
      },
      maxWidth: {
        12: '12rem',
        '5/6': '83.33333%',
      },
      borderWidth: {
        5: '5px',
      },
    },
  },
  plugins: [],
}
