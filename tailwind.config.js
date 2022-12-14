/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'eton-blue': '#8DCCA5',
      },
      backgroundColor: {
        'eton-blue': '#8DCCA5',
        'anti-flash-white': '#EEF5F7',
      }
    },
  },
  plugins: [],
}
