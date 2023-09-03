/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    '.**/*.html',
  ], theme: {
    screens: {
      'sm': { 'max': '360px' },
      'md': { 'max': '600px' },
      'lg': { 'max': '980px' },
    },
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'black-700': '#222222',
        'gray-75': '#F7F7F7',
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
        '1.25': '1 1 200px',
        '1.3': '1 1 240px',
        '1.4': '1 1 300px',
        '2': '2 1 300px',
        '2.1': '2 1 260px',
        '3': '3 1 200px',
      },
    },
  },
  plugins: [],
}

