import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  // ! lookup React StrictMode. it was here because we used create-react-app and is why things are double rendering.. to take this away gets rid of checks that show me i've done bad practices with the lifecycle. also, it only double renders in dev, not prod apparently !
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
)
