import React, { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";
//this hook will be used to fetch the data from the loader

export default function Github() {
    const data = useLoaderData(); 
    //directly, we got the data from the response.json async promise, and fed it here using our hook 

    //component mount hote hi effect chalu 
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Anshal-Mishra-731').then((response) => response.json())
    //     .then((data) => setData(data)) 
    // }, [])
    return (
        //.followers naam ki ek prop hai vahaan pe, ye api padh ke pata chalta hai. 
        <div className="text-center mx-160 bg-gray-500 text-white p-4 w-max">
        Github followers : {data.followers}
        <img src={data.avatar_url} alt="" />
        </div>
    )
}

export const gitInfo = async () => {
    const response = await fetch('https://api.github.com/users/Anshal-Mishra-731');
    return response.json(); 
}