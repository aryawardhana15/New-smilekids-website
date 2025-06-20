/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-background': '#FFF5EC', // A very light, warm off-white, like a soft morning glow.
        'brand-primary': '#6DABDD', // A friendly, sky blue.
        'brand-secondary': '#FFC94A', // A cheerful, sunny yellow.
        'brand-accent': '#FF7E67', // A playful, soft coral.
        'brand-text-primary': '#4A4A4A', // A dark, soft gray for readability.
        'brand-text-secondary': '#6B7280', // A lighter gray for secondary text.
        'brand-white': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        display: ['Nunito', 'sans-serif'],
      },
      borderRadius: {
        'large': '1rem',
        'extra-large': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 8px 24px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
} 