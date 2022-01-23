import { Box, Button, Container } from "@mui/material"
import { styled } from "@mui/material/styles"
import { fontSize } from "@mui/system"

const CustomButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    backgroundColor: "red",
  },
}))

export default function Test() {
  return (
    <Container fixed sx={{ backgroundColor: "black" }}>
      <CustomButton variant="contained">button</CustomButton>
    </Container>
  )
}
