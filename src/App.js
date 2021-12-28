import { useState, createContext } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from "@mui/material/styles"

import { defaultTheme, darkTheme } from "./configs/mui/theme"

import CssBaseline from "@mui/material/CssBaseline"
import RTL from "src/configs/mui/Rtl"
import { RoutesWrapper } from "src/configs/router/Index"

import "src/assets/scss/index.scss"

export const ModeContext = createContext()

const App = () => {
  const [dark, setDark] = useState(false)

  const toggleMode = () => {
    setDark(!dark)
  }
  return (
    <div id="app" dir="rtl">
      <RTL>
        <ModeContext.Provider value={{ dark, toggleMode }}>
          <ThemeProvider theme={!dark ? defaultTheme : darkTheme}>
            <CssBaseline />
            <Router>
              <RoutesWrapper />
            </Router>
          </ThemeProvider>
        </ModeContext.Provider>
      </RTL>
    </div>
  )
}

export default App
