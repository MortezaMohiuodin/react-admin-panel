import { Chip } from "@mui/material"
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded"
import Time from "src/modules/Time"
import AvatarDropdown from "src/components/AvatarDropdown/Index"
export default function Right() {
  return (
    <>
      <Chip
        color="primary"
        label={Time.now("/")}
        sx={{
          mx: 2,
          typography: "body1",
          display: {
            xs: "none",
            sm: "inline-flex",
            letterSpacing: "2px",
          },
        }}
        icon={<AccessTimeRoundedIcon />}
      />

      <AvatarDropdown />
    </>
  )
}
