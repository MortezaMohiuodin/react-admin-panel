import { Box, Toolbar } from "@mui/material"
import { Outlet } from "react-router-dom"
import { useState } from "react"
import DashboardHeader from "@/components/common/DashboardHeader/Index"
import DashboardDrawer from "@/components/common/DashboardDrawer/Index"

export default function Dashboard() {
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
          },
          (theme) => ({
            width: {
              sm: open
                ? `calc(100% - ${theme.global.drawerWidth}px)`
                : `calc(100% - ${theme.spacing(7)}px)`,
            },
          }),
        ]}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  )
}
