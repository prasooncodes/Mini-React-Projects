import React , { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  const addValue = () => {
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    console.log('Value added', counter + 1)
  }

  const decreaseValue = () => {
    setCounter(counter - 1)
    console.log('Value decreased', counter - 1)
  }

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>Add value</button>
    <br />
    <button onClick={decreaseValue}>Decrease value</button>
    <p>footer : {counter}</p>
    </>
  )
}

export default App
