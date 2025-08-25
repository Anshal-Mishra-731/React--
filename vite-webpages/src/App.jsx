import { useState } from 'react'

import Header from './components/header'
import Footer from './components/footer'
import Home from './components/home'
function App() {
//this works for me because we are using the browser router in the main.jsx file. But what if I dont't want app.jsx at all and want to do everything in main? I will create my coustum router. Right now the App is redundant. we are not using it in main.
  return (
    <>
    <Header/>
    <Home/>
    <Footer/>
    </>
  )
}

export default App
