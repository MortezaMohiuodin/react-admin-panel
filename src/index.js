import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ReactDom from "react-dom"
import { ThemeProvider } from "@mui/material/styles"
import { defaultTheme } from "./configs/mui/theme"
import CssBaseline from "@mui/material/CssBaseline"
import RTL from "@/src/configs/mui/Rtl"
import Home from "./pages/Home/Index"
import Login from "./pages/Login/Index"

const App = () => {
  return (
    <div id="app" dir="rtl">
      <RTL>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <Router basename={process.env.REACT_APP_PUBLIC_URL}>
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<Login />} path="/login" />
              <Route path="*" element={<div>not found</div>} />
            </Routes>
          </Router>
        </ThemeProvider>
      </RTL>
    </div>
  )
}

ReactDom.render(<App />, document.getElementById("root"))
