/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        planarViolet:'#925FF0',
        planarOrange:'#DDA15E',
        planarGreen:'#A3FDA1',
        planarWhite:'#F1FAEE',
        planarDark:'#101720'
      }
    },
  },
  plugins: [],
}