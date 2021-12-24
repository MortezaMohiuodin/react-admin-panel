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
import { useNavigate } from "react-router-dom"

import { sendData } from "@/src/api/login"

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`

const initFormObject = {
  email: "test@gmail.com",
  password: "1234",
}

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState(initFormObject)

  const handleChange = (e, type) => {
    let value = e.target.value
    if (type === "email") {
      setForm({
        ...form,
        email: value,
      })
    }
    if (type === "password") {
      setForm({
        ...form,
        password: value,
      })
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    let { data } = await sendData(form)
    const { user, accessToken } = data
    if (accessToken) navigate("/")
  }
  return (
    <Wrapper container>
      <Card elevation={0} sx={{ minWidth: 310, maxWidth: 400, p: 2 }}>
        <form onSubmit={handleLogin}>
          <FormGroup sx={{ mb: 3 }}>
            <TextField
              id="email"
              type="email"
              variant="standard"
              label="ایمیل"
              value={form.email}
              inputProps={{ "aria-label": "email" }}
              onChange={(e) => handleChange(e, "email")}
              sx={{ mb: 1 }}
            />
            <TextField
              id="password"
              type="password"
              variant="standard"
              label="رمز کاربری"
              value={form.password}
              onChange={(e) => handleChange(e, "password")}
              inputProps={{ "aria-label": "password" }}
              sx={{ mb: 1 }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="آیا اطلاعات ورود ذخیره شود؟"
            />
          </FormGroup>
          <Button variant="contained" type="submit" sx={{ width: "100%" }}>
            Login
          </Button>
        </form>
      </Card>
    </Wrapper>
  )
}
