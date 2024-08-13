/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
      
      colors: {
        'c-black': '#1C1D20', 
        'c-river': '#A07EE7',
        'c-grass': '#7cfc00',
        'c-cloud': '#607274',
        'c-earth': '#B2A59B',
        'c-gray': 'rgba(255, 255, 255, 0.225)',
        'c-nestle': '#E3E3E3',

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
