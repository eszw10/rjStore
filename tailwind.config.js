/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    './src/**/*.html',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter':['Inter', 'sans-serif'],
        'poppins':['Poppins', 'sans-serif']
      },
      colors: {
        'primary' : '#1F4644',
        'secondary' : '#252F45',
        'dark': '#111827'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

