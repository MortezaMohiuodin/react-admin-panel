import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material"
import LoadingButton from "@mui/lab/LoadingButton"
import LoadingLayout from "../LoadingLayout/Index"

export default function SimpleDialog({
  open,
  onClose,
  onConfirm,
  title,
  children,
  type,
  loading,
  confirmLoading,
  setting,
}) {
  const handleClose = () => {
    onClose()
  }
  const handleConfirm = () => {
    onConfirm()
  }
  return (
    <Dialog open={open} onClose={handleClose} {...setting}>
      <LoadingLayout loading={loading} />
      <DialogTitle sx={{ fontSize: "1rem" }} id="alert-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
        <LoadingButton
          onClick={handleConfirm}
          color={type}
          variant="contained"
          loading={confirmLoading}
          size="small">
          تایید
        </LoadingButton>
        <Button onClick={handleClose} autoFocus size="small">
          لغو
        </Button>
      </DialogActions>
    </Dialog>
  )
}
