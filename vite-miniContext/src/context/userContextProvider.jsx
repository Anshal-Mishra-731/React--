import React from "react";
import { UserContext } from "./userContext";

//Provider mein apne saare "children" (jo bhi components the) vo wrap kardenge taaki uske props ka access saare ke saare components ko ek saath mil jaaye.
export const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    //Appki aur paanch cheezein nirbhar kar rahi hai toh object mein vo bhi daal toh. Unka access file ke bahar mil jaayega humein.
    return (
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}
