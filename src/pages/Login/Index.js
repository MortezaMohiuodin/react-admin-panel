import {
  Card,
  Box,
  TextField,
  FormGroup,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material"
import { styled } from "@mui/material/styles"
import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"

import { useAuth } from "src/contexts/AuthProvider/Index"

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.grey[200],
}))

const init = {
  email: "mortezamohiuodin@gmail.com",
  password: "1234",
}

export default function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  const { user, signIn } = useAuth()
  const [form, setForm] = useState(init)
  const handleChange = (e) => {
    let targetId = e.target.id
    let value = e.target.value
    setForm({
      ...form,
      [targetId]: value,
    })
  }
  let from = location.state?.from?.pathname || "/"
  const handleLogin = (e) => {
    e.preventDefault()
    signIn(form, () => navigate(from, { replace: true }))
  }
  return (
    <Wrapper container>
      <Card elevation={1} sx={{ minWidth: 310, p: 2 }}>
        <Box component="form" onSubmit={handleLogin}>
          <FormGroup sx={{ mb: 3 }}>
            <TextField
              id="email"
              type="email"
              variant="standard"
              label="ایمیل"
              value={form.email}
              inputProps={{ "aria-label": "email" }}
              onChange={handleChange}
              sx={{ mb: 1 }}
            />
            <TextField
              id="password"
              type="password"
              variant="standard"
              label="رمز کاربری"
              value={form.password}
              onChange={handleChange}
              inputProps={{ "aria-label": "password" }}
              sx={{ mb: 1 }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="آیا اطلاعات ورود ذخیره شود؟"
            />
          </FormGroup>
          <Button variant="contained" type="submit" fullWidth>
            ورود
          </Button>
        </Box>
      </Card>
    </Wrapper>
  )
}
