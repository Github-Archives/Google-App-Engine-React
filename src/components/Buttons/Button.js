import React from "react"

import Toast from "../Toasts/Toast"

import "./Button.css"

// const Button = (props) => {
//   console.log("\tprops: ", props.text)

//   return (
//     <>
//       <Toast text={props.text} />
//       <button>{props.text}</button>
//     </>
//   )
// }

const Button = ({ type = "button", onClick, children }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
