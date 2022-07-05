import React, { useState } from "react"

// import placeholderImage from "./Media/placeholder.jpeg"

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom" // wrap around elements you want to use routing on

import AuthPage from "./pages/Auth"
import EventsPage from "./pages/Events"
import BookingsPage from "./pages/Bookings"
import MainNavigation from "./components/Navigation/MainNavigation"

// import AuthContext from "./context/auth-context"
import FunctionContextComponent from "./FunctionContextComponent"
// import ClassContextComponent from "./ClassContextComponent"
import { ThemeProvider } from "./ThemeContext"

import "./App.css"

// export const ThemeContext = React.createContext()

// *note
//  Redirect & Switch were replaced with Navigate & Routes
function App() {
  // const [darkTheme, setDarkTheme] = useState(true)

  // function toggleTheme() {
  //   setDarkTheme((prevDarkTheme) => !prevDarkTheme)
  // }

  return (
    <BrowserRouter>
      <>
        {/* Context: allows us to give context access to all elements in this block, including their children */}
        <ThemeProvider>
          <MainNavigation />
          <main className="main-content">
            {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
            {/* THIS IS THE EXPORTED FUNCTION WITHIN=> ThemeContext.js */}
            <FunctionContextComponent />
            {/* <ClassContextComponent /> */}

            <Routes>
              {/* <img src={placeholderImage} alt="Logo" /> */}
              <Route path="*" element={<Navigate to="/auth" replace />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/bookings" element={<BookingsPage />} />
            </Routes>
          </main>
        </ThemeProvider>
      </>
    </BrowserRouter>
  )
}

export default App
