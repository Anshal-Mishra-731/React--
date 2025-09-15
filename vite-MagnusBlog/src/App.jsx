import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth';
import {login, logout} from "./store/authSlice.js"

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch(); 

  //dekh le bete dispatch kahaan use hota hai, phir bhool mat jaio
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(setLoading(false))
  }, [])

  //Loading nahi hai toh pehla waala return karo nahi toh dursra waala. 
  return (
    <div className='min-h-screen flex flex-wrap bg-gray-400'>
      <div className='w-full block'>
        <h1 className='text-5xl text-amber-500'>Hej slovak</h1>
      </div>
    </div>
  )
}

export default App
