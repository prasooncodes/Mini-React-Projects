import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (numberAllowed) {
      str += '0123456789'
    }
    if (charAllowed) {
      str += '!@#$%^&*()_+[]{}|;:,.<>?'
    }

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length)
      pass += str[randomIndex]
    } 

    setPassword(pass)
  } , [setPassword, length, numberAllowed, charAllowed]) 

  const copyPasswordToCliboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 99999) 
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
  <div className="w-full max-w-md mx-auto my-16 p-6 bg-gray-900 text-orange-400 rounded-2xl shadow-2xl border border-gray-700">
    <h1 className="text-white text-3xl font-bold text-center mb-8 tracking-wide">
      Password Generator
    </h1>

    <div className="flex items-center gap-2 bg-gray-800 rounded-lg overflow-hidden ring-1 ring-gray-600 mb-6">
      <input
        type="text"
        value={password}
        className="flex-1 px-4 py-3 text-black placeholder-gray-500 focus:outline-none"
        placeholder="Generated Password"
        readOnly
        ref={passwordRef}
      />
      <button
        onClick={copyPasswordToCliboard}
        className="px-4 py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold transition duration-200"
      >
        Copy
      </button>
    </div>

    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm gap-y-4 gap-x-4">
      <div className="flex items-center gap-x-2">
        <input
          type="range"
          min={6}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e) => setLength(Number(e.target.value))}
        />
        <label className="whitespace-nowrap text-gray-300">Length: {length}</label>
      </div>

      <div className="flex items-center gap-x-2">
        <input
          type="checkbox"
          checked={numberAllowed}
          onChange={(e) => setNumberAllowed(e.target.checked)}
          className="cursor-pointer"
        />
        <label className="text-gray-300">Numbers</label>
      </div>

      <div className="flex items-center gap-x-2">
        <input
          type="checkbox"
          checked={charAllowed}
          onChange={(e) => setCharAllowed(e.target.checked)}
          className="cursor-pointer"
        />
        <label className="text-gray-300">Characters</label>
      </div>
    </div>
  </div>
</>


  )
}

export default App
