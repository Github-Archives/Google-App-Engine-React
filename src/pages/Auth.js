import React, { useState, useRef, useContext } from "react"
import Button from "../components/Buttons/Button"
import Toast from "../components/Toasts/Toast"

import { TokenContext } from "../App"

import "./Auth.css"

function AuthPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [toastString, setToastString] = useState()

  // new for context
  const [userSessionToken, setUserSessionToken] = useContext(TokenContext)

  // const value = useContext(TokenContext)

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
        // res = everything in the response including header & meta data
        // console.log("\n\t\tres: ", res)
        if (res.status !== 200 && res.status !== 201) {
          setToastString("Status code: " + res.status)
          throw new Error("Failed! \t[res.status !== 200 res.status !== 201]")
        }
        setToastString(res.statusText === "OK" ? "Ok" : null)
        // console.log("res.json(): ", res.json()) // not sure really what this return res.json() is for completely yet
        return res.json() // automatically extract & parse response body
      })
      .then((resData) => {
        // stripped down response with just the data
        console.log("resData => ", resData) // log the result data

        if (resData?.data?.login?.token !== undefined) {
          const token = resData.data.login.token
          // setUserToken(token)
          setUserSessionToken(token)
        }

        if (resData.errors) {
          setToastString(resData?.errors[0]?.message)
        }
      })
      .catch((err) => {
        console.log("Error: ", err)
      })
  }

  return (
    <form className="auth-form" onSubmit={submitHandler}>
      <p>Toast String:</p>
      <p>{toastString}</p>
      {/* <p>Context Value: {value}</p> */}
      {/* <p>User Token: {userToken}</p> */}
      <p>Context User Token: {userSessionToken}</p>
      <div className="form-control">
        <label htmlFor="email">E-Mail</label>
        <input type="email" id="email" ref={emailEl} />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={passwordEl} />
      </div>
      <div className="form-actions">
        <Button type="submit">{isLoggedIn ? "Login" : "Signup"}</Button>
        <Button type="button" onClick={switchModeHandler}>
          {isLoggedIn ? "Go To Signup Form" : "Go To Login Form"}
        </Button>
        <Toast text={toastString} />
      </div>
    </form>
  )
}

export default AuthPage
