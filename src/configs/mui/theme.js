import { alpha } from "@mui/material"
import { grey } from "@mui/material/colors"
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
    enBody1: {
      fontFamily: "Roboto , ariel",
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
  zIndex: {},
}

const getTheme = (mode) => ({
  ...common,
  palette: {
    mode,
    white: {
      contrastText: grey[800],
      main: alpha("#fff", 0.8),
      dark: alpha("#fff", 0.8),
      light: alpha("#fff", 0.8),
    },
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
