import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material"
export default function Input({
  field,
  value,
  error,
  handleChange,
  helperText,
  size,
}) {
  return (
    <FormControl sx={{ width: 1 }}>
      <InputLabel id={field.name}>{field.label}</InputLabel>
      <Select
        labelId={field.name}
        label={field?.label}
        value={value}
        fullWidth
        onChange={handleChange}
        inputProps={{
          name: field.name,
          id: field.name,
        }}
        size={size}
        error={error}>
        {field.options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText error>{helperText}</FormHelperText>
    </FormControl>
  )
}
