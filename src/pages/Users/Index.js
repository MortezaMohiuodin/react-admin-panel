import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { deleteUser, getUsers } from "src/api/Index"
import { Button, IconButton } from "@mui/material"
import LoadingButton from "@mui/lab/LoadingButton"
import DeleteIcon from "@mui/icons-material/Delete"

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
  const [selected, setSelected] = useState(null)
  const [loading, setLoading] = useState(false)
  const [modalLoading, setModalLoading] = useState(false)

  const updateTable = async () => {
    setLoading(true)
    let { data } = await getUsers()
    let rows = data.map((row) => {
      return {
        ...row,
        action: <Actions row={row} />,
      }
    })
    setRows(rows)
    setLoading(false)
  }
  useEffect(async () => {
    updateTable()
  }, [])
  const handleDeleteAction = (row) => {
    setSelected(row)
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
  const Actions = ({ row }) => {
    return (
      <IconButton onClick={() => handleDeleteAction(row)}>
        <DeleteIcon sx={{ color: "error.light" }} />
      </IconButton>
    )
  }
  const handleClose = () => {
    setOpenModal(false)
    setSelected(null)
  }
  const DeleteActions = () => {
    return (
      <>
        <LoadingButton
          onClick={handleDelete}
          color="error"
          variant="contained"
          loading={modalLoading}
          size="small">
          حذف
        </LoadingButton>
        <Button onClick={handleClose} autoFocus size="small">
          لغو
        </Button>
      </>
    )
  }
  return (
    <>
      <CustomTable
        title="کاربران"
        rows={rows}
        columns={columns}
        loading={loading}
      />
      <SimpleDialog
        open={openModal}
        onClose={handleClose}
        title="حذف کاربر"
        actions={<DeleteActions />}>
        آیا از حذف کاربر مطمئن هستید؟
      </SimpleDialog>
      <Outlet />
    </>
  )
}

// Todo make a table component with add delete and edit
