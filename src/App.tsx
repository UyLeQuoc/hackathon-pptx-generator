import { useState } from 'react'
import Test from './hooks/Test';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Test />
    </>
  )
}

export default App
