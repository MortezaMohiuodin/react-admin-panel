import { Box, FormGroup, Grid, TextField, Paper } from "@mui/material"
import { useEffect } from "react"

export default function AddForm({ form, updateForm, edit }) {
  const handleChange = (e) => {
    const targetId = e.target.id
    const value = e.target.value
    updateForm({ ...form, [targetId]: value })
  }
  return (
    <Box sx={{ minWidth: 500, pt: 1 }} component="form">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            fullWidth
            id="firstname"
            label="نام"
            size="medium"
            value={form.firstname}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            fullWidth
            id="lastname"
            label="نام خانوادگی"
            size="medium"
            value={form.lastname}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            fullWidth
            id="email"
            label="ایمیل"
            size="medium"
            value={form.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            fullWidth
            id="password"
            label="رمز عبور"
            size="medium"
            value={form.password}
            onChange={handleChange}
            type="password"
          />
        </Grid>
      </Grid>
    </Box>
  )
}
