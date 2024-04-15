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
        'cod-gray-opacity': 'rgba(70, 79, 97, 0.27)',
        'slate-gray': '#798294',
        'white-lilac': '#EAEEF7',
        'shark': '#2E3137',
        'tuft-bush': '#FFE0CE',
        'trinidad': '#E64300',
        'atomic-tangerine':'FFA370',

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
