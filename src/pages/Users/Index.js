import { useEffect, useMemo, useState } from "react"
import { Outlet } from "react-router-dom"
import { deleteUser, getUsers } from "src/api/Index"
import { Button, IconButton, Box, Typography } from "@mui/material"
import LoadingButton from "@mui/lab/LoadingButton"
import DeleteIcon from "@mui/icons-material/Delete"
import AddIcon from "@mui/icons-material/Add"

import CustomTable from "src/components/common/CustomTable/Index"
import SimpleDialog from "src/components/common/SimpleDialog/Index"

const columns = [
  { name: "id", label: "شناسه", width: 30 },
  { name: "firstname", label: "نام" },
  { name: "lastname", label: "نام خانوادگی" },
  { name: "email", label: "ایمیل", en: true },
  { name: "action", label: "عملیات" },
]

export default function Users() {
  const [rows, setRows] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [modalType, setModalType] = useState("delete")
  const [selected, setSelected] = useState(null)
  const [loading, setLoading] = useState(false)
  const [modalLoading, setModalLoading] = useState(false)

  const modalContent = useMemo(() => {
    let content = {}
    switch (modalType) {
      case "delete":
        content = {
          title: "حذف کاربر",
          onConfirm: handleDelete,
          mainButtonTitle: "حذف",
          type: "warning",
          body: "آیا از حذف کابر مطمئن هستید؟",
        }
        break
      case "add":
        content = {
          title: "افزودن کاربر",
          onConfirm: handleAdd,
          type: "success",
          mainButtonTitle: "افزودن",
          body: "آیا از حذف کابر مطمئن هستید؟",
        }
        break
      default:
        break
    }
    return content
  }, [modalType])

  const handleClose = () => {
    setOpenModal(false)
    setSelected(null)
  }
  const handleDeleteAction = (row) => {
    setModalType("delete")
    setSelected(row)
    setOpenModal(true)
  }
  const handleAddAction = () => {
    setModalType("add")
    setSelected(null)
    setOpenModal(true)
  }
  const handleDelete = async () => {
    if (!selected) return
    setModalLoading(true)
    await deleteUser(selected.id)
    setTimeout(() => {
      handleClose()
      updateTable()
      setModalLoading(false)
    }, 1000)
  }
  const handleAdd = () => {
    console.log("add")
  }
  const updateTable = async () => {
    setLoading(true)
    let { data } = await getUsers()
    let rows = data.map((row) => {
      return {
        ...row,
        action: <TableActions row={row} />,
      }
    })
    setRows(rows)
    setLoading(false)
  }
  useEffect(async () => {
    updateTable()
  }, [])

  const TableActions = ({ row }) => {
    return (
      <IconButton onClick={() => handleDeleteAction(row)}>
        <DeleteIcon sx={{ color: "error.light" }} />
      </IconButton>
    )
  }

  const ActionsModal = ({ onConfirm, type, mainButtonTitle }) => {
    return (
      <>
        <LoadingButton
          onClick={onConfirm}
          color={type}
          variant="contained"
          loading={modalLoading}
          size="small">
          {mainButtonTitle}
        </LoadingButton>
        <Button onClick={handleClose} autoFocus size="small">
          لغو
        </Button>
      </>
    )
  }
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <Button
          color="success"
          variant="contained"
          onClick={handleAddAction}
          size="small"
          startIcon={<AddIcon />}>
          افزودن کاربر
        </Button>
      </Box>

      <CustomTable
        title="کاربران"
        rows={rows}
        columns={columns}
        loading={loading}
      />
      <SimpleDialog
        open={openModal}
        onClose={handleClose}
        title={modalContent.title}
        actions={
          <ActionsModal
            onConfirm={modalContent.onConfirm}
            type={modalContent.type}
            mainButtonTitle={modalContent.mainButtonTitle}
          />
        }>
        {modalContent.body}
      </SimpleDialog>
      <Outlet />
    </>
  )
}

// Todo make a table component with add delete and edit
