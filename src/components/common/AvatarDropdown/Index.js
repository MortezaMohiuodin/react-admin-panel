import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { useAuth } from "src/contexts/AuthProvider/Index"

import {
  IconButton,
  Avatar,
  Tooltip,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material"

export default function AvatarDropdown() {
  const navigate = useNavigate()
  const [anchorElUser, setAnchorElUser] = useState(null)
  const { user, signOut } = useAuth()
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
        <MenuItem key="profile">
          <Typography textAlign="center">پروفایل</Typography>
        </MenuItem>
        <MenuItem key="exit">
          <Typography
            textAlign="center"
            onClick={() => signOut(() => navigate("/login"))}>
            خروج
          </Typography>
        </MenuItem>
      </Menu>
    </>
  )
}
