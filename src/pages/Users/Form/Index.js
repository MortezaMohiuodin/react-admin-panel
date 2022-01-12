import { Box } from "@mui/material"
import { useState, useEffect } from "react"
import { getUser } from "src/api/Index"
import BasicForm from "src/components/BasicForm/Index"
import LoadingLayout from "src/components/LoadingLayout/Index"
import { fields, userNewInit, userEditInit } from "./constant"

export default function Form({ edit, selected, handleSubmit, handleClose }) {
  const getInitForm = () => {
    return !selected ? userNewInit : null
  }
  const [form, setForm] = useState(getInitForm)

  const [loading, setLoading] = useState(false)
  const getEditData = async (row) => {
    let { data } = await getUser(row.id)
    return data
  }
  const updateEditForm = (data) => {
    let object = userEditInit
    for (let key in data) {
      if (typeof object[key] !== undefined) {
        object[key] = data[key]
      }
    }
    setForm(object)
  }
  useEffect(() => {
    if (selected && edit) {
      setLoading(true)
      getEditData(selected).then((data) => {
        setLoading(false)
        updateEditForm(data)
      }, 2000)
    }
    return () => {}
  }, [selected, edit])
  const handle = (values) => {
    handleSubmit(values)
  }
  return (
    <Box sx={{ minWidth: 500, minHeight: 500, pt: 1 }}>
      {form && (
        <>
          <LoadingLayout loading={loading} />
          <BasicForm
            fields={fields}
            form={form}
            loading={loading}
            updateLoading={(value) => setLoading(!!value)}
            handleSubmit={handle}
            handleClose={handleClose}
            size="medium"
          />
        </>
      )}
    </Box>
  )
}
