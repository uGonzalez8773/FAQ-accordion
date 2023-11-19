/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        mainFont: ['"Kumbh Sans"'],
      },
      colors: {
        'secondColor': '#F47B56',
       },
    },
  },
  plugins: [],
}

