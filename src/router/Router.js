import React from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Home from "../pages/Home/Home"
import Movies from "../pages/Movies"

// should just be routes since routwer is now inside app
function Router() {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/movies/:id" element={<Movies />} />
    </Routes>
    // </BrowserRouter>
  )
}

export default Router
