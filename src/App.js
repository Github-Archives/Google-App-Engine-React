import placeholderImage from "./Media/placeholder.jpeg"

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom" // wrap around elements you want to use routing on

import AuthPage from "./pages/Auth"
import EventsPage from "./pages/Events"
import BookingsPage from "./pages/Bookings"

import "./App.css"

// *note
//  Redirect & Switch were replaced with Navigate & Routes
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <img src={placeholderImage} alt="Logo" /> */}
        <Route path="*" element={<Navigate to="/auth" replace />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/booking" element={<BookingsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
