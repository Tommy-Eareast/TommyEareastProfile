module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#001F3F',
        accent: '#007BFF',
        background: '#FFFFFF',
        text: '#333333',
        white: '#FFFFFF',
        gradientStart: '#6a11cb',
        gradientEnd: '#2575fc',
      },
      fontFamily: {
        primary: ['Roboto', 'sans-serif'],
        secondary: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};