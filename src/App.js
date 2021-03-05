import React from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import 'rsuite/dist/styles/rsuite-default.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import './styles/main.scss'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App