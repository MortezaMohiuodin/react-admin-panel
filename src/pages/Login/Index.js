import { useState } from "react"
import { Typography, alpha } from "@mui/material"
import { useNavigate, useLocation } from "react-router-dom"

import * as styles from "./styles"
import { useAuth } from "src/contexts/AuthProvider/Index"
import LoginForm from "src/components/Forms/Login/Index"
import BasicSnackbar from "src/components/BasicSnackbar/Index"

export default function Login() {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: null,
  })
  const [form, setForm] = useState({})
  const navigate = useNavigate()
  const location = useLocation()
  const { signIn } = useAuth()

  let from = location.state?.from?.pathname || "/"
  const handleSubmit = async (values) => {
    await signIn(values)
      .then(() => {
        navigate(from, { replace: true })
      })
      .catch((e) => {
        console.log("error", e.response)
        const { data, status } = e.response
        setSnackbar({
          open: true,
          message: data,
        })
        throw new Error(e)
      })
  }
  const handleUpdate = (values) => {
    setForm(values)
  }
  return (
    <styles.Wrapper>
      <BasicSnackbar
        open={snackbar.open}
        message={snackbar.message}
        type="error"
        duration={4000}
        updateOpen={(value) => setSnackbar({ message: null, open: value })}
      />
      <styles.BackgroundImageBlur color="#0d1072" src="img/bg-login.jpg" />
      <styles.LoginCard elevation={1}>
        {/* <styles.LogoImg src="img/logo.png" sx={{ mb: 2 }} /> */}
        <Typography
          variant="h6"
          align="center"
          sx={{ color: alpha("#fff", 0.9) }}>
          صفحه ورود
        </Typography>
        <LoginForm handleSubmit={handleSubmit} handleUpdate={handleUpdate} />
      </styles.LoginCard>
    </styles.Wrapper>
  )
}
