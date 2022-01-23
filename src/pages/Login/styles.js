import { styled, Grid, Box, Card } from "@mui/material"
import { alpha } from "@mui/material"

export const Wrapper = styled(Grid)({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
})

export const BackgroundImageBlur = (props) => {
  const commonStyle = {
    position: "absolute",
    left: "0",
    right: "0",
    bottom: "0",
    top: "0",
  }
  return (
    <Box
      sx={{
        ...commonStyle,
        background: ` url(${props.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        filter: "blur(10px)",
        transform: "scale(1.1)",
      }}>
      <Box
        style={{
          ...commonStyle,
          backgroundColor: alpha(props.color, 0.6),
        }}></Box>
    </Box>
  )
}

export const LogoImg = styled("img")({
  maxWidth: 200,
  objectFit: "contain",
  display: "block",
  marginRight: "auto",
  marginLeft: "auto",
})

export const LoginCard = styled(Card)({
  minWidth: 310,
  p: 2,
  backgroundColor: alpha("#2545af", 0.3),
  position: "relative",
  width: "100%",
  maxWidth: "500px",
  padding: "3rem 5rem",
})
