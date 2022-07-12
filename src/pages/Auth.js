import React, { useState, useEffect, useRef } from "react"

import "./Auth.css"
// my hook based version
function AuthPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const emailEl = useRef("")
  const passwordEl = useRef("")

  const switchModeHandler = () => {
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
        console.log(resData) // log the result data
      })
      .catch((err) => {
        console.log("Error: ", err)
      })
  }

  return (
    <form className="auth-form" onSubmit={submitHandler}>
      <div>Is user logged in?</div>
      <div>{isLoggedIn ? "YES" : "NO"}</div>
      <div className="form-control">
        <label htmlFor="email">E-Mail</label>
        <input type="email" id="email" ref={emailEl} />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={passwordEl} />
      </div>
      <div className="form-actions">
        <button type="submit">{isLoggedIn ? "Login" : "Signup"}</button>
        <button type="button" onClick={switchModeHandler}>
          Go to {isLoggedIn ? "Signup" : "Login"}
        </button>
      </div>
    </form>
  )
}

export default AuthPage
