import { createTheme } from "@mui/material/styles"

const defaultTheme = createTheme({
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
})

export { defaultTheme }
