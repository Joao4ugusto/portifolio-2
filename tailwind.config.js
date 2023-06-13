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
        "color-gray": "#3B3B3B",
        "color-black": "#000000",
        "color-black-sidebar": "#050505",
        "roxo": "#B89DFA",
      }
    },
    screens: {
      'sm': '540px',
      'md': '768px',
      "sy": "912px",
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'mobile': '480px', 
    },
  plugins: [],
}
}
