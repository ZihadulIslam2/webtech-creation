import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'lime-400': '#d4ff00',
        'lime-500': '#bfff00',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      boxShadow: {
        lime: '0 0 30px rgba(212, 255, 0, 0.2)',
        'lime-lg': '0 0 50px rgba(212, 255, 0, 0.3)',
      },
      animation: {
        'pulse-lime': 'pulse-lime 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-lime': {
          '0%, 100%': {
            boxShadow: '0 0 30px rgba(212, 255, 0, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 50px rgba(212, 255, 0, 0.4)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
