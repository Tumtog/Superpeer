/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        fontPrimary: ['Roboto']
      },
      colors: {
        'darkGray': '#222222',
        'lightGray': '#555555',
        'yellowBTN': '#FFD338',
      },
      screens: {
        'xs': '320px',
        // => @media (min-width: 300px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1440px',
        // => @media (min-width: 1440px) { ... }
        '3xl': '1441px',
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
}

