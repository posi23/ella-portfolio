import { About, Contact, Hero, Projects } from "./components"
import "./App.css"
import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <Hero />
        {/* <About />
      <Projects />
      <Contact /> */}
      </div>
    </BrowserRouter>
  )
}

export default App
