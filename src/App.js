import { BrowserRouter as Router } from "react-router-dom"

import CssBaseline from "@mui/material/CssBaseline"
import RTL from "src/configs/mui/Rtl"
import { RoutesWrapper } from "src/configs/router/Index"

import { ThemeContextProvider } from "src/contexts/ThemeContext/Index"

import "src/assets/scss/index.scss"
import AuthProvider from "./contexts/AuthProvider/Index"

const App = () => {
  return (
    <div id="app" dir="rtl">
      <AuthProvider>
        <RTL>
          <ThemeContextProvider>
            <CssBaseline />
            <Router>
              <RoutesWrapper />
            </Router>
          </ThemeContextProvider>
        </RTL>
      </AuthProvider>
    </div>
  )
}

export default App
