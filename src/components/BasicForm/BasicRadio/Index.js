import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@mui/material"
export default function BasicRadio({
  field,
  value,
  handleChange,
  error,
  helperText,
}) {
  return (
    <FormControl component="fieldset" error={error}>
      <FormLabel component="legend">{field.label}</FormLabel>
      <RadioGroup
        id={field.name}
        aria-label={field.name}
        name={field.name}
        value={value}
        onChange={handleChange}>
        {field.options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
      <FormHelperText error>{helperText}</FormHelperText>
    </FormControl>
  )
}
