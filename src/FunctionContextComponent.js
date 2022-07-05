import React from "react"
import { useTheme, useThemeUpdate } from "./ThemeContext" // adv. import my custom hooks
// import React, { useContext } from "react"
// import { ThemeContext } from "./App"

export default function FunctionContextComponent() {
  //   const darkTheme = useContext(ThemeContext) // gives us the value of our context
  const darkTheme = useTheme() // gives us the value of our context
  const toggleTheme = useThemeUpdate() // gives us the value of our context
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  }

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Function Theme</div>
    </>
  )
}
