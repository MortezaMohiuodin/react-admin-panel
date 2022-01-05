import { useState, useMemo } from "react"
import CustomDialog from "src/components/CustomDialog/Index"
import { IconButton, Box, Button, Dialog } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import AddIcon from "@mui/icons-material/Add"
import EditIcon from "@mui/icons-material/Edit"

export default function customTableAction(TableComponent) {
  return (props) => {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [confirmLoading, setConfirmLoading] = useState(false)
    const [action, setAction] = useState(null)

    let type = useMemo(() => {
      let result = "primary"
      switch (action) {
        case "delete":
          result = "warning"
          break
        case "add":
          result = "primary"
          break
        case "edit":
          result = "primary"
          break
      }
      return result
    }, [action])

    let dialogTitle = useMemo(() => {
      let result = ""
      switch (action) {
        case "delete":
          result = "حذف"
          break
        case "add":
          result = "افزودن"
          break
        case "edit":
          result = "ویرایش"
          break
      }
      return result
    }, [action])

    const handleConfirm = () => {
      setConfirmLoading(true)
      switch (action) {
        case "delete":
          props.onDelete().then(() => {
            setConfirmLoading(false)
            handleClose()
            props.onUpdate()
          })
          break
        case "add":
          props.onAdd(props.addContent.props.form).then(() => {
            setConfirmLoading(false)
            handleClose()
            props.onUpdate()
          })
          break
        case "edit":
          props.onEdit(props.form).then(() => {
            setConfirmLoading(false)
            handleClose()
            props.onUpdate()
          })
          break
        default:
          break
      }
    }
    const handleClose = () => {
      setOpen(false)
      props.updateForm({}, true)
    }
    const handleDeleteAction = (row) => {
      setAction("delete")
      props.updateSelected(row)
      setOpen(true)
    }
    const handleAddAction = () => {
      setAction("add")
      props.updateSelected(null)
      setOpen(true)
    }
    const handleEditAction = (row) => {
      props.updateSelected(null)
      setLoading(true)
      setAction("edit")
      setOpen(true)
      props.getEditData(row).then(() => {
        setLoading(false)
      })

      props.updateSelected(row)
    }
    const TableActions = ({ row }) => {
      const Delete = () => (
        <IconButton onClick={() => handleDeleteAction(row)}>
          <DeleteIcon sx={{ color: "error.light" }} />
        </IconButton>
      )
      const Edit = () => (
        <IconButton onClick={() => handleEditAction(row)}>
          <EditIcon sx={{ color: "primary.light" }} />
        </IconButton>
      )

      return (
        <>
          {typeof props.onDelete === "function" && <Delete />}
          {typeof props.onEdit === "function" && <Edit />}
        </>
      )
    }
    let rows = useMemo(() => {
      return props.rows.map((row) => {
        return {
          ...row,
          actions: <TableActions row={row} />,
        }
      })
    }, [props.rows])
    const AddButton = () => (
      <Button
        color="success"
        variant="contained"
        size="small"
        startIcon={<AddIcon />}
        onClick={handleAddAction}>
        افزودن کاربر
      </Button>
    )

    return (
      <>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          {typeof props.onAdd === "function" && <AddButton />}
        </Box>
        <TableComponent {...props} rows={rows} />

        <CustomDialog
          open={open}
          onClose={handleClose}
          onConfirm={handleConfirm}
          title={dialogTitle}
          type={type}
          loading={loading}
          confirmLoading={confirmLoading}>
          {action === "add" && props.addContent}
          {action === "delete" && props.deleteContent}
          {action === "edit" && props.editContent}
        </CustomDialog>
      </>
    )
  }
}
