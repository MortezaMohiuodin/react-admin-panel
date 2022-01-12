import {
  Switch,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  FormControl,
} from "@mui/material"
export default function BasicSwitch({
  field,
  value,
  helperText,
  handleChange,
  size,
}) {
  return (
    <FormControl>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={value}
              onChange={handleChange}
              inputProps={{ id: field.name, name: field.name }}
              size={size}
            />
          }
          label={field.label}
        />
      </FormGroup>
      <FormHelperText error>{helperText}</FormHelperText>
    </FormControl>
  )
}
