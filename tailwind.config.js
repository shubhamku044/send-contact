/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#2D81FF',
        'gray-medium': '#13171E',
        'gray-dark': '#020A0A',
        'gray-light': '#B2B2B2',
      }
    },
  },
  plugins: [],
};
