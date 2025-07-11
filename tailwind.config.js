/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',       // if using the /app directory (Next.js 13+)
    './components/**/*.{js,ts,jsx,tsx}',// for your React components
  ],
  theme: {
    extend: {
      backgroundImage: {
        'secondary-bg-img': 'var(--secondary-bg-img)', // now you can use `bg-secondary-bg`
      },
    },
  },
  plugins: [],
}
