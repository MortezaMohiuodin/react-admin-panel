import { useState } from "react"
import { styled } from "@mui/material/styles"
import { Box, Drawer, Toolbar, Divider, IconButton } from "@mui/material"

import ChevronRightIcon from "@mui/icons-material/ChevronRight"

import { mainMenu } from "@/constants/menus/Index"

import ListIcon from "@/components/common/ListIcon/Index"
import MiniVariantDrawer from "@/components/common/MiniVariantDrawer/Index"

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row-reverse",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}))

export default function DashboardDrawer({
  open,
  mobileOpen,
  handleMobileToggle,
  handleDesktopToggle,
}) {
  return (
    <Box
      component="nav"
      sx={{
        width: { sm: (theme) => theme.global.drawerWidth },
        flexShrink: { sm: 0 },
      }}>
      <MiniVariantDrawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
        }}
        open={open}>
        <DrawerHeader>
          <IconButton
            onClick={handleDesktopToggle}
            sx={{ display: open ? "block" : "none" }}>
            <ChevronRightIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <ListIcon list={mainMenu} />
      </MiniVariantDrawer>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleMobileToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: (theme) => theme.global.drawerWidth,
          },
        }}>
        <Toolbar />
        <Divider />
        <ListIcon list={mainMenu} />
      </Drawer>
    </Box>
  )
}
