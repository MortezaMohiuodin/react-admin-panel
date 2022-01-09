import { TextField } from "@mui/material"
export default function BasicInput({
  field,
  error,
  value,
  helperText,
  handleChange,
}) {
  return (
    <TextField
      id={field.name}
      label={field?.label}
      fullWidth
      value={value}
      onChange={handleChange}
      error={error}
      helperText={helperText}
      {...field.inputProps}
    />
  )
}
