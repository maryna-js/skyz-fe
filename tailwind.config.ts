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
        'malibu': '#4FD5FF',
        'blue-dianne': '#214D5B',
        'curious-blue': '#1CA2CC',
        'abbey': '#555961',
        'woodsmoke': '#131519',
        'scarlet': '#FF1F00',
      },
      height: {
        '61px': '3.8125rem',
      },
      width: {
        '118px': '7.375rem',
        '166px': '10.375rem',
        '275px': '17.1875rem',
      },
      screens: {
        'pm': '430px',
        '4xl': '1780px',
      },
      backgroundImage: theme => ({
        'custom-background': "url('/bg-image.png')",
      }),
    },
  },
  plugins: [],
};
export default config;
