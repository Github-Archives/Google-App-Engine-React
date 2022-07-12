import React from "react"

import "./Button.css"

const Button = (props) => {
  console.log("\t\tprops: ", props)
  return <button>{props.text}</button>
}

export default Button
