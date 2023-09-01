/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    '.**/*.html',
  ],  theme: {
    screens: {
      'lg': {'max': '800px'},
    },
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'black-700': '#222222',
        'blue-750': '#122ab2',
        'blue-550': '#2C70FF',
        'blue-350': '#66D9EB',
        'pink-650': '#F9265E',
        'purple-450': '#AE81FF',
        'gary-75': '#F7F7F7',
        'gray-450': '#A4A4A4',
        'gray-550': '#7C7C7C',
        
      },
      spacing: {
        '6px': '6px',
        '10px': '10px',
        '15px': '15px',
        '20px': '20px',
        '60px': '60px',
      },
      flex: {
        '1.1': '1 1 160px',
        '1.2': '1 1 175px',
        '1.3': '1 1 260px',
        '1.4': '1 1 300px',
        '2': '2 1 300px',
      },
    },
  },
  plugins: [],
}

