import { useState, useEffect } from "react"

import { useNavigate, Navigate, useLocation } from "react-router-dom"
import { useAuth } from "src/contexts/AuthProvider/Index"
import LoadingLayout from "../LoadingLayout/Index"
import { Box } from "@mui/material"

const adminRoutes = ["/users"]

export default function AuthRequired({ children }) {
  let { update } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  useEffect(() => {
    setLoading(true)
    update()
      .then(({ user, token }) => {
        let isAdminRoute = adminRoutes.indexOf(location.pathname) > -1
        setLoading(false)
        if (!token) {
          navigate("/login", {
            state: { from: { pathname: location.pathname } },
          })
        } else if (isAdminRoute && !user.admin) {
          navigate("/")
        }
      })
      .catch(() => navigate("./login"))
      .finally(() => setLoading(false))

    return () => {
      return false
    }
  }, [location])

  return (
    <Box sx={{ position: "relative" }}>
      <LoadingLayout loading={loading} />
      {children}
    </Box>
  )
}
