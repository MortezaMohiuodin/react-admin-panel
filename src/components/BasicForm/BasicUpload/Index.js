import { useState } from "react"
import { blue, grey } from "@mui/material/colors"
import {
  Input,
  Button,
  Avatar,
  Box,
  styled,
  IconButton,
  FormHelperText,
  FormControl,
  InputLabel,
} from "@mui/material"
import UploadIcon from "@mui/icons-material/Upload"
import EditIcon from "@mui/icons-material/Edit"
import { alpha } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
const labelStyle = {
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
}

const AvatarWrapper = styled("span")({
  display: "inline-block",
  position: "relative",
})

export default function BasicUpload({
  field,
  value,
  error,
  handleChange,
  helperText,
}) {
  const [src, setSrc] = useState(value)
  const innerChange = (value) => {
    let image = value.target.files[0]
    let src = URL.createObjectURL(image)
    setSrc(src)
    handleChange(image)
  }
  const handleDelete = () => {
    setSrc(null)
    handleChange(null)
  }
  return (
    <>
      <InputLabel id={field.name}>{field.label}</InputLabel>
      <AvatarWrapper>
        <Avatar
          alt="avatar"
          src={src}
          sx={{ width: 100, height: 100, bgcolor: grey[400] }}>
          <label htmlFor={`button-file-${field.name}`} style={labelStyle}>
            <Input
              accept="image/*"
              id={`button-file-${field.name}`}
              multiple
              type="file"
              sx={{ display: "none" }}
              onChange={innerChange}
            />
            <UploadIcon sx={{ fontSize: 45 }} />
          </label>
        </Avatar>
        {src && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0,
              "&:hover": {
                bgcolor: alpha(grey[700], 0.8),
                opacity: 1,
              },
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <IconButton size="large" onClick={handleDelete}>
              <DeleteIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
        )}
      </AvatarWrapper>
      <FormHelperText error>{helperText}</FormHelperText>
    </>
  )
}
