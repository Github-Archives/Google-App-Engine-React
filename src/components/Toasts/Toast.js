import React, { useState, useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

const Toast = (text) => {
  console.log("\ttext: ", text.text)

  const notify = () => toast(text.text)

  return (
    <div>
      <button onClick={notify}>Notify !</button>
      {/* <ToastContainer /> */}
    </div>
  )
}

export default Toast

//   const [toastText, setToastText] = useState("")

//   const updateToastText = () => {
//     setToastText(text)
//   }

//   useEffect(() => {
//     setToastText(text)
//     console.log("\n\ttoastText", toastText)
//   }, [toast])
//   const notify = () => toast("Wow so easy !")
