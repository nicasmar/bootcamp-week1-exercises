import React from 'react'
import TODO from './TODO'
import greeting from './greeting'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/TODO' component={TODO} />
      <Route path='/' component={greeting} />
    </Switch>
  </BrowserRouter>
  
)

export default App
