import React from "react"

//container mein height width sheit define karte hain 
function Container({children}){
    return(
        <div className="w-full max-w-7xl mx-auto px-4">{children}</div>
    )
}

export default Container