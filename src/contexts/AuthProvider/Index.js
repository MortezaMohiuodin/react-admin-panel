import { useState, createContext, useContext } from "react"
import { sendData } from "src/api/login"

const AuthContext = createContext()
export default function AuthProvider({ children }) {
  const [user, setUser] = useState("morteza")
  const signIn = async (form, cb) => {
    let { data } = await sendData(form)
    const { user, accessToken } = data
    setUser(user)
    cb()
  }
  const signOut = async (cb) => {
    setUser(null)
    cb()
  }
  let value = { user, signIn, signOut }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
export function useAuth() {
  return useContext(AuthContext)
}
