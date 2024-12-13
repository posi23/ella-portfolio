import { About, Contact, Hero, Projects, TopScroll } from "./components"
import { useRef } from "react";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  const ref = useRef(null);
  return (
    <BrowserRouter>
      <div className="container" ref={ref}>
        <div className="main">
          <Hero />
          <About />
          <Projects />
          <Contact />
          <TopScroll containerRef={ref} />

        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
