import React, { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    currencyType
}) {
    const amountInputID = useId(); //Generates a random string, a unique ID. Now use it with your label and with your and with your input IDs
    return(
    <div className="">
      <label htmlFor= {amountInputID} className="">{label}</label>


      <span className="mx-3">
        {currencyType}
      </span>


      <input
        id = {amountInputID}
        type="number"
        className=""
        placeholder="Amount"
        value={amount}
        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
      />

      <select
        className=""
        value={currencyType}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
      >
        {currencyOptions.map((cur) => (
        //use key in loops for better optimization of loops in react
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </select>
    </div>
    )
}
export default InputBox; 