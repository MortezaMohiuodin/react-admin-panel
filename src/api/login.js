import { Axios } from "src/configs/axios/Index"

export const sendData = (data) => {
  return Axios.post("/login", data)
}
