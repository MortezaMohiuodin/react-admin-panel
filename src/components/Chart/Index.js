import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js"
import { TITLE_DEFAULTS } from "src/constants/charts/Index"

import { Card } from "@mui/material"

Title["defaults"] = TITLE_DEFAULTS
ChartJS.defaults.font.family = "YekanBakh, IranSans"
ChartJS.defaults.font.size = 14
ChartJS.defaults.font.weight = 500

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
)

export default function Chart({ Element, options, data }) {
  return (
    <Card elevation={2} sx={{ p: 2, flexGrow: 1, minHeight: 300 }}>
      <Element options={options} data={data} />
    </Card>
  )
}
