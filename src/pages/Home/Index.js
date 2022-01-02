import { Grid } from "@mui/material"
import Chart from "src/components/Chart/Index"
import DashboardCard from "src/components/DashboardCard/Index"
import {
  DASHBOARD_SUMMARY_CARDS,
  DASHBOARD_SUMMARY_COUNTS,
} from "src/constants/general/Index"

import {
  GENDER_DATA,
  GENDER_OPTIONS,
  ORDERS_DATA,
  ORDERS_MONTH_DATA,
  ORDERS_MONTH_OPTIONS,
  ORDERS_OPTIONS,
} from "src/constants/charts/Index"

import { Bar } from "react-chartjs-2"
import { Pie } from "react-chartjs-2"

export default function Home() {
  return (
    <Grid container spacing={2}>
      {DASHBOARD_SUMMARY_CARDS.map((card) => (
        <Grid item xs={12} md={6} lg={3} key={card.name}>
          <DashboardCard
            color={card.color}
            title={card.title}
            count={DASHBOARD_SUMMARY_COUNTS[card.name] || "???"}
            icon={card.icon}
          />
        </Grid>
      ))}
      <Grid container item xs={12} md={6} lg={6}>
        <Chart
          data={GENDER_DATA}
          options={GENDER_OPTIONS}
          key="gender_chart"
          Element={Bar}
        />
      </Grid>
      <Grid container item xs={12} md={6} lg={6}>
        <Chart
          data={ORDERS_DATA}
          options={ORDERS_OPTIONS}
          key="order_chart"
          Element={Pie}
        />
      </Grid>
      <Grid container item xs={12} md={12} lg={12}>
        <Chart
          data={ORDERS_MONTH_DATA}
          options={ORDERS_MONTH_OPTIONS}
          key="order_chart"
          Element={Bar}
        />
      </Grid>
    </Grid>
  )
}
