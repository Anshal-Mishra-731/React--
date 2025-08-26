import { useState, useEffect } from 'react'
import { ThemeContextProvider } from './context/theme'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")
  const lightTheme = () => {
    setThemeMode("light"); 
  }
  const darkTheme = () => {
    setThemeMode("dark"); 
  }
  //Jo hamnein variables liye hain unke naam aur props ke naam ekdum samaan hain. 
  useEffect(() => {
    document.querySelector('.html').classList.remove("light", "dark")
    document.querySelector('.html').classList.add(themeMode)
  }, [themeMode])

  return (
    //Ab in values ka hamare pass direct access hai. Look above, we have given them functionality as well
    <ThemeContextProvider value={{themeMode , darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeButton/>
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card/>
              </div>
          </div>
      </div>
    </ThemeContextProvider>
  )
}

export default App
