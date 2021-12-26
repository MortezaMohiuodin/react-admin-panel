import {
  AppBar,
  IconButton,
  Toolbar,
  Box,
  Badge,
  Typography,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import NotificationsIcon from "@mui/icons-material/Notifications"
import MailIcon from "@mui/icons-material/Mail"

import AvatarDropdown from "../AvatarDropdown/Index"

export default function DashboardHeader({
  open,
  handleMobileToggle,
  handleDesktopToggle,
}) {
  return (
    <AppBar
      color="primary"
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
        }),
      ]}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { sm: "none" } }}
          onClick={handleMobileToggle}>
          <MenuIcon />
        </IconButton>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { xs: "none", sm: open ? "none" : "block" } }}
          onClick={handleDesktopToggle}>
          <MenuIcon />
        </IconButton>
        <Typography color="inherit" variant="h6" sx={{ typography: "en" }}>
          Dashboard
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ mr: "auto" }}>
          <IconButton size="large" color="inherit">
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton size="large" color="inherit" sx={{ mr: 2 }}>
            <Badge badgeContent={1} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <AvatarDropdown />
        </Box>
      </Toolbar>
    </AppBar>
  )
}
