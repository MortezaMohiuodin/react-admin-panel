import { useContext } from "react"
import { ThemeContext } from "src/contexts/ThemeContext/Index"

import { AppBar, IconButton, Toolbar, Box, Stack } from "@mui/material"

import MenuIcon from "@mui/icons-material/Menu"
import Brightness4Icon from "@mui/icons-material/Brightness4"

import Right from "./Right/Index"
import Left from "./Left/Index"

export default function DashboardHeader({
  open,
  handleMobileToggle,
  handleDesktopToggle,
}) {
  let { toggleMode } = useContext(ThemeContext)

  return (
    <AppBar
      color="info"
      sx={[
        (theme) => ({
          width: {
            sm: open
              ? `calc(100% - ${theme.global.drawerWidth}px)`
              : `calc(100% - ${theme.spacing(7)})`,
          },
          ml: {
            sm: open ? theme.global.drawerWidth : theme.spacing(7),
          },
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }),
      ]}>
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { sm: "none" } }}
            onClick={handleMobileToggle}>
            <MenuIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "none", sm: open ? "none" : "inline-flex" } }}
            onClick={handleDesktopToggle}>
            <MenuIcon />
          </IconButton>
          <Right open={open} />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: "flex", alignItems: "center", mr: "auto" }}>
          <Left />
          <IconButton
            size="large"
            color="inherit"
            aria-label="dark mode"
            onClick={toggleMode}
            sx={{ mr: "-12px" }}>
            <Brightness4Icon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
