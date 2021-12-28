import HomeIcon from "@mui/icons-material/Home"
import GroupIcon from "@mui/icons-material/Group"
import SettingsIcon from "@mui/icons-material/Settings"

const mainMenu = [
  {
    text: "داشبورد",
    icon: <HomeIcon />,
    href: "/",
  },
  {
    text: "کاربران",
    icon: <GroupIcon />,
    href: "/users",
  },
  {
    text: "تنظیمات",
    icon: <SettingsIcon />,
    href: "/setting",
  },
]

export { mainMenu }
