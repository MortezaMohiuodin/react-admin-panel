import * as yup from "yup"

export const fields = [
  {
    name: "firstname",
    label: "نام",
    type: "input",
    col: 6,
    schema: yup.string().required("نام الزامی است"),
    inputProps: {},
  },
  {
    name: "lastname",
    label: "نام خانوادگی",
    type: "input",
    col: 6,
    schema: yup.string().required("نام خانوادگی الزامی است"),
    inputProps: {},
  },
  {
    name: "email",
    label: "ایمیل",
    type: "input",
    col: 6,
    schema: yup.string().email().required("ایمیل الزامی است"),
  },
  {
    name: "password",
    label: "رمز کاربری",
    type: "input",
    col: 6,
    schema: yup.string().required("ایمیل الزامی است"),
    inputProps: {
      type: "password",
    },
  },
  // {
  //   name: "confirmPassowrd",
  //   label: "تکرار رمز کاربری",
  //   type: "input",
  //   col: 6,
  //   schema: yup.string().required("تکرار رمز کاربری الزامی است"),
  //   inputProps: {
  //     type: "password",
  //   },
  // },
  {
    name: "gender",
    label: "جنسیت",
    type: "select",
    options: [
      { label: "آقا", value: "0" },
      { label: "خانم", value: "1" },
    ],
    col: 6,
    schema: yup.string().required("جنسیت الزامی است"),
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
    schema: yup.string().required("وضعیت تاهل الزامی است"),
  },
  {
    name: "admin",
    label: "نقش ادمین",
    type: "switch",
    col: 6,
    schema: yup.boolean().required("وضعیت نقش الزامی است"),
  },

  {
    name: "avatar",
    label: "عکس آواتار",
    type: "uploadImage",
    col: 12,
    schema: yup.string().required("عکس آواتار الزامی است").nullable(),
  },
]

const userCommonInit = {
  firstname: "",
  lastname: "",
  gender: "",
  maritalStatus: "",
  admin: false,
  birthdate: "",
  avatar: "",
  email: "",
}

export const userNewInit = {
  ...userCommonInit,
  password: "",
  confirmPassword: "",
}

export const userEditInit = {
  id: "",
  ...userCommonInit,
}
