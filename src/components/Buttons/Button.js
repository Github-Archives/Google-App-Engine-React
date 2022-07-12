import React from "react"

import Toast from "../Toasts/Toast"

import "./Button.css"

const Button = (props) => {
  console.log("\tprops: ", props.text)

  return (
    <>
      <Toast text={props.text} />
      <button>{props.text}</button>
    </>
  )
}

export default Button
