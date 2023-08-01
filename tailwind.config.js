/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-banner': "url('/background.png')",
      },
      fontFamily: {
        sans: ['var(--font-raleway)'],
      },
      colors: {
        primary: '#061618',
        secondary: '#4AED52',
        'secondary-dark': '#439447',
        'yellow-light': '#FCE46D',
        dark: '#030409',
        danger: '#A1140A',
      },
    },
  },
  plugins: [],
}
