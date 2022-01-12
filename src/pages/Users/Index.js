import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { deleteUser, getUsers, addUser, getUser, editUser } from "src/api/Index"

import CustomTable from "src/components/common/CustomTable/Index"
import customTableAction from "src/hoc/customTableAction/Index"
import UserForm from "src/pages/Users/Form/Index"
import DialogContentDelete from "./DialogContentDelete/Index"

import { columns } from "./constant"

const EnhancedTable = customTableAction(CustomTable)

export default function Users() {
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(false)
  const [multiSelect, setMultiSelect] = useState([])

  const updateTable = async () => {
    setLoading(true)
    let { data } = await getUsers()
    setRows(data)
    setLoading(false)
  }
  const handleDelete = async (row) => {
    let data = await deleteUser(row.id)
    return data
  }
  const handleAdd = async (form) => {
    let { cPassword, ...other } = form
    let data = await addUser(other)
  }
  const handleEdit = async (form) => {
    let { data } = await editUser(form)
    return data
  }

  const updateMultiSelect = (value) => {
    setMultiSelect(value)
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
        onUpdate={updateTable}
        onDelete={handleDelete}
        deleteContent={DialogContentDelete}
        onAdd={handleAdd}
        addContent={UserForm}
        onEdit={handleEdit}
        editContent={UserForm}
        multiSelect={multiSelect}
        updateMultiSelect={updateMultiSelect}
      />

      <Outlet />
    </>
  )
}

// TODO make customTableAction independent of action
