import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)

  // let counter = 5

  const addValue = () => {
    setCounter(counter+1)
  }
  const removeValue = () => {
    setCounter(counter-1)
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter} </h2>
      
      <button onClick={addValue}>Add Value</button>
      <br></br> 
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
