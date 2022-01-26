import { useState, createContext, useContext } from "react"
import cookie from "js-cookie"

import { doLogin } from "src/api/login"
import { getUser } from "src/api/user"
const AuthContext = createContext()
export default function AuthProvider({ children }) {
  let userStore = cookie.get("user") ? JSON.parse(cookie.get("user")) : null
  let tokenStore = cookie.get("token")
  const [user, setUser] = useState(userStore)
  const [token, setToken] = useState(tokenStore)

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
    cookie.set("user", JSON.stringify(data), { expires: 1 })
    setUser(data)
    return { user: data, token }
  }
  const signIn = async (form) => {
    let { data } = await doLogin(form)
    const { user, accessToken } = data
    cookie.set("user", JSON.stringify(user), { expires: 1 })
    cookie.set("token", accessToken, { expires: 1 })
    setUser(user)
    setToken(accessToken)
  }

  const signOut = async (cb) => {
    reset()
    cb()
  }
  let value = { user, token, signIn, signOut, update, isAdmin: user?.admin }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
export function useAuth() {
  return useContext(AuthContext)
}
