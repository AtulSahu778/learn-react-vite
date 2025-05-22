import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const addValue = () => {
    if(count >= 20){
      count = 20
    }
    else{
      setCount(count + 1)
    }
    
  }
  const removeValue = () => {
    if(count <= 0){
      count = 0
    }
    else{
      setCount(count - 1)
    }

    
  }

  return (
    <>
      <div>
        <h1>Counter: {count}</h1>
        <button
        onClick={addValue}
        >Add Value</button>
        <button
        onClick={removeValue}
        >Remove Value</button>
        <h2>Notification: {count}</h2>
        <p>State: {count}</p>
      </div>
    </>
  )
}

export default App
