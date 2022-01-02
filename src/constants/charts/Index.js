import faker from "faker"

export const TITLE_DEFAULTS = {
  align: "center",
  display: true,
  font: {
    weight: 700,
    size: 16,
    family: "YekanBakh, IranSans",
  },
  fullSize: true,
  padding: 10,
  position: "top",
  text: "",
  weight: 2000,
}

export const GENERAL_OPTIONS = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
    },
  },
}

const GENDER_LABELS = ["خانم", "آقا"]

export const GENDER_DATA = {
  labels: GENDER_LABELS,
  datasets: [
    {
      data: GENDER_LABELS.map(() =>
        faker.datatype.number({ min: 0, max: 100 }),
      ),
      backgroundColor: ["rgba(233, 171, 171,0.7)", "rgba(100 ,134, 255,0.7)"],
    },
  ],
}

export const GENDER_OPTIONS = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
    title: {
      display: true,
      text: "جنسیت کاربران",
    },
  },
}

export const ORDERS_LABELS = ["تلفنی", "حضوری", "اینترنتی", "سایر"]

export const ORDERS_DATA = {
  labels: ORDERS_LABELS,
  datasets: [
    {
      label: "دسته بندی فروش",
      data: ORDERS_LABELS.map(() =>
        faker.datatype.number({ min: 300, max: 1000 }),
      ),
      backgroundColor: [
        "rgba(255, 99, 132, 0.7)",
        "rgba(54, 162, 235, 0.7)",
        "rgba(255, 206, 86, 0.7)",
        "rgba(75, 192, 192, 0.7)",
      ],
    },
  ],
}

export const ORDERS_OPTIONS = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      rtl: true,
      align: "center",
      fullSize: true,
      labels: {
        boxWidth: 10,
        textAlign: "center",
      },
    },
    title: {
      display: true,
      text: "دسته بندی سفارشات",
    },
  },
}

export const ORDERS_MONTH_LABELS = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
]

export const ORDERS_MONTH_DATA = {
  labels: ORDERS_MONTH_LABELS,
  datasets: [
    {
      label: "تلفنی",
      data: ORDERS_MONTH_LABELS.map(() =>
        faker.datatype.number({ min: 0, max: 100 }),
      ),
      backgroundColor: "rgba(255, 99, 132, 0.7)",
    },
    {
      label: "حضوری",
      data: ORDERS_MONTH_LABELS.map(() =>
        faker.datatype.number({ min: 400, max: 500 }),
      ),
      backgroundColor: "rgba(54, 162, 235, 0.7)",
    },
    {
      label: "اینترنتی",
      data: ORDERS_MONTH_LABELS.map(() =>
        faker.datatype.number({ min: 200, max: 700 }),
      ),
      backgroundColor: "rgba(255, 206, 86, 0.7)",
    },
    {
      label: "سایر",
      data: ORDERS_MONTH_LABELS.map(() =>
        faker.datatype.number({ min: 0, max: 120 }),
      ),
      backgroundColor: "rgba(75, 192, 192, 0.7)",
    },
  ],
}

export const ORDERS_MONTH_OPTIONS = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: "bottom",
      rtl: true,
      align: "center",
      fullSize: true,
      labels: {
        boxWidth: 10,
        textAlign: "center",
      },
    },
    title: {
      display: true,
      text: "سفارشات طبق ماه",
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
}
