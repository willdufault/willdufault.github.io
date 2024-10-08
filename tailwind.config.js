import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{jsx,tsx}",
    "./src/components/sections/**/*.{jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}