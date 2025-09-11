import React from "react";
import { useState, useContext } from "react";
import { UserContext } from "../context/userContext";

function Login() {
    const [password, setPass] = useState(""); 
    const [username, setUserr] = useState(""); 

    //Yaad kori setUser pass kiya tha prop ke roop mein contextProvider mein.
    const {setUser} = useContext(UserContext); 

    const handelSubmit = (e) => {
        e.preventDefault(); 
        setUser({password, username})
    }
    return (
        <div>
            <h2 className="mx-4">Login</h2>
            <input type="text" className="mx-4 border border-black" value= {username} onChange={(e) => setUserr(e.target.value)} />
            <input type="text" className="mx-4 border border-black" value= {password} onChange={(e) => setPass(e.target.value)} />
            <button className="border border-gray-500 p-1 rounded-full cursor-pointer" onClick={handelSubmit}>Kori</button>
        </div>
    )
}

export default Login