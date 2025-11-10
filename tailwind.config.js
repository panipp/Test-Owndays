/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'noto-sans-jp': ['Noto Sans JP', 'sans-serif'],
        'mizolet': ['mizolet', 'sans-serif'],
        'yu-gothic': ['yu-gothic-pr6n', 'sans-serif'],
        'proxima-nova': ['proxima-nova', 'sans-serif'],
      },
      colors: {
        'owndays-red': '#B8181E',
        'owndays-yellow': '#F2DC00',
        'owndays-dark-green': '#005D31',
        'owndays-brown-1': '#604C3F',
        'owndays-brown-2': '#B58741',
        'owndays-brown-3': '#C79F62',
        'owndays-brown-4': '#D4B688',
        'owndays-green-1': '#468A59',
        'owndays-green-2': '#58AB6F',
        'owndays-green-3': '#7ABC8C',
        'owndays-green': '#A8D5BA', // Light green for sections
        'owndays-brown': '#D4C4B0', // Light brown for sections
        'owndays-favorite-green': '#22C55E', // Green for favorited items
      },
      textStroke: {
        '2-black': '2px black',
      },
    },
  },
  plugins: [],
}

