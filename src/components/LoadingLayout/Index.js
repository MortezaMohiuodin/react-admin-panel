import { Box, CircularProgress } from "@mui/material"
import { alpha } from "@mui/material"

export default function LoadingLayout({ loading }) {
  return (
    <Box
      sx={{
        display: loading ? "flex" : "none",
        zIndex: "tooltip",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: alpha("#fff", 0.5),
      }}>
      <CircularProgress />
    </Box>
  )
}
