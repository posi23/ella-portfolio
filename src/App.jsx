import { About, Contact, Hero, Projects } from "./components"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <div className="container">
        {/* <Routes>
          <Route path="/" element={<Hero />} />
          <About />
      <Projects />
          <Route path="#contact" element={<Contact />} />
        </Routes> */}

        <Hero />
        <About />
        <Projects />
        <Contact />

      </div>
    </BrowserRouter>
  )
}

export default App
