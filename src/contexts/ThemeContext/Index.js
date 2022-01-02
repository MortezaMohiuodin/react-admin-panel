import { useState, createContext, useMemo } from "react"
import { ThemeProvider, createTheme } from "@mui/material"
import { faIR } from "@mui/material/locale"

import { getTheme } from "src/configs/mui/theme"

export const ThemeContext = createContext()
export function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState("light")
  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
  }
  let theme = useMemo(() => {
    return createTheme(getTheme(mode), faIR)
  }, [mode])
  let value = { mode, toggleMode }
  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
