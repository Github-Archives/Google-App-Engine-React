import React, { useState, useRef } from "react"

import AuthContext from "../context/auth-context"

import "./Auth.css"
// my hook based version
function AuthPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // behind the scenes react makes this connection & gives us access to the context data in this variable
  // let contextType = AuthContext
  const contextType = AuthContext

  const emailEl = useRef("")
  const passwordEl = useRef("")

  const switchModeHandler = () => {
    // console.log("isLoggedIn 1: ", isLoggedIn)
    setIsLoggedIn(!isLoggedIn)
    console.log("isLoggedIn: ", isLoggedIn)
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
          throw new Error("Failed! \t[res.status !== 200 res.status !== 201]")
        }
        return res.json() // automatically extract & parse response body
      })
      .then((resData) => {
        console.log("resData a: ", resData) // log the result data
        // if (isLoggedIn) {
        // true = we know there's a token because has already logged in
        if (resData.data.login.token) {
          // just check if we have a token/therefore are already logged in
          console.log("You are already logged in")
          // context.login(resData.data.login.token, resData.data.login.userId) // token & userId are both in auth-context.js

          //           <AuthContext.Consumer>
          //               {userId => <h1>{userId}</h1>}
          // </AuthContext.Consumer>
        }
      })
      .catch((err) => {
        console.log("Error: ", err)
      })
  }

  return (
    <form className="auth-form" onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="email">E-Mail</label>
        <input type="email" id="email" ref={emailEl} />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={passwordEl} />
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
        <button type="button" onClick={switchModeHandler}>
          Switch to {isLoggedIn ? "Signup" : "Login"}
        </button>
      </div>
    </form>
  )
}

export default AuthPage
