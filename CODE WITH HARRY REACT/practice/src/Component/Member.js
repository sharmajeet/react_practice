import React from 'react'

export default function Member(props) {
  return (
    <div>
        <h1>hello , i am Member component</h1>
      <button onClick={props.member}>Click me </button>
    </div>
  )
}
