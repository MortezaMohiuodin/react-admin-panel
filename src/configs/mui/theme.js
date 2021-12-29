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
  mode,
})
export { getTheme }
