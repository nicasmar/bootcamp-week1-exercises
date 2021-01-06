import React from 'react'
import {nanoid} from 'nanoid'
import { Container } from './styles'

const list = [
  {
    id: 'a',
    name: 'Go Shopping',
  },
  {
    id: 'b',
    name: 'Eat',
  },
]

const App = () => (
  <Container>
    <form>
      <label>
        Insert todo:
        <input type='text' />
      </label>
      <input type='submit' value='Submit' />
    </form>
    <form>
      <label>
        Delete todo:
        <input type='text' />
      </label>
      <input type='submit' value='Submit' />
    </form>

    <h1>To Do List</h1>
    <ol>
      {list.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ol>
  </Container>
)

export default App
