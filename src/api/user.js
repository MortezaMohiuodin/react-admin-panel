import { Axios } from "src/configs/axios/Index"

export const getUsers = () => {
  return Axios.get("/users")
}

export const addUser = (user) => {
  return Axios.post("/users", user)
}

export const deleteUser = (id) => {
  return Axios.delete(`/users/${id}`)
}
export const getUser = (id) => {
  return Axios.get(`/users/${id}`)
}
export const editUser = (user) => {
  return Axios.put(`/users/${user.id}`, user)
}
export const getFullUser = (id) => {
  return Axios.get(`/users/${id}`)
}
