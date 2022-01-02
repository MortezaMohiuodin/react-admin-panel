import { lazy } from "react"
import { useRoutes } from "react-router-dom"
import Dashboard from "src/layouts/Dashboard/Index"
import Home from "src/pages/Home/Index"
import Login from "src/pages/Login/Index"
import User from "src/pages/User/Index"
import HomeIcon from "@mui/icons-material/Home"
import GroupIcon from "@mui/icons-material/Group"
import PersonIcon from "@mui/icons-material/Person"
import SettingsIcon from "@mui/icons-material/Settings"
import Users from "src/pages/Users/Index"
import Test from "src/pages/Test/Index"
import AuthRequired from "src/components/AuthRequired/Index"
import Profile from "src/pages/Profile/Index"
// const lazyload = async (path) => {
//   const Component = await lazy(() => import(path))
//   return <Component />
// }
const routes = [
  {
    path: "/",
    element: (
      <AuthRequired>
        <Dashboard />
      </AuthRequired>
    ),
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
        children: [
          {
            path: ":userId",
            element: <User />,
          },
        ],
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "*",
        element: <div>not found</div>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]

const routesData = {
  home: {
    label: "داشبورد",
    icon: <HomeIcon />,
  },
  users: {
    label: "کاربران",
    icon: <GroupIcon />,
  },
  user: {
    label: "کابر",
    icon: <GroupIcon />,
  },
  setting: {
    label: "تنظیمات",
    icon: <SettingsIcon />,
  },
  profile: {
    label: "پروفایل",
    icon: <PersonIcon />,
  },
}

const RoutesWrapper = () => {
  return useRoutes(routes)
}
export { routes, routesData, RoutesWrapper }
