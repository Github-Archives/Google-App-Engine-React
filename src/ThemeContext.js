import React, { useContext, useState } from "react"
// import { ThemeContext } from "./App"

// The actual contexts that are made available to app
const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

// custom hooks
export function useTheme() {
  return useContext(ThemeContext)
}
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext)
}

// first make everything here, and future additions here in the ThemeProvider store available to any consumers..

//  i think that the ThemeUpdateContext.Provider context can only be available to children if there's nesting.. think about how you would nest {children} in both if both Providers below where siblings...

//  i understand what { children } here means now!!
//   { children } = all of the nested components in App.js that now have access to Context!! This file is the Parent wrapping up all of the children
export function ThemeProvider({ children }) {
  // 1. take in the children (so it can wrap around anything)
  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme)
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {/* 2. then render out the children */}
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}
