/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/public/images/fa200a51dd39bba5c9b04dfc6f24e940.jpg')",
      },
    },
  },
  plugins: [],
}
