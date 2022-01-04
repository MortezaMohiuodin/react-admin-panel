import { useState } from "react"

import { Menu } from "@mui/material"

export function BasicDropdownAnchor({ children }) {
  return <div>{children}</div>
}

export function BasicDropdownBody({ children }) {
  return <div>{children}</div>
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
        {children[1]}
      </Menu>
    </>
  )
}
