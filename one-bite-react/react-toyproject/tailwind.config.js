/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx,mdx}', './**/@material-tailwind/**/*.{html,js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
    fontFamily: {
      GmarketLight: ['GmarketSansLight'],
      GmarketMedium: ['GmarketSansMedium'],
      GmarketBold: ['GmarketSansBold'],
    },
  },
  plugins: [],
};
