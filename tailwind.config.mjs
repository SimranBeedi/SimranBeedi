import { Outfit, Ovo } from 'next/font/google'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#fcf4ff',  // Corrected the color format
        darkHover: '#2a004a',   // Corrected the color format
        darkTheme: '#11001F',   // Corrected the color format
      },
      fontFamily: {
        Outfit: ['Outfit', 'sans-serif'], // Corrected the font family format
        Ovo: ['Ovo', 'serif'],           // Corrected the font family format
      }
    },
  },
  darkMode:'selector',
  plugins: [],
};
