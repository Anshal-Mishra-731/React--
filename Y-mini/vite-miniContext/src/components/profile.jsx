import React from "react";
import { UserContext } from "../context/userContext";
import { useContext } from "react";

function Profile() {
    const {user} = useContext(UserContext); 

    if(!user) return <h2 className="text-red-700 mx-4 my1">Please login</h2>

    return <h2 className="text-blue-700 mx-4 my-1">Welcome : {user.username} </h2>
}

export default Profile