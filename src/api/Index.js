import { Axios } from "src/configs/axios/Index"

export const getUsers = () => {
  return Axios.get("/users")
}
