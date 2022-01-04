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

import AccountBoxIcon from "@mui/icons-material/AccountBox"
import LogoutIcon from "@mui/icons-material/Logout"

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
      <Tooltip title="تنظیمات کاربری">
        <IconButton onClick={openUserMenu} size="large" sx={{ p: 0 }}>
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
        <MenuItem
          key="profile"
          onClick={() => {
            closeUserMenu()
            navigate("/profile")
          }}>
          <AccountBoxIcon color="primary" />
          <Typography textAlign="center" sx={{ ml: 2 }}>
            پروفایل
          </Typography>
        </MenuItem>
        <MenuItem
          key="exit"
          onClick={() =>
            signOut(() => {
              closeUserMenu()
              navigate("/login")
            })
          }>
          <LogoutIcon color="error" />
          <Typography textAlign="center" sx={{ ml: 2 }}>
            خروج
          </Typography>
        </MenuItem>
      </Menu>
    </>
  )
}
