
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          "gray-20" : "#808080",
          "gray-50": "#EFE6E6",
          "gray-100": "#DFCCCC",
          "gray-500": "#5E0000",
          "primary-100": "#E6E6EC33",
          "primary-300": "#020144",
          "primary-500": "#E6C342",
          "secondary-400": "#FFCD58",
          "secondary-500": "#EACA44",
        },
        backgroundImage: (theme) => ({
        }),
        fontFamily: {
          dmsans: ["DM Sans", "sans-serif"],
          monotserrat: ["Montserrat", "sans-serif"]
        },
        content: {
          homePage: "url('./assets/homePageGraphic.png')",
          aboutPage: "url('./assets/')"
        },
      },
      screen: {
        xs: "480px",
        sm: "768px",
        md: "1060px"
      },
    },
    plugins: [],
  }