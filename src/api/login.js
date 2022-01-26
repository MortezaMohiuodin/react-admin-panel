import { Axios } from "src/configs/axios/Index"

export const doLogin = (data) => {
  return Axios.post("/login", data)
}
