import placeholderImage from "./Media/placeholder.jpeg"

import React, { useState, createContext } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom" // wrap around elements you want to use routing on

import AuthPage from "./pages/Auth"
import EventsPage from "./pages/Events"
import BookingsPage from "./pages/Bookings"
import MainNavigation from "./components/Navigation/MainNavigation"

import AlertModal from "./components/Modals/AlertModal/AlertModal"
import Toast from "./components/Toasts/Toast"

import "./App.css"

// Here's where context begins for our token
export const TokenContext = createContext("Default Value")
// const MyContext = React.createContext(defaultValue);

// *note
//  Redirect & Switch were replaced with Navigate & Routes
function App() {
  const [userSessionToken, setUserSessionToken] = useState()
  console.log("Context userSessionToken in main App: ", userSessionToken)

  const value = "My Context Value" // temp

  return (
    // https://thewebdev.info/2021/09/19/how-to-update-a-react-context-from-inside-a-child-component/
    <TokenContext.Provider value={[userSessionToken, setUserSessionToken]}>
      {/* <TokenContext.Provider value={value}> */}
      <BrowserRouter>
        <>
          <MainNavigation />

          <main className="main-content">
            <AlertModal />
            {/* <Toast text={"Well hi"} /> */}
            <Routes>
              {/* <img src={placeholderImage} alt="Logo" /> */}
              <Route path="*" element={<Navigate to="/auth" replace />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/bookings" element={<BookingsPage />} />
            </Routes>
          </main>
        </>
      </BrowserRouter>
    </TokenContext.Provider>
  )
}

export default App
