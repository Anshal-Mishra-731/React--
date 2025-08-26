import React, { useContext, createContext } from "react";
//Alag syntax (easier) seekhne ko mila
export const ThemeContext = React.createContext({
    themeMode : "light",
    darkTheme : () => {},
    lightTheme : () => {}
}); 
//abhi waise context-nirmaan ke samay bhi kuch props de sakte ho. Humnei do methods bhi de rakkhe hain prayog kliye 

export const ThemeContextProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext);
}