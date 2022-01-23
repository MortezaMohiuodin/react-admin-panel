import { useState } from "react"
import { ThemeProvider } from "@mui/material"
import { Box, TextField, FormGroup, Button, alpha } from "@mui/material"
import { useFormik } from "formik"
import { validationSchema, INIT_FORM, loginTheme } from "./constant"
import LoadingButton from "@mui/lab/LoadingButton"

export default function LoginForm({ handleSubmit, handleUpdate }) {
  const [loading, setLoading] = useState(false)
  const formik = useFormik({
    initialValues: { ...INIT_FORM },
    validationSchema,
    onSubmit: (values) => {
      setLoading(true)
      handleSubmit(values).finally(() => {
        setLoading(false)
      })
    },
  })
  const handleChange = (e) => {
    let targetId = e.target.id
    let value = e.target.value
    if (targetId in formik.values) {
      formik.setFieldValue(targetId, value)
      handleUpdate(formik.values)
    }
  }
  return (
    <ThemeProvider theme={loginTheme}>
      <Box component="form" onSubmit={formik.handleSubmit}>
        <FormGroup sx={{ mb: 3 }}>
          <TextField
            id="email"
            type="email"
            label="ایمیل"
            variant="standard"
            value={formik.email}
            error={formik.touched["email"] && Boolean(formik.errors["email"])}
            helperText={formik.touched["email"] && formik.errors["email"]}
            onChange={handleChange}
            size={"small"}
            sx={{ mb: 2 }}
          />
          <TextField
            id="password"
            type="password"
            variant="standard"
            label="رمز کاربری"
            value={formik.password}
            error={
              formik.touched["password"] && Boolean(formik.errors["password"])
            }
            helperText={formik.touched["password"] && formik.errors["password"]}
            onChange={handleChange}
            size={"small"}
          />
        </FormGroup>
        <LoadingButton
          variant="contained"
          type="submit"
          fullWidth
          color="white"
          size="small"
          loading={loading}
          sx={{
            fontSize: "1.1rem",
            "&:hover": {
              backgroundColor: alpha("#fff", 0.9),
            },
          }}>
          ورود
        </LoadingButton>
      </Box>
    </ThemeProvider>
  )
}
