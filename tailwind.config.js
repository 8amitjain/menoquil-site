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
        'cream-bg': '#FCFAF7',
        'dark-brown': '#3B2B2E',
        'text-secondary': '#493639',
        'text-muted': '#7E676B',
        'rose-primary': '#D74273',
        'teal-accent': '#3FA69E',
        'light-teal': '#CCFBF1',
        'cyan-bg': '#CFFAFE',
        'card-bg': '#F6F2EE',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      borderRadius: {
        DEFAULT: '0.75rem',
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
