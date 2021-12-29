import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@mui/material"

export default function SimpleDialog({
  open,
  onClose,
  title,
  actions,
  children,
}) {
  const handleClose = () => {
    onClose()
  }
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{ fontSize: "1rem" }} id="alert-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {children}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
        {actions}
      </DialogActions>
    </Dialog>
  )
}
