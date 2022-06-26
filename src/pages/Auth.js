import React, { useState, useEffect } from "react"

import "./Auth.css"
// my hook based version
function AuthPage() {
  return (
    <form className="auth-form">
      <div className="form-control">
        <label htmlFor="email">E-Mail</label>
        <input type="email" id="email" />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
        <button type="button">Switch to Signup</button>
      </div>
    </form>
  )
}

export default AuthPage

// import React, { Component } from "react"
// // class based like in the video
// class AuthPage extends Component {
//   render() {
//     return <h1>The Auth Page</h1>
//   }
// }

// export default AuthPage
