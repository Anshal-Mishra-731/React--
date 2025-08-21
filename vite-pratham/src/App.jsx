import { Kula } from "./Mihir.jsx"

function App() {
  const vaterland = "frankreich"
  return (
    //the <> </> is called fragmentation, use it export multiple elements.
    <>
    <h1>Heil seig, heil {vaterland}!</h1>
    <Kula/>
    </>
    //The vaterland is the final outcome of an evaluated expression, NOT direct J.S.
  )
}

export default App
