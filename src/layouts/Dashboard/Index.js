import { Box, Toolbar } from "@mui/material"
import { Outlet } from "react-router-dom"
import { useState } from "react"
import DashboardHeader from "./Header/Index"
import DashboardDrawer from "./Drawer/Index"
import CustomBreadcrumb from "src/components/common/CustomBreadcrumb/Index"
export default function Dashboard({ toggleMode, dark }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [open, setOpen] = useState(true)
  const handleDesktopToggle = () => {
    setOpen(!open)
  }
  const handleMobileToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  return (
    <Box sx={{ display: "flex" }}>
      <DashboardHeader
        dark={dark}
        toggleMode={toggleMode}
        open={open}
        mobileOpen={mobileOpen}
        handleMobileToggle={handleMobileToggle}
        handleDesktopToggle={handleDesktopToggle}
      />
      <DashboardDrawer
        open={open}
        mobileOpen={mobileOpen}
        handleMobileToggle={handleMobileToggle}
        handleDesktopToggle={handleDesktopToggle}
      />

      <Box
        component="main"
        sx={[
          {
            p: 2,
            ml: "auto",
            width: "100%",
          },
          (theme) => ({
            ...(theme.palette.mode === "light" && {
              backgroundColor: theme.palette.grey[200],
            }),
            width: {
              sm: open
                ? `calc(100% - ${theme.global.drawerWidth}px)`
                : `calc(100% - ${theme.spacing(7)})`,
            },
            minHeight: "100vh",
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          }),
        ]}>
        <Box container maxWidth="xl" sx={{ mx: "auto" }}>
          <Toolbar />
          <CustomBreadcrumb />
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}
