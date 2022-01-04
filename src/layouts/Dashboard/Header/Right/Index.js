import { IconButton, Badge } from "@mui/material"

import NotificationsIcon from "@mui/icons-material/Notifications"

import MessageDropdown from "src/components/MessageDropdown/Index"

export default function Left({ open }) {
  return (
    <>
      <IconButton
        size="large"
        color="inherit"
        sx={{ marginLeft: { sm: open ? "-12px" : 0 } }}>
        <Badge badgeContent={17} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <MessageDropdown />
    </>
  )
}
