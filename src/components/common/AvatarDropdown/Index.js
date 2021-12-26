import { useState } from "react"

import {
  IconButton,
  Avatar,
  Tooltip,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material"

const USER_MENU = ["پروفایل", "خروج"]

export default function AvatarDropdown() {
  const [anchorElUser, setAnchorElUser] = useState(null)
  const openUserMenu = (e) => {
    setAnchorElUser(e.currentTarget)
  }
  const closeUserMenu = () => {
    setAnchorElUser(false)
  }
  return (
    <>
      <Tooltip title="Open settings">
        <IconButton onClick={openUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt="avatar"
            src="/img/avatar-1.jpg"
            sx={{ width: 35, height: 35 }}
          />
        </IconButton>
      </Tooltip>
      <Menu
        id="user-appbar-menu"
        anchorEl={anchorElUser}
        open={Boolean(anchorElUser)}
        onClose={closeUserMenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{ mt: "45px" }}>
        {USER_MENU.map((link, index) => (
          <MenuItem key={index}>
            <Typography textAlign="center">{link}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}
