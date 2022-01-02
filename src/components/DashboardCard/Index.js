import { Box, Card, Grid, Typography } from "@mui/material"
export default function DashboardCard({ title, icon, count, color }) {
  return (
    <Card elevation={2} sx={{ p: 2 }}>
      <Grid container>
        <Grid item xs={9}>
          <Typography
            align="left"
            variant="subtitle2"
            sx={{ color: "text.secondary" }}>
            {title}:
          </Typography>
          <Typography align="left" variant="h5" sx={{ fontWeight: 500 }}>
            {count}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Box
            sx={{
              backgroundColor: color,
              color: "white",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 50,
              height: 50,
              marginLeft: "auto",
            }}>
            {icon}
          </Box>
        </Grid>
      </Grid>
    </Card>
  )
}
