import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numero, setNumero] = useState(false); 
  const [charo, setCharo] = useState(false); 
  const [password, setPassword] = useState("");

//The usecallback saves us from un-neccesary re-rendering of function everytime one of the dependencies are touched, the function on re-renders when there is a change in the values of the dependencies. This is a our password generating func. use callback if there actually are any dependencies, if not then it's obsolete.   
  const passwordGen = useCallback(() => {
    let pass = ""; 
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numero) {str += "0123456789"}
    if(charo) {str += "@#$%&!"}
    for(let i = 0; i < length; i++){
      let char = Math.floor(Math.random()*str.length);
      pass += str.charAt(char); 
    }
    setPassword(pass); 
  }, [length, numero, charo])

  const copyToClip = useCallback(() => {
    //The use of the reference is only to add details to the referenced value. No other, here, we highlight the text as we copy it. it would have been copied either way, but just to give it a feel. 
    passRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  //Effect hook, use the callback function directly without any hassel. When the page first loads, useEffect runs, and when the dependencies change, useeffect re-runs.
  useEffect(() => {passwordGen()}, [length, numero, charo])
  //Ref hook
  const passRef = useRef(null)
  return (
    <>
    <div className='bg-white shadow-lg rounded-3xl mx-auto w-lg mt-3 h-auto shadow-green-800'>
      <h1 className='text-balck text-center p-3 mt-5 text-2xl'>Password generator!</h1>

      <div className='flex justify-center items-center gap-3 overflow-auto'>
        <input className='rounded-md p-3 mb-4 w-full max-w-xs overflow-hidden ' type="text" value={password} placeholder='Password' ref={passRef}/>
        <button className='cursor-pointer p-3 mb-4 h-12 bg-green-200 rounded-2xl ' onClick={copyToClip}>Copy</button>
      </div>

      <div className='flex justify-center items-center gap-3'>

        <div className='mb-2'>
          <input className='cursor-pointer accent-green-500' type="range" min={8} max={100} value={length} 
          onChange={(e) => {setLength(e.target.value)}}/>
          <span className='mx-2'>Length: {length}</span>
        </div>

        <div className='mb-2'>
          <input  className = 'cursor-pointer shadow-md rounded accent-green-600' type="checkbox" defaultChecked={numero} 
          onChange={(e) => setNumero(e.target.checked)}/>
          <span className='mx-1'>Numbers</span>
        </div>

        <div className='mb-2'>
          <input  className = 'cursor-pointer shadow-md rounded accent-green-600' type="checkbox" defaultChecked={charo} 
          onChange={(e) => setCharo(e.target.checked)}/>
          <span className='mx-1'>Special Charecters</span>
        </div>

      </div>
    </div>
    </>
  )
}

export default App
