import React ,{useState} from 'react'

export default function UseingStates() {
const [name,setName] = useState("Jeet");
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={()=>setName("Jeet Sharma")}>Full name </button>
      
    </div>
  )
}
