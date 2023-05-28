import { About, Contact, Hero, Projects } from "./components"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <div className="main">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
