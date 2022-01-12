export const columns = [
  { name: "id", label: "شناسه", width: 30 },
  {
    name: "fullname",
    label: "نام کامل",
    output: (row) => row.firstname + " " + row.lastname,
  },
  { name: "email", label: "ایمیل", en: true },
  {
    name: "gender",
    label: "جنسیت",
    output: (row) => (row.gender === "0" || row.gender === 0 ? "مرد" : "زن"),
  },
  {
    name: "admin",
    label: "نقش",
    output: (row) => (row.admin ? " ادمین" : "کاربر عادی"),
  },
  { name: "actions", label: "عملیات" },
]
