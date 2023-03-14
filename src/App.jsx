import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Card from "./components/Card"

import db from "../data/db"

function App() {

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Card data={db} />
    </div>
  )
}

export default App
