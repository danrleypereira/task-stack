import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'charcoal': {
          500: '#64718E',
          600: '#72718E',
          700: '#454456',
          800: '#2E2D39',
        },
      }
    },
  },
  plugins: [],
} satisfies Config;
