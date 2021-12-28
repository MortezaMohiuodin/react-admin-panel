import { styled } from "@mui/material/styles"
import MuiDrawer from "@mui/material/Drawer"

const openedMixin = (theme) => ({
  width: theme.global.drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  boxSizing: "border-box",
  overflowX: "hidden",
  backgroundColor: theme.palette.mainMenu.main,
  color: theme.palette.mainMenu.text,
})

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: `calc(${theme.spacing(7)} + 1px)`,
  boxSizing: "border-box",
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
  overflowX: "hidden",
  backgroundColor: theme.palette.mainMenu.main,
  color: theme.palette.mainMenu.text,
})

const MiniVariantDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: theme.global.drawerWidth,
  flexShrink: 0,
  whiteSpace: "no-wrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}))

export default MiniVariantDrawer
