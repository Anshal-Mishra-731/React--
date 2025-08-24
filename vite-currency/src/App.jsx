import { useState } from 'react'

import useCurrencyInfo from './hooks/useCurrencyInfo.js'
import InputBox from './components/inputBox.jsx'

function App() {
  const [amount, setAmount] = useState("")
  const [from, setFrom] =   useState("usd"); 
  const [to, setTo] = useState("inr"); 
  const [convertedAmount, setConvertedAmount] = useState(""); 
  const currencyInfo = useCurrencyInfo(from)
  //the setState thing is async. So when setTo(from) runs right after setFrom(to), it still sees the old from, not the new one. beautiful, swapping is very easy in react given all is within one function 
  const options = Object.keys(currencyInfo); 
  const swap = () => {
    setFrom(to); 
    setTo(from); 
    setConvertedAmount(amount); 
    setAmount(convertedAmount); 
  }
  const convert = (amounteer, from, to) => {
    if(!amounteer){
      setAmount("")
      setConvertedAmount(""); 
      return
    }
    const result = (Number(amounteer)/currencyInfo[from])*currencyInfo[to]; 
    setConvertedAmount(result); 
  }


return (
        <div className="">
            <div className='text-red-500'>HEIL SEIG</div>
            <div className="">
              <form
                onSubmit={(e) => {
                   e.preventDefault(); //do this to prevent api bkchd-i
                   convert(); 
                }}
                >
                <div className="">
                  <InputBox 
                  label="From"
                  amount= {amount}
                  currencyOptions = {options}
                  currencyType = {from}
                  onCurrencyChange = {(currency) => {
                    setFrom(currency)
                    convert(amount, currency, to)
                  }}
                  onAmountChange = {(amount) => {
                    setAmount(amount);
                    convert(amount, from, to); 
                  }}
                  />
                </div>
                <div className="">
                  <button
                    type="button"
                    className="cursor-pointer" onClick={swap}>swap
                  </button>
                </div>
                <div className="">
                  <InputBox 
                  label="To"
                  amount= {convertedAmount}
                  currencyOptions = {options}
                  currencyType = {to}
                  onCurrencyChange = {(currency) => {
                    setTo(currency)
                    convert(amount, from, currency)
                  }}
                  />
                </div>
                <button type="submit" className="">
                  Convert {from} to {to}
                </button>
              </form>
            </div>
        </div>
    );
}

export default App
