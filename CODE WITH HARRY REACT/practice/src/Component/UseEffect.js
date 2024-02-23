import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(100);
    useEffect(() => {
        console.log("UseEffect hear..for number ")
    }, [number])
    useEffect(() => {
        console.log("UseEffect hear.. for count")
    }, [count])
    return (
        <div>

            <h1>Using Effect </h1>
            <h2>Count :<mark> {count}</mark></h2>
            <h2>Number :<mark> {number}</mark></h2>
            <button onClick={() => setCount(count + 1)}>Update Count</button>
            <button onClick={() => setNumber(number - 1)}>Decrease Number</button>
        </div>
    )
}
