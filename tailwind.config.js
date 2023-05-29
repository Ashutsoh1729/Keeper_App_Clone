
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      keeper: '#5f6368',
      slate: "rgb(203 213 225)",
      search_bar: "#f1f3f4",
      white: "#ffffff",
      menu_bg: "rgba(0,0,0,.05)",
   
      black: "#000000"
    }, fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      keeper: ["Product Sans","Arial",'sans-serif']
    }, 
   
    extend: {
      boxShadow: {
        'new': 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;',
      }
    },
  },

  plugins: [],
}