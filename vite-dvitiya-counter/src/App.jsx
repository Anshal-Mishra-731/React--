import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //sankhya variable, uski default value 5, setCounter ek function hai jo ki poore code mein sankya ki value har jagah update kar deta hai. No get value by ID and stuff!
  let[sankhya, setCounter] = useState(5)
  const addVal = () => {
    setCounter(sankhya + 1)
  }
  const decVal = () => {
    setCounter(sankhya -1)
  }
  return (
    <>
    <h1>milind</h1>
    <h2>counter value : {sankhya}</h2>
    <button
    onClick={addVal}>incremente</button>
    <button
    onClick={decVal}>decremenete</button>
    </>
  )
}

export default App
