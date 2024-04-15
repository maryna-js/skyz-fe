import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'cod-gray': '#1E1E1E',
        'blaze-orange': '#FF5C00',
        'river-bed': '#464F61',
      },
      height: {
        '61px': '3.8125rem',
      },
      width: {
        '166px': '10.375rem',
        '275px': '17.1875rem',
      }
    },
  },
  plugins: [],
};
export default config;
