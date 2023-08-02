/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1433px',
      },
      colors:{
        primary: '#262626',
        secondary: '#05297F',
        info : "#FC9D9D",
        secondaryTextColor: '#666'
      },
      fontFamily: {
        'hind': ['Hind'],
      },
    },
  },
  plugins: [],
}
