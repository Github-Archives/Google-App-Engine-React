import placeholderImage from "./Media/placeholder.jpeg"

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom" // wrap around elements you want to use routing on

import AuthPage from "./pages/Auth"
import EventsPage from "./pages/Events"
import BookingsPage from "./pages/Bookings"
import MainNavigation from "./components/Navigation/MainNavigation"

import "./App.css"

// *note
//  Redirect & Switch were replaced with Navigate & Routes
function App() {
  return (
    <BrowserRouter>
      <>
        <MainNavigation />
        <main>
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
  )
}

export default App
