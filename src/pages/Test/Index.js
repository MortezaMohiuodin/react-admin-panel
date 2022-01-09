import { useState } from "react"
import * as yup from "yup"

import { Box } from "@mui/material"
import BasicForm from "src/components/BasicForm/Index"

const initForm = {
  firstname: "",
  gender: "",
  maritalStatus: "",
  admin: false,
  birthdate: "",
  avatar: "",
}
const fields = [
  {
    name: "firstname",
    label: "نام",
    type: "input",
    col: 6,
    schema: yup.string().required("نام الزامی است"),
    inputProps: {},
  },
  {
    name: "gender",
    label: "جنسیت",
    type: "select",
    options: [
      { label: "آقا", value: "male" },
      { label: "خانم", value: "female" },
    ],
    col: 6,
    schema: yup.string().required("جنسیت الزامی است"),
  },
  {
    name: "maritalStatus",
    label: "وضعیت تاهل",
    type: "radio",
    options: [
      { label: "متاهل", value: "married" },
      { label: "مجرد", value: "single" },
    ],
    col: 6,
    schema: yup.string().required("وضعیت تاهل الزامی است"),
  },
  {
    name: "admin",
    label: "نقش ادمین",
    type: "switch",
    col: 6,
    schema: yup.boolean().required("وضعیت نقش الزامی است"),
  },
  {
    name: "birthdate",
    label: "تاریخ تولد",
    type: "datepicker",
    col: 6,
    schema: yup.string().required("تاریخ تولد الزامی است").nullable(),
    inputProps: {
      clearable: true,
    },
  },
  {
    name: "avatar",
    label: "عکس آواتار",
    type: "uploadImage",
    col: 12,
    schema: yup.string().required("عکس آواتار الزامی است").nullable(),
  },
]

export default function Test() {
  const [form, setForm] = useState(initForm)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (values) => {
    console.log(values)
  }

  return (
    <Box sx={{ maxWidth: 600, margin: "3rem auto" }}>
      <BasicForm
        fields={fields}
        form={form}
        submitForm={handleSubmit}
        loading={loading}
        updateLoading={(value) => setLoading(!!value)}
      />
    </Box>
  )
}
