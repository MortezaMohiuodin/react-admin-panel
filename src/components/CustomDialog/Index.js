import { Dialog, DialogTitle, DialogContent } from "@mui/material"
import LoadingLayout from "../LoadingLayout/Index"

export default function SimpleDialog({
  open,
  onClose,
  onConfirm,
  title,
  loading,
  FormComponent,
  setting,
  action,
  selected,
}) {
  const handleClose = () => {
    onClose()
  }
  const handleConfirm = (form) => {
    onConfirm(form)
  }

  return (
    <Dialog open={open} onClose={handleClose} {...setting}>
      <LoadingLayout loading={loading} />
      <DialogTitle
        sx={{ fontSize: "1.1rem", fontWeight: 500 }}
        id="alert-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent>
        <FormComponent
          edit={action === "edit"}
          selected={selected}
          handleSubmit={handleConfirm}
          handleClose={handleClose}></FormComponent>
      </DialogContent>
    </Dialog>
  )
}
