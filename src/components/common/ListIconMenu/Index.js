import {
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import { NavLink } from "react-router-dom"

export default function ListIconMenu({ sx = [], list }) {
  return (
    <List>
      {list.map(({ text, icon, href }) => {
        return (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                textDecoration: "none",
                marginBottom: 0,
                marginTop: 0,
                color: isActive ? "#0288d1" : "#4a4a4a8a",
              }
            }}
            to={href}
            key={text}>
            <ListItemButton
              key={text}
              sx={[...(Array.isArray(sx) ? sx : [sx])]}>
              {icon && (
                <ListItemIcon sx={{ color: "inherit", minWidth: 40 }}>
                  {icon}
                </ListItemIcon>
              )}
              <ListItemText sx={{ fontWeight: "bold", fontSize: 12 }}>
                <Typography
                  sx={{ fontSize: 16, fontWeight: 600, marginTop: "6px" }}>
                  {text}
                </Typography>
              </ListItemText>
            </ListItemButton>
          </NavLink>
        )
      })}
    </List>
  )
}
