/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main': "linear-gradient(to bottom, rgba(20,20,20,20.9), rgba(20,20,20,0.6), rgba(20,20,20,0.6), rgba(20,20,20,0.9), rgba(20,20,20,0.9)), url('./images/main-background-min.png')",
        'gradient': "linear-gradient(to bottom left, rgba(40,15,15,1), rgba(30,15,15,1), rgba(30,15,15,1), rgba(20,15,15,1), rgba(20,15,15,1), rgba(15,15,15,1), rgba(15,15,15,1), rgba(15,15,15,1), rgba(15,15,15,1), rgba(15,15,15,1), rgba(15,15,15,1), rgba(15,15,15,1))",
     },
     borderImage: {
        'gradient': "linear-gradient(#E50000, #141414)"
     }
    },
  },
  plugins: [],
}

