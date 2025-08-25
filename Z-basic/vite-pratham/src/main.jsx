import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const elemente = (
  <a href= "https://google.com">Visit google</a>
)
//Hamaare bundler ne ped lagaane ka kaam samhaal liya hoga. isiliye chal gaya.
//Par ek react element bhi bana hi lete hain, FR this time. 
const komandante = React.createElement(
  'a',
  {href: 'https://google.com'},
  'click me to visit google'
)
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  komandante
)
