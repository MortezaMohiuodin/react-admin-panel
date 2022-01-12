const common = {
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "1px solid slategrey",
    },
  },
  direction: "rtl",
  global: {
    drawerWidth: 300,
  },
  typography: {
    fontFamily: "YekanBakh, IranSans",
    en: {
      fontFamily: "Roboto , ariel",
    },
  },
}

const getTheme = (mode) => ({
  ...common,
  palette: {
    mode,
    ...(mode === "light"
      ? {
          cardBg: {
            main: "white",
          },
        }
      : {
          cardBg: {
            main: "#272727",
          },
        }),
  },
})
export { getTheme }
