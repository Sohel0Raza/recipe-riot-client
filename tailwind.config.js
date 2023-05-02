/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    mytheme: {
          
      "primary": "#1524c6",
               
      "secondary": "#ffeecc",
               
      "accent": "#ecfccb",
               
      "neutral": "#1D1D2B",
               
      "base-100": "#ffff",
               
      "info": "#4591D3",
               
      "success": "#156033",
               
      "warning": "#E88C30",
               
      "error": "#F6544C",
               },
  },
  plugins: [require("daisyui")],

}

