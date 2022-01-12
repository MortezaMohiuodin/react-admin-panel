import { useState } from "react"
import TextField from "@mui/material/TextField"
import AdapterJalali from "@date-io/date-fns-jalali"
import DatePicker from "@mui/lab/DatePicker"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import { FormControl, FormHelperText, InputLabel } from "@mui/material"

export default function BasicDatepicker({
  field,
  error,
  value,
  helperText,
  handleChange,
  size,
}) {
  return (
    <FormControl sx={{ width: 1 }}>
      <LocalizationProvider dateAdapter={AdapterJalali}>
        <DatePicker
          mask="____/__/__"
          label={field.label}
          value={value}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField {...params} error={error} size={size} />
          )}
          {...field.inputProps}
        />
      </LocalizationProvider>
      <FormHelperText error>{helperText}</FormHelperText>
    </FormControl>
  )
}
