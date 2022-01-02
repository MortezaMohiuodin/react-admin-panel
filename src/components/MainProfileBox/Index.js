import { useMemo } from "react"
import { Box, Avatar, List, ListItem, Divider, Typography } from "@mui/material"
import { blue } from "@mui/material/colors"
const LIST = [
  { name: "age", label: "سن" },
  { name: "gender", label: "جنسیت" },
  { name: "mobile", label: "موبایل" },
  { name: "province", label: "محل سکونت" },
]

export default function MainProfileBox({ user }) {
  let fullname = useMemo(() => {
    if (!user?.firstname || !user?.lastname) return ""
    return `${user?.firstname} ${user?.lastname}`
  }, [user])
  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: "cardBg.main",
      }}>
      <Box sx={{ mb: 2 }}>
        <Avatar
          variant="circular"
          src="img/avatar-1.jpg"
          alt="profile image"
          sx={{
            width: 1,
            height: 1,
            maxWidth: 150,
            maxHeight: 150,
            margin: "auto",
          }}
        />
        <Typography
          variant="body1"
          align="center"
          sx={{ fontWeight: 600, mt: 2 }}>
          {fullname}
        </Typography>
      </Box>
      <Divider variant="middle" />
      <List sx={{ "& .MuiListItem-root": { justifyContent: "space-between" } }}>
        {LIST.map(({ name, label }) => (
          <ListItem key={name}>
            <Typography sx={{ fontWeight: 500 }}>{label}</Typography>
            <Typography>{user && user[name]}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
