import { useState, useMemo } from "react"
import { IconButton, Box, Button } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import AddIcon from "@mui/icons-material/Add"
import EditIcon from "@mui/icons-material/Edit"

import CustomDialog from "src/components/CustomDialog/Index"

export default function customTableAction(TableComponent) {
  return (props) => {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [action, setAction] = useState(null)
    const [dialogSelected, setDialogSelected] = useState(null)

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

    const handleConfirm = (values) => {
      switch (action) {
        case "delete":
          props.onDelete().then(() => {
            handleClose()
            props.onUpdate()
          })
          break
        case "add":
          props.onAdd(values).then(() => {
            handleClose()
            props.onUpdate()
          })
          break
        case "edit":
          props.onEdit(values).then(() => {
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
    }
    const handleDeleteAction = (row) => {
      setAction("delete")
      setDialogSelected(row)
      setOpen(true)
    }
    const handleAddAction = () => {
      setAction("add")
      setDialogSelected(null)
      setOpen(true)
    }
    const handleEditAction = (row) => {
      setAction("edit")
      setDialogSelected(row)
      setOpen(true)
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
    const deleteAllAction = () => {
      console.log("deleteAll")
    }
    return (
      <>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          {typeof props.onAdd === "function" && <AddButton />}
        </Box>
        <TableComponent
          {...props}
          rows={rows}
          deleteAllAction={deleteAllAction}
        />

        <CustomDialog
          open={open}
          onClose={handleClose}
          onConfirm={handleConfirm}
          title={dialogTitle}
          loading={loading}
          FormComponent={
            action === "add"
              ? props.addContent
              : action === "delete"
              ? props.deleteContent
              : props.editContent
          }
          selected={dialogSelected}
          action={action}></CustomDialog>
      </>
    )
  }
}
