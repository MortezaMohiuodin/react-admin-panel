import { useState, createContext, useContext, useEffect } from "react"
import cookie from "js-cookie"

import { sendData } from "src/api/login"
import { useNavigate, Navigate, useLocation } from "react-router-dom"
import { getUser } from "src/api/Index"
const AuthContext = createContext()
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(() => cookie.get("token"))

  const reset = () => {
    cookie.remove("user")
    cookie.remove("token")
    setUser(null)
    setToken(null)
  }
  const update = async () => {
    let user = cookie.get("user") ? JSON.parse(cookie.get("user")) : null
    let token = cookie.get("token")
    if (!user || !token) return false
    let { data } = await getUser(user.id)
    setUser(data.user)
    setToken(data.accessToken)
    return { user, token }
  }
  const signIn = async (form, cb) => {
    let { data } = await sendData(form)
    const { user, accessToken } = data
    cookie.set("user", JSON.stringify(user), { expires: 1 })
    cookie.set("token", accessToken, { expires: 1 })
    setUser(user)
    setToken(accessToken)
    cb()
  }

  const signOut = async (cb) => {
    reset()
    cb()
  }
  let value = { user, token, signIn, signOut, update }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
export function useAuth() {
  return useContext(AuthContext)
}
