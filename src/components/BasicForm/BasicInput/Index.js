import { TextField } from "@mui/material"
export default function BasicInput({
  field,
  error,
  value,
  helperText,
  handleChange,
  size,
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
      size={size}
      {...field.inputProps}
    />
  )
}
