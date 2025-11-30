/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      colors: {
        "anime-pink": "#f472b6",
        "anime-cyan": "#22d3ee",
        "anime-purple": "#a855f7",
      },
      boxShadow: {
        "anime-glow": "0 0 40px rgba(129, 140, 248, 0.6)",
      },
    },
  },
  plugins: [],
};
