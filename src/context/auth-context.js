// // context API is built into react
// //  context is basically storage that you can access anywhere in the app.
// //      no component tree drilling necessary

// // here specifically, context is a good use for individual user credentials which do not change throughout the app once logged in.. and also updates the context very seldom
// import { createContext } from "react"

// // createContext(default value which can be num/string/obj)
// export default createContext({
//   // export const ?
//   // export default React.createContext({
//   token: null, // default = null
//   userId: null,
//   login: () => {}, // these will help with auto-completion later
//   logout: () => {},
// })

import React, { useContext, useState } from "react"

// The actual contexts that are made available to app
const Context = React.createContext()
const UpdateContext = React.createContext()

// custom hooks
export function useTheme() {
  return useContext(useContext)
}
export function useThemeUpdate() {
  return useContext(UpdateContext)
}
export function ContextProvider({ children }) {
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)

  // ? unsure about this working
  //   const login = () => {}
  //   const logout = () => {}

  function login() {
    // return {}
    setToken()
  }

  function logout() {
    return {}
  }

  // {{ value1, value2 }} = how we pass multiple.
  // if only one { value1 }
  return (
    <Context.Provider value={{ token, userId }}>
      <UpdateContext.Provider value={(login, logout)}>
        {children}
      </UpdateContext.Provider>
    </Context.Provider>
  )
}
