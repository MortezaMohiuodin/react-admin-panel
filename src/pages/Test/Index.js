import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { deleteUser, getUsers, addUser } from "src/api/Index"
import { Button, Box, TextField } from "@mui/material"
import { isEqual } from "lodash"

import CustomTable from "src/components/common/CustomTable/Index"
import customTableAction from "src/hoc/customTableAction/Index"
import AddForm from "src/pages/Users/AddForm/Index"

const user = {
  id: 12,
  firstname: "morteza",
  lastname: "mohiuodin",
  email: "test@gmail.com",
  password: "1234",
}

export default function Test() {
  const [form, setForm] = useState(user)
  const updateForm = (innerForm) => {
    setForm(innerForm)
  }
  return (
    <Box>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Box>
  )
}
