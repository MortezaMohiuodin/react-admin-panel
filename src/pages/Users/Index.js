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
  const [loading, setLoading] = useState(false)
  useEffect(async () => {
    setLoading(true)
    let { data } = await getUsers()
    setRows(data)
    setLoading(false)
  }, [])
  return (
    <>
      <CustomTable
        title="کاربران"
        rows={rows}
        columns={columns}
        loading={loading}
      />
      <Outlet />
    </>
  )
}

// Todo make a table component with add delete and edit
