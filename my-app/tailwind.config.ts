import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'background-shine': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        'background-shine': 'background-shine 2s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};

export default config;
