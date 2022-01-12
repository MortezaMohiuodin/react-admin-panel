import * as yup from "yup"

export const fields = [
  {
    name: "firstname",
    label: "نام",
    type: "input",
    col: 6,
    schema: yup.string(),
    inputProps: {},
  },
  {
    name: "lastname",
    label: "نام خانوادگی",
    type: "input",
    col: 6,
    schema: yup.string(),
    inputProps: {},
  },
  {
    name: "email",
    label: "ایمیل",
    type: "input",
    col: 6,
    schema: yup.string().email("ایمیل وارد شده معتبر نیست"),
  },
  {
    name: "gender",
    label: "جنسیت",
    type: "select",
    options: [
      { label: "آقا", value: "0" },
      { label: "خانم", value: "1" },
    ],
    col: 6,
    schema: yup.string(),
  },
  {
    name: "password",
    label: "رمز کاربری",
    type: "input",
    col: 6,
    schema: yup.string(),
    inputProps: {
      type: "password",
    },
  },
  {
    name: "cPassword",
    label: "تکرار رمز کاربری",
    type: "input",
    col: 6,
    schema: yup
      .string()
      .oneOf(
        [yup.ref("password"), null],
        "تکرار رمز کاربری باید برابر با رمز کاربری باشد",
      ),
    inputProps: {
      type: "password",
    },
  },
  {
    name: "birthdate",
    label: "تاریخ تولد",
    type: "datepicker",
    col: 6,
    schema: yup.string(),
    inputProps: {
      clearable: true,
      openTo: "day",
    },
  },
  {
    col: 6,
    type: "empty",
  },
  {
    name: "maritalStatus",
    label: "وضعیت تاهل",
    type: "radio",
    options: [
      { label: "متاهل", value: "1" },
      { label: "مجرد", value: "0" },
    ],
    col: 6,
    schema: yup.string(),
  },
  {
    name: "admin",
    label: "نقش ادمین",
    type: "switch",
    col: 6,
    schema: yup.boolean(),
  },
]

const userCommonInit = {
  firstname: "",
  lastname: "",
  gender: "",
  email: "",
  birthdate: "",
  maritalStatus: "",
  admin: false,
  avatar: "",
  city: "",
  province: "",
  address: "",
}

export const userNewInit = {
  ...userCommonInit,
  password: "",
  cPassword: "",
}

export const userEditInit = {
  ...userCommonInit,
  password: "",
  confirmPassword: "",
}
