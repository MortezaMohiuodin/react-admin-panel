import { useRoutes } from "react-router-dom"
import Dashboard from "src/layouts/Dashboard/Index"
import Home from "src/pages/Home/Index"
import Login from "src/pages/Login/Index"
import User from "src/pages/User/Index"
import HomeIcon from "@mui/icons-material/Home"
import GroupIcon from "@mui/icons-material/Group"
import SettingsIcon from "@mui/icons-material/Settings"
import Users from "src/pages/Users/Index"
import Test from "src/pages/Test/Index"
import { AuthRequired } from "src/contexts/AuthProvider/Index"
const routes = [
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        index: true,
        element: (
          <AuthRequired>
            <Home />
          </AuthRequired>
        ),
      },
      {
        path: "/users",
        element: (
          <AuthRequired>
            <Users />
          </AuthRequired>
        ),
        children: [
          {
            path: ":userId",
            element: <User />,
          },
        ],
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
}

const RoutesWrapper = () => {
  return useRoutes(routes)
}
export { routes, routesData, RoutesWrapper }
