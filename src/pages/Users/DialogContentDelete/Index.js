import { LoadingButton } from "@mui/lab"
import { Typography, Box, Button } from "@mui/material"

export default function DialogContentConfirm({ handleSubmit, handleClose }) {
  return (
    <Box>
      <Typography>آیا از حذف کاربر مطئین هستید؟</Typography>
      <Box mt={2}>
        <LoadingButton
          variant="contained"
          color="error"
          size="small"
          onClick={handleSubmit}>
          حذف
        </LoadingButton>
        <Button size="small" onClick={handleClose}>
          لغو
        </Button>
      </Box>
    </Box>
  )
}
