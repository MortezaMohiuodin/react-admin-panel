import { useState, useEffect, forwardRef } from "react"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert from "@mui/material/Alert"
import LinearProgress from "@mui/material/LinearProgress"

export default function BasicSnackbar({
  open,
  updateOpen,
  alertProps,
  innerProps,
  message,
  duration,
  type,
}) {
  const [progress, setProgress] = useState(0)
  const handleClose = (event, reason) => {
    if (reason === "clickaway") return
    updateOpen(false)
  }
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0
        }
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 100)
      })
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])
  const Alert = forwardRef((props, ref) => (
    <MuiAlert elevation={3} variant="filled" {...props} ref={ref} />
  ))
  return (
    <Snackbar
      open={open}
      {...innerProps}
      onClose={handleClose}
      autoHideDuration={duration}>
      <Alert
        onClose={handleClose}
        {...alertProps}
        severity={type}
        sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  )
}
