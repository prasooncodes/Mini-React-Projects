import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-full h-screen bg-black">
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-white">
        <h1 className='text-2xl text-center text-white my-3'>Password Generator</h1>
      </div>
    </div>
    </>
  )
}

export default App
