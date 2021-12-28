import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { NavLink } from "react-router-dom"

export default function ListIcon({ sx = [], list }) {
  return (
    <List>
      {list.map(({ text, icon, href }) => {
        return (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                backgroundColor: isActive ? "#323232" : "inherit",
                textDecoration: "none",
                color: "inherit",
                marginBottom: 0,
                marginTop: 0,
              }
            }}
            to={href}
            key={text}>
            <ListItemButton
              key={text}
              sx={[...(Array.isArray(sx) ? sx : [sx])]}>
              {icon && (
                <ListItemIcon sx={{ color: "inherit" }}>{icon}</ListItemIcon>
              )}
              <ListItemText primary={text} />
            </ListItemButton>
          </NavLink>
        )
      })}
    </List>
  )
}
