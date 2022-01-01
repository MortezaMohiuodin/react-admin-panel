import { useState, createContext, useContext, useEffect } from "react"
import cookie from "js-cookie"

import { sendData } from "src/api/login"
import { useNavigate, Navigate, useLocation } from "react-router-dom"

const AuthContext = createContext()
export default function AuthProvider({ children }) {
  let userStorage = cookie.get("user") ? JSON.parse(cookie.get("user")) : null

  const [user, setUser] = useState(userStorage)
  const [token, setToken] = useState(() => cookie.get("token"))

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
    setUser(null)
    cookie.remove("user")
    cookie.remove("token")
    cb()
  }
  let value = { user, token, signIn, signOut }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
export function useAuth() {
  return useContext(AuthContext)
}

export function AuthRequired({ children }) {
  let auth = useAuth()
  let location = useLocation()
  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}
