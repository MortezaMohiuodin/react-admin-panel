import { useLocation } from "react-router-dom"
import { routesData } from "src/constants/routes/Index"
export default function useRouteParam() {
  const location = useLocation()
  let path = location.pathname
  let routeNames = path.split("/").splice(1)
  let routeList = routeNames.map((route) => {
    let href = route.length
      ? path.slice(0, path.indexOf(route) + route.length)
      : "/"
    let name = route.length ? route : "home"
    return {
      name,
      href,
      label: routesData[name] ? routesData[name]["label"] : null,
      icon: routesData[name] ? routesData[name]["icon"] : null,
    }
  })
  return routeList
}
