import './App.css'
import Navbar from "./Navbar";
import Hero from "./Hero"
import About from "./About"
import Explore from "./Explore"
import "./index.css"

function App() {
  

  return (
    <>
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Explore />

    </div>
    </>
  )
}

export default App
