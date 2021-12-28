import { createTheme } from "@mui/material/styles"
import { alpha } from "@mui/material"
import { grey } from "@mui/material/colors"
import { faIR } from "@mui/material/locale"

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

const defaultTheme = createTheme(
  {
    ...common,
    palette: {
      header: {
        main: "white",
        text: "#3c3b3b",
      },
      mainMenu: {
        main: "#3c3b3b",
        text: "#ffffffe0",
      },
      mainBox: {
        main: grey[100],
        text: grey[900],
      },
    },
  },
  faIR,
)

const darkTheme = createTheme(
  {
    ...common,
    palette: {
      header: {
        main: "#343434",
        text: alpha("#fff", 0.8),
      },
      mainMenu: {
        main: "#161616",
        text: alpha("#fff", 0.8),
      },
      mainBox: {
        main: "#201f1f",
        text: alpha("#fff", 0.8),
      },
    },
  },
  faIR,
)

console.log(defaultTheme)

export { defaultTheme, darkTheme }
