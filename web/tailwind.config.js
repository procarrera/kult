module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "kult-primary": "#53199e",
      "kult-secondary": "#E1E2F0",
    }),
    fontFamily: {
      fredoka: ["Fredoka One, cursive"],
      roboto: ["Roboto, sans-serif"],
      montserrat: ["Montserrat, sans-serif"],
    },
    textColor: {
      primary: "#53199e",
      secondary: "#E1E2F0",
      normal: "#222",
    },
    borderColor: theme => ({
      ...theme('colors'),
       DEFAULT: theme('colors.gray.300', 'currentColor'),
      'primary': '#53199e',
      'secondary': '#E1E2F0',
      'normal': "#222",
      'danger': '#e3342f',
     }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
