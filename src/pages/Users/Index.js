import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import CustomTable from "src/components/common/CustomTable/Index"
import { getUsers } from "src/api/Index"

const columns = [
  { name: "id", label: "شناسه", width: 30 },
  { name: "firstname", label: "نام" },
  { name: "lastname", label: "نام خانوادگی" },
  { name: "email", label: "ایمیل", en: true },
]

export default function Users() {
  const [rows, setRows] = useState([])

  useEffect(async () => {
    let { data } = await getUsers()
    setRows(data)
  }, [])
  return (
    <>
      <CustomTable title="کاربران" rows={rows} columns={columns} />
      <Outlet />
    </>
  )
}

// Todo make a table component with add delete and edit
