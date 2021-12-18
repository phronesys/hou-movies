import { useState } from 'react'
import './App.css'
import NavBar from "./layouts/NavBar";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="main">
      <NavBar></NavBar>

    </div>
  )
}

export default App
