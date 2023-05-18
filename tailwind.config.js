/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  //   colors: {
  //   'bg-color-p': '#1f1f38',
  //   'bg-variant-s': '#2c2c6c',
  //   'primary-bg': '#4db5ff',
  //   // 'primary-variant': rgba(77, 181, 255, 0.4),
    

  //   // 'color-light': rgba(255, 255, 255, 0.6)
  
  // },
    extend: {},
    
  },
  plugins: [require("daisyui")],
}

