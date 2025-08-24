import { useState, useEffect } from "react";

function useCurrencyInfo(mudra){
    const [data, setData] = useState({})
    //use-effect runs the function call basck as soon as the lifecycle of our coustom hook is triggered. No need to create a seperate variable to wait for the lifecycle to be mounted.
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${mudra}.json`).
        then((res) => res.json())
        //res.json is a now a JS object, we have to access the key corroponding to "mudra" so we used [] here.
        .then((res) => setData(res[mudra]))
    }, [mudra])
    return data; 
}
//This coustom hook here is only a function that contains other hooks. The reason that mudra is needed as a dependency is because useeffect will only run when mudra changes, not everytime I render my function. They are not connected in running.
export default useCurrencyInfo; 
