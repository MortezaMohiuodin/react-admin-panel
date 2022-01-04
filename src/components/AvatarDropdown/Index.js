import { useNavigate } from "react-router-dom"

import { useAuth } from "src/contexts/AuthProvider/Index"

import {
  IconButton,
  Avatar,
  Tooltip,
  MenuItem,
  Typography,
} from "@mui/material"

import AccountBoxIcon from "@mui/icons-material/AccountBox"
import LogoutIcon from "@mui/icons-material/Logout"

import BasicDropdown, {
  BasicDropdownAnchor,
  BasicDropdownBody,
} from "src/components/BasicDropdown/Index"

const LIST = [
  {
    name: "profile",
    label: "پروفایل",
    icon: <AccountBoxIcon color="primary" />,
  },
  {
    name: "exit",
    label: "خروج",
    icon: <LogoutIcon color="error" />,
  },
]

export default function AvatarDropdown() {
  const navigate = useNavigate()
  const { signOut } = useAuth()

  const handleClick = (name) => {
    switch (name) {
      case "profile":
        navigate("/profile")
        break
      case "exit":
        signOut(() => {
          navigate("/login")
        })
        break
      default:
        break
    }
  }
  return (
    <>
      <BasicDropdown id="user-appbar-menu">
        <BasicDropdownAnchor>
          <Tooltip title="تنظیمات کاربری">
            <IconButton size="large" sx={{ p: 0 }}>
              <Avatar
                alt="avatar"
                src="/img/avatar-1.jpg"
                sx={{ width: 35, height: 35 }}
              />
            </IconButton>
          </Tooltip>
        </BasicDropdownAnchor>
        <BasicDropdownBody>
          {LIST.map(({ name, icon, label }) => (
            <MenuItem key={name} onClick={() => handleClick(name)}>
              {icon}
              <Typography textAlign="center" sx={{ ml: 2 }}>
                {label}
              </Typography>
            </MenuItem>
          ))}
        </BasicDropdownBody>
      </BasicDropdown>
    </>
  )
}
