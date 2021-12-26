import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material"

export default function ListIcon({ list }) {
  return (
    <List>
      {list.map(({ text, icon }) => {
        return (
          <ListItem button key={text}>
            {icon && <ListItemIcon>{icon}</ListItemIcon>}
            <ListItemText primary={text} />
          </ListItem>
        )
      })}
    </List>
  )
}
