import { BrowserRouter } from "react-router-dom"

import "./App.css"
import Router from "./router/Router"
import { MovieCard } from "./components/MovieCard"
import SearchCard from "./components/SearchCard"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
        {/* <SearchCard /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
