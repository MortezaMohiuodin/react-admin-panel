import { Button } from "@mui/material"
import { useState } from "react"
import BasicSnackbar from "src/components/BasicSnackbar/Index"

export default function Test() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Button onClick={() => setOpen(true)}>test</Button>
      <BasicSnackbar
        open={open}
        updateOpen={(value) => setOpen(value)}
        type="success"
        innerProps={{ autoHideDuration: 3000 }}
        AlertProps={{ severity: "success" }}
        message="کاربر با موفقیت ذخیره شد"
      />
    </div>
  )
}
