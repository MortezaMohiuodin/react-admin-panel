import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { deleteUser, getUsers, addUser, getUser, editUser } from "src/api/Index"
import { Button, Box } from "@mui/material"
import { isEqual } from "lodash"

import CustomTable from "src/components/common/CustomTable/Index"
import customTableAction from "src/hoc/customTableAction/Index"
import UserForm from "src/pages/Users/Form/Index"

const columns = [
  { name: "id", label: "شناسه", width: 30 },
  { name: "firstname", label: "نام" },
  { name: "lastname", label: "نام خانوادگی" },
  { name: "email", label: "ایمیل", en: true },
  { name: "actions", label: "عملیات" },
]

const user = {
  id: 12,
  firstname: "morteza",
  lastname: "mohiuodin",
  email: "test@gmail.com",
  password: "1234",
}
const userInit = {
  id: "",
  firstname: "",
  lastname: "",
  email: "",
  password: "",
}

const EnhancedTable = customTableAction(CustomTable)

export default function Users() {
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState(userInit)
  const [selected, setSelected] = useState(null)
  const updateForm = (form, reset) => {
    if (reset) {
      setForm(userInit)
      return
    }
    setForm(form)
  }
  const updateTable = async () => {
    setLoading(true)
    let { data } = await getUsers()
    setRows(data)
    setLoading(false)
  }
  const handleDelete = async () => {
    let data = await deleteUser(selected.id)
    return data
  }
  const handleAdd = async (form) => {
    let data = await addUser(form)
  }
  const handleEdit = async (form) => {
    let { data } = await editUser(form)
    return data
  }
  const getEditData = async (row) => {
    let { data } = await getUser(row.id)
    setForm(data)
    return data
  }
  useEffect(async () => {
    updateTable()
  }, [])

  return (
    <>
      <EnhancedTable
        title="کاربران"
        rows={rows}
        columns={columns}
        loading={loading}
        form={form}
        updateForm={updateForm}
        onUpdate={updateTable}
        onDelete={handleDelete}
        deleteContent={<div>آیا از حذف آیتم مطئنید؟</div>}
        onAdd={handleAdd}
        addContent={<UserForm form={form} updateForm={updateForm} />}
        onEdit={handleEdit}
        editContent={<UserForm form={form} updateForm={updateForm} edit />}
        getEditData={getEditData}
        updateSelected={(item) => setSelected(item)}
      />

      <Outlet />
    </>
  )
}
