import { AppBar, IconButton, Toolbar, Box, Badge } from "@mui/material"
import { useContext } from "react"
import { ThemeContext } from "src/contexts/ThemeContext/Index"
import MenuIcon from "@mui/icons-material/Menu"
import NotificationsIcon from "@mui/icons-material/Notifications"
import MailIcon from "@mui/icons-material/Mail"
import Brightness4Icon from "@mui/icons-material/Brightness4"

import AvatarDropdown from "../AvatarDropdown/Index"
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
          sx={{ display: { xs: "none", sm: open ? "none" : "block" } }}
          onClick={handleDesktopToggle}>
          <MenuIcon />
        </IconButton>
        <IconButton size="large" color="inherit">
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton size="large" color="inherit">
          <Badge badgeContent={1} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ mr: "auto" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="dark mode"
            onClick={toggleMode}>
            <Brightness4Icon />
          </IconButton>
          <AvatarDropdown />
        </Box>
      </Toolbar>
    </AppBar>
  )
}
