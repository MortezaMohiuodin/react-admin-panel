import { useContext } from "react"
import { useLocation } from "react-router-dom"
import { Breadcrumbs, Box, Chip, styled } from "@mui/material"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"

import { routesData } from "src/configs/router/Index"

import { ThemeContext } from "src/contexts/ThemeContext/Index"

export default function CustomBreadcrumb() {
  const location = useLocation()

  const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    return {
      "& .MuiSvgIcon-root": {
        color: "inherit",
      },
    }
  })
  let path = location.pathname
  let routeNames = path.split("/").splice(1)
  let routeList = routeNames.map((route) => {
    let href = route.length
      ? path.slice(0, path.indexOf(route) + route.length)
      : "/"
    let name = route.length ? route : "home"
    return {
      name: routesData[name] ? routesData[name]["label"] : name,
      href,
      label: routesData[name] ? routesData[name]["label"] : name,
      icon: routesData[name] ? routesData[name]["icon"] : null,
    }
  })
  return (
    <Box role="presentation" sx={{ pb: 2 }}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<ChevronLeftIcon fontSize="small" />}>
        {routeList.map(({ label, icon, href }, index) => {
          return (
            <StyledBreadcrumb
              key={label}
              component="a"
              href={href}
              label={label}
              icon={icon ? icon : null}
            />
          )
        })}
      </Breadcrumbs>
    </Box>
  )
}
