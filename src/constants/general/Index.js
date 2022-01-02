import GroupIcon from "@mui/icons-material/Group"
import NotificationsIcon from "@mui/icons-material/Notifications"
import PersonIcon from "@mui/icons-material/Person"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import faker from "faker"
export const DASHBOARD_SUMMARY_CARDS = [
  {
    name: "all_users",
    title: "کل کاربران",
    icon: <GroupIcon />,
    color: "primary.main",
  },
  {
    name: "new_users",
    title: "کاربران جدید",
    icon: <PersonIcon />,
    color: "success.main",
  },
  {
    name: "alarms",
    title: "آلارم ها",
    icon: <NotificationsIcon />,
    color: "warning.main",
  },
  {
    name: "orders",
    title: "فروش",
    icon: <AttachMoneyIcon />,
    color: "secondary.main",
  },
]

export const DASHBOARD_SUMMARY_COUNTS = {
  all_users: faker.datatype.number({ min: 100, max: 400 }),
  new_users: faker.datatype.number({ min: 10, max: 100 }),
  alarms: faker.datatype.number({ min: 0, max: 15 }),
  orders: faker.datatype.number({ min: 0, max: 200 }),
}
