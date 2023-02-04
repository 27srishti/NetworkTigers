/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",'./src/**/*.{html,js}', './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js' , "./node_modules/flowbite/**/*.js"
],
 
  
  theme: {
    extend: {},
  },
  plugins: [require('tw-elements/dist/plugin', '@tailwindcss/aspect-ratio'),('flowbite/plugin'),('@tailwindcss/forms')],
}
