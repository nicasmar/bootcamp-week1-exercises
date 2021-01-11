import React, { useState } from 'react'
import { nanoid } from 'nanoid'

const Form = () => {
    const [current, setCurrent] = useState('')
    const [all, setAll] = useState([])
    // console.log(current)
    console.log(all)

    return (
        <div>
            <h1>To Do List</h1>
            <input value={current} onChange={e => setCurrent(e.target.value)} />
            <button onClick={() => setAll(all.concat([current]))}>ADD</button>
            <ol>
            {all.map((item) => (
                <li key={nanoid()}>{item}</li>
            ))}
            </ol>

        </div>
    )
}

export default Form