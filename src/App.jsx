import { useState } from 'react'
import './App.css'
import Start from './Start.jsx'

function App() {
  const [start, setStart] = useState(true)

  return (
    <>
      <Start view = {start} setStart = {setStart}/>
    </>
  )
}

export default App
