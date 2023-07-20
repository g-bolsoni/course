/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        blue: "#021D49",
        gray: "#D2DFF2",
        yellow: "#F9BE47",
        black: "#000",
        white: "#fff"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
