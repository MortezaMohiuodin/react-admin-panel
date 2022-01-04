import { useState } from "react"

import { Menu } from "@mui/material"

export function BasicDropdownAnchor({ children }) {
  return <>{children}</>
}

export function BasicDropdownBody({ children }) {
  return <>{children}</>
}

export default function AvatarDropdown({ children, id }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const openDropdown = (e) => {
    setAnchorEl(e.currentTarget)
  }
  const closeDropdown = () => {
    setAnchorEl(false)
  }
  return (
    <>
      <div onClick={openDropdown}>{children[0]}</div>
      <Menu
        id={id}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={closeDropdown}
        onClick={closeDropdown}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{ mt: "45px", "& .MuiMenu-list": { pb: 0, pt: 0 } }}>
        {children[1]}
      </Menu>
    </>
  )
}
