import { createTheme } from "@mui/material"
import * as yup from "yup"
import { faIR } from "@mui/material/locale"

import { getTheme } from "src/configs/mui/theme"

export const INIT_FORM = {
  email: "",
  password: "",
}
export const validationSchema = yup.object({
  email: yup
    .string()
    .email("ایمیل وارد شده معتبر نیست")
    .required("ایمیل الزامی است"),
  password: yup.string().required("رمز کاربری الزامی است"),
})

export const loginTheme = createTheme(getTheme("dark"), faIR)
