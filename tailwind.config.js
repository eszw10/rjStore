/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    './src/**/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter':['Inter', 'sans-serif'],
        'poppins':['Poppins', 'sans-serif']
      },
      colors: {
        'primary' : '#1F4644'
      }
    },
  },
  plugins: [],
}

