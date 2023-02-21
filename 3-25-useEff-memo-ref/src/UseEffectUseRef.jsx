import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState('Franco')
  const refButton = useRef(null)

  const handleClick = () => {
    setName('Augusto')
  }
  

  useEffect(() => {
    console.log('rendered')
    if(name !== 'Franco') refButton.current.style.color = 'red'
    return () => {}
    }, [name]
  );

  return (

    <div className="App">

      <h1>{name}</h1>

      <button ref={refButton} onClick={handleClick}>Click here to change name</button>

      <button onClick={() => refButton.current.click() }>Click hera to click the other button to change the name</button>

    </div>
  )
}

export default App
