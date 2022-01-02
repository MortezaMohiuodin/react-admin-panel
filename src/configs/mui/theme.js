const common = {
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
