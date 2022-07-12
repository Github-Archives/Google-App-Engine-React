import React, { useState, useRef } from "react"
import Button from "../components/Buttons/Button"
import Toast from "../components/Toasts/Toast"

import "./Auth.css"

function AuthPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [toastString, setToastString] = useState("No Toast String :(")

  const emailEl = useRef("")
  const passwordEl = useRef("")

  const switchModeHandler = () => {
    setIsLoggedIn(!isLoggedIn)
    // console.log("isLoggedIn: ", isLoggedIn)
  }

  const submitHandler = (event) => {
    event.preventDefault() // make sure no request is sent right now
    const email = emailEl.current.value
    const password = passwordEl.current.value
    // console.log(typeof email)
    // console.log("1email/password: ", email, password)

    if (
      email.value?.trim().length === 0 || // ?. optional chaining
      password.value?.trim().length === 0
    ) {
      return
    }

    let requestBody = {
      query: `
            query {
                login(email: "${email}", password: "${password}") {
                    userId
                    token
                    tokenExpiration
                }
            }
        `,
    }

    if (!isLoggedIn) {
      // now have email & password
      // console.log("email/password: ", email, password)
      // now send the request to the backend
      requestBody = {
        query: `
              mutation {
                  createUser(userInput: {email: "${email}", password: "${password}"}) {
                      _id
                      email
                  }
              }
          `,
      }
    }

    //  *note we use fetch() api here, but could replace with Axios or any library for sending HTTP requesst in react apps
    fetch("http://localhost:8000/graphql", {
      // this can fetch/send data
      // here we send configurations
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json", // makes sure backend parses as json
      },
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          setToastString("Unknown login error")
          throw new Error("Failed! \t[res.status !== 200 res.status !== 201]")
        }
        return res.json() // automatically extract & parse response body
      })
      .then((resData) => {
        console.log("here => ", resData) // log the result data
        if (resData.errors) {
          setToastString(resData?.errors[0]?.message)
        }

        // setToastString(resData?.errors[0]?.message)
      })
      .catch((err) => {
        console.log("Error: ", err)
        // if (err?.errors[0]?.message) {
        // setToastString(err?.errors[0]?.message)
        // setToastString(err)
        // }
      })
  }

  return (
    <form className="auth-form" onSubmit={submitHandler}>
      <p>{toastString}</p>
      <div className="form-control">
        <label htmlFor="email">E-Mail</label>
        <input type="email" id="email" ref={emailEl} />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={passwordEl} />
      </div>
      <div className="form-actions">
        <Button type="submit" text={isLoggedIn ? "Login" : "Signup"}>
          {/* {isLoggedIn ? "Login" : "Signup"} */}
        </Button>
        {/* TODO: couldn't figure out how to make this a Button component with it's onClick() working */}
        <button type="button" onClick={switchModeHandler}>
          {isLoggedIn ? "Go To Signup Form" : "Go To Login Form"}
          {/* {isLoggedIn
            ? "Signup" && <Toast text={"Signup Page"} />
            : "Login" && <Toast text={"Login Page"} />} */}
        </button>
        {toastString && <Toast text={toastString} />}
      </div>
    </form>
  )
}

export default AuthPage
