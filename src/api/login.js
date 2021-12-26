import { Axios } from "@/configs/axios/Index"

export const sendData = (data) => {
  return Axios.post("/login", data)
}
