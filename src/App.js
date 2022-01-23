import { Suspense } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider as ReduxProvider } from "react-redux"
import CssBaseline from "@mui/material/CssBaseline"
import RTL from "src/configs/mui/Rtl"
import AuthProvider from "./contexts/AuthProvider/Index"
import { RoutesWrapper } from "src/configs/router/Index"
import { ThemeContextProvider } from "src/contexts/ThemeContext/Index"

import store from "./store"
import "src/assets/scss/index.scss"

const App = () => {
  return (
    <div id="app" dir="rtl">
      <ReduxProvider store={store}>
        <AuthProvider>
          <RTL>
            <ThemeContextProvider>
              <CssBaseline />
              <Suspense fallback={<div>Loading...</div>}>
                <Router>
                  <RoutesWrapper />
                </Router>
              </Suspense>
            </ThemeContextProvider>
          </RTL>
        </AuthProvider>
      </ReduxProvider>
    </div>
  )
}

export default App
