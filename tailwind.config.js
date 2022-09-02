/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['public/utils/*.html', 'public/utils/*.js'],
  theme: {
    extend: {
      colors: {
        "pry-clr-0": "rgb(36,36,36)",
        "pry-clr-1": "rgb(0, 145, 254)",
        "pry-clr-2": "rgb(18,91,145)",
        "pry-clr-3": "rgb(29,58,80)",
        "pry-clr-4": "rgb(201, 198, 198)",
        "pry-clr-5": "#0091FE",
        "pry-clr-6": "rgba(0, 145, 254, 0.5)",
        "pry-clr-7": "rgb(67, 54, 244)",
        "pry-clr-8": "rgba(67, 54, 244, 0.15)",
        "pry-clr-9": "rgb(219, 48, 122)",
        "pry-clr-10": "rgba(219, 48, 122, 0.15)",
        "pry-clr-11": "rgb(255, 87, 34)",
        "pry-clr-12": "rgba(255, 87, 34, 0.15)",
        "pry-clr-13": "rgb(255, 197, 34)",
        "pry-clr-14": "rgba(255, 197, 34, 0.15)",
        "pry-clr-15": "rgb(103, 58, 183)",
        "pry-clr-16": "rgba(103, 58, 183, 0.15)",
        "pry-clr-17": "rgb(76, 175, 80)",
        "pry-clr-18": "rgba(76, 175, 80, 0.15)",
        "pry-clr-19": "rgb(16,16,16)",
        "pry-clr-20": "rgb(14,14,14)",
        "pry-clr-21": "rgba(36, 36, 36, 0.4)",
      },
      fontFamily: {
        "poppins": ['Poppins', 'san-serif']
      },
      screens: {
        sm: "600px",
        md: "800px",
        lg: "1200px"
      }
    },
  },
  plugins: [],
}