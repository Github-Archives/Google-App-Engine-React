import React, { useState, useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

const Toast = (text) => {
  const [textHere, setText] = useState("")
  //   console.log("entered form: ", text.text)

  const notify = () => {
    console.log("\t\nInside notify!!")
    console.log("\ttext.text!!", text.text)
    // setText(text.text)

    // return toast(text.text)
    console.log("\ntextHere:  ", textHere)
    return toast(textHere)
  }

  useEffect(() => {
    setText(text.text)
  }, [text])

  return (
    <div>
      {/* <button onClick={notify}>Notify !</button> */}
      {/* Entered Form: {text.text} */}
      {notify()}
      {/* {textHere} */}
      <ToastContainer />
    </div>
  )
}

export default Toast
