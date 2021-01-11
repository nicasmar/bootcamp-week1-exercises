import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'
import { nanoid } from 'nanoid'

const TODO = () => {
    const [current, setCurrent] = useState('')
    const [all, setAll] = useState([])
    // console.log(current)
    console.log(all)

    return (
        <Container>
            <h1>To Do List</h1>
            <input value={current} onChange={e => setCurrent(e.target.value)} />
            <button onClick={() => setAll(all.concat([current]))}>ADD</button>
            <ol>
            {all.map((item) => (
                <>
                    <li>{item}</li> 
                    <button onClick={() => setAll(all.filter(string => string !== item ))}>delete</button>
                </>
            ))}
            </ol>
            <Link to='/'>HOME</Link>
        </Container>
    )
}

export default TODO