import { alpha } from "@mui/material"
import { styled } from "@mui/material/styles"
import { Box, Drawer, Divider, IconButton } from "@mui/material"

import ChevronRightIcon from "@mui/icons-material/ChevronRight"

import { mainMenu } from "src/constants/menus/Index"

import ListIcon from "src/components/common/ListIcon/Index"
import MiniVariantDrawer from "src/components/common/MiniVariantDrawer/Index"

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
        open={open}
        sx={{ display: { xs: "none", sm: "block" } }}>
        <DrawerHeader>
          <IconButton
            onClick={handleDesktopToggle}
            sx={{ display: open ? "block" : "none", color: "inherit" }}>
            <ChevronRightIcon sx={{ color: "inherit" }} />
          </IconButton>
        </DrawerHeader>
        <Divider
          variant="middle"
          sx={{
            borderColor: (theme) => alpha(theme.palette.mainMenu.text, 0.2),
          }}
        />
        <ListIcon
          list={mainMenu}
          sx={[
            (theme) => ({
              "&:hover": {
                backgroundColor: alpha(theme.palette.common.black, 0.3),
              },
            }),
          ]}
        />
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
            backgroundColor: (theme) => theme.palette.mainMenu.main,
            color: (theme) => theme.palette.mainMenu.text,
          },
        }}>
        <DrawerHeader>
          <IconButton
            onClick={handleMobileToggle}
            sx={{ display: open ? "block" : "none", color: "inherit" }}>
            <ChevronRightIcon sx={{ color: "inherit" }} />
          </IconButton>
        </DrawerHeader>
        <Divider
          variant="middle"
          sx={{
            borderColor: (theme) => alpha(theme.palette.mainMenu.text, 0.2),
          }}
        />
        <ListIcon
          list={mainMenu}
          sx={[
            (theme) => ({
              "&:hover": {
                backgroundColor: alpha(theme.palette.common.black, 0.3),
              },
            }),
          ]}
        />
      </Drawer>
    </Box>
  )
}
