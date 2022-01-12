import * as yup from "yup"
import { useFormik } from "formik"
import { Button, Grid, TextField } from "@mui/material"
import LoadingLayout from "../LoadingLayout/Index"
import BasicInput from "./BasicInput/Index"
import BasicSelect from "./BasicSelect/Index"
import BasicRadio from "./BasicRadio/Index"
import BasicSwitch from "./BasicSwitch/Index"
import BasicDatepicker from "./BasicDatepicker/Index"
import BasicUpload from "./BasicUpload/Index"

export default function BasicForm({
  fields,
  form,
  loading,
  noButtons,
  handleSubmit,
  handleClose,
}) {
  const validationSchema = () => {
    let schema = {}
    fields.forEach((field) => {
      schema[field.name] = field.schema
    })
    return yup.object(schema)
  }
  const formik = useFormik({
    initialValues: form,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values)
    },
  })
  const getFieldInput = (field) => {
    if (field?.type === "input")
      return (
        <BasicInput
          field={field}
          value={formik.values[field?.name]}
          handleChange={formik.handleChange}
          error={
            formik.touched[field?.name] && Boolean(formik.errors[field?.name])
          }
          helperText={formik.touched[field?.name] && formik.errors[field?.name]}
        />
      )
    if (field?.type === "select")
      return (
        <BasicSelect
          field={field}
          value={formik.values[field?.name]}
          handleChange={formik.handleChange}
          error={
            formik.touched[field?.name] && Boolean(formik.errors[field?.name])
          }
          helperText={formik.touched[field?.name] && formik.errors[field?.name]}
        />
      )
    if (field?.type === "radio")
      return (
        <BasicRadio
          field={field}
          value={formik.values[field?.name]}
          handleChange={formik.handleChange}
          error={
            formik.touched[field?.name] && Boolean(formik.errors[field?.name])
          }
          helperText={formik.touched[field?.name] && formik.errors[field?.name]}
        />
      )
    if (field?.type === "switch")
      return (
        <BasicSwitch
          field={field}
          value={formik.values[field?.name]}
          handleChange={formik.handleChange}
          error={
            formik.touched[field?.name] && Boolean(formik.errors[field?.name])
          }
          helperText={formik.touched[field?.name] && formik.errors[field?.name]}
        />
      )
    if (field?.type === "datepicker")
      return (
        <BasicDatepicker
          field={field}
          value={formik.values[field?.name]}
          handleChange={(value) => formik.setFieldValue(field?.name, value)}
          error={
            formik.touched[field?.name] && Boolean(formik.errors[field?.name])
          }
          helperText={formik.touched[field?.name] && formik.errors[field?.name]}
        />
      )
    if (field?.type === "uploadImage")
      return (
        <BasicUpload
          field={field}
          value={formik.values[field?.name]}
          handleChange={(value) => formik.setFieldValue(field?.name, value)}
          error={
            formik.touched[field?.name] && Boolean(formik.errors[field?.name])
          }
          helperText={formik.touched[field?.name] && formik.errors[field?.name]}
        />
      )
    return <TextField />
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <LoadingLayout loading={loading} />
      <Grid container spacing={2}>
        {fields.map((field) => {
          if (typeof form[field.name] === "undefined") return
          const FieldInput = getFieldInput(field)
          return (
            <Grid item xs={12} md={field.col || 6} key={field.name}>
              {FieldInput}
            </Grid>
          )
        })}
      </Grid>
      {!noButtons && (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="medium"
            sx={{ mx: 1 }}>
            اعمال
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="medium"
            sx={{ mx: 1 }}
            onClick={handleClose}>
            لغو
          </Button>
        </div>
      )}
    </form>
  )
}
