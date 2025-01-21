import { useState } from 'react'
import {getResponse} from './aiAgentService';
import './App.css'

function App() {
  const [text, setText] = useState("")
  const [res, setRes] = useState<null | string>(null)


  const handleSubmit = () =>{
    let response = getResponse(text)
    setRes(response)
  }

  return (
    <>
       Ask question: <input onChange={(e)=>setText(e.target.value)} style={{width: 300}}/>
       <br/>
       <br/>
       <button onClick={handleSubmit}>Submit</button>
       {res ? <p>{res}</p> : null}
    </>
  )
}

export default App
