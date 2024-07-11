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
    extend: {
      colors: {
        bg: '#151c2c',
        bgSoft: '#182237',
        text: 'white',
        btnBg: '#5d57c9',
        textSoft: '#b7bac1',
        hoverSoft: '#2e374a',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}