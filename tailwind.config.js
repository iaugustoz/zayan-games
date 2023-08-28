/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    '.**/*.html',
  ],  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'black-700': '#222222',
        'blue-750': '#122ab2',
        'blue-550': '#2C70FF',
        
      },
      spacing: {
        '10px': '10px',
        '15px': '15px',
      }
    },
  },
  plugins: [],
}

