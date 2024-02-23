import React from 'react'

export default function ReuseComponent(props) {
  return (
    <div>
     <h1>{"Name : " + props.data.name +" Age Is: " + props.data.Age+" and Living in " +  props.data.city + " City"}</h1>
     {/* <h1>{props.data.age}</h1>
     <h1>{props.data.city}</h1> */}
    </div>
  )
}
