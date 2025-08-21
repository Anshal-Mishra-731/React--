import { useState } from 'react'

function App() {
  let [color, setColor] = useState("blue"); 

  return (
    <div className = "w-full h-screen" style={{backgroundColor: color}}>    
      <div className='flex justify-center'>
        <div className= 'absolute bottom-12 flex flex-wrap gap-3 shadow-indigo-100 bg-blue-100 px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor("white")} className='w-6 h-6 bg-white rounded-full'></button>
          <button onClick={() => setColor("black")} className='w-6 h-6 bg-black rounded-full'></button>
          <button onClick={() => setColor("green")} className='w-6 h-6 bg-green-600 rounded-full'></button>
          <button onClick={() => setColor("yellow")} className='w-6 h-6 bg-yellow-300 rounded-full'></button>
          <button onClick={() => setColor("blue")} className='w-6 h-6 bg-blue-700 rounded-full'></button>
        </div>
      </div>
    </div>
  )
}

export default App
