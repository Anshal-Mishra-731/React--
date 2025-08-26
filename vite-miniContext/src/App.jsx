import { useState } from 'react'
import { UserContextProvider } from './context/userContextProvider'
import Login from './components/login'
import Profile from './components/profile'

//The wrapping with the provider so that the props in the context ban be used by any component in the file.
function App() {
  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}
export default App
