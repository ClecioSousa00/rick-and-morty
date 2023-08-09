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
        'gradient-hero':
          'linear-gradient(180deg, rgba(26, 24, 24, 0.00) 48.71%, #000 100%)',
        'main-background': "url('/main-banner.png')",
        'border-gradient':
          'linear-gradient(90deg, rgba(252,228,109,1) 0%, rgba(74,237,82,1) 97%)',
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
