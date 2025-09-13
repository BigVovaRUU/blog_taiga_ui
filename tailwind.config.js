/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ВАЖНО: управляем темой классом .dark на <html>
  content: [
    './index.html',
    './blog/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: { extend: {} },
  plugins: [],
}