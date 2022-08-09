/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggling: 'pulse 1.15s infinite',
        wiggle: 'pulse 1.2s infinite',
        wiggled: 'pulse 1.25s infinite',
      }
    },
  },
  plugins: [],
}
