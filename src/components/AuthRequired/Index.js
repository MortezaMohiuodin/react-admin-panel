import { useState, useEffect } from "react"

import { useNavigate, Navigate, useLocation } from "react-router-dom"
import { useAuth } from "src/contexts/AuthProvider/Index"
import LoadingLayout from "../LoadingLayout/Index"
import { Box } from "@mui/material"

export default function AuthRequired({ children }) {
  let { update } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  useEffect(() => {
    setLoading(true)
    update().then((res) => {
      setLoading(false)
      if (!res) navigate("/login")
    })
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
