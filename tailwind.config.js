/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'my-color': {
          DEFAULT: '#ff0000',
          'dark-gray': '#1D2024',
          'custom-orange': '#f37515',
          'pale-gray': '#1f2226',
          'hover-gray': '#414043',
        }
      },
      width: {
        '80%': '80%',
        '70%': '70%',
        '25%': '25%',
        '60%': '60%',
        '50%': '50%',
        '40%': '40%',
        '30%': '30%',
      },
      screens: {
        "sm": "480px",
        "2xl": "1370px",
        "xl": "1150px"
      },
      maxWidth: {
        "8xl": "1500px"
      },
      keyframes: {
        'spin': {
          '0%': { transform: 'rotate(2deg)' },
          '50%': { transform: 'rotate(-2deg)' },
          '100%': { transform: 'rotate(2deg)' },
        },
      },
    },
    
  },
  plugins: [],
}

