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
        'gray-550': '#7C7C7C',
        
      },
      spacing: {
        '10px': '10px',
        '15px': '15px',
        '20px': '20px',
        '60px': '60px',
      },
      flex: {
        '1.1': '1 1 160px',
        '2': '2 1 300px',
      },
    },
  },
  plugins: [],
}

