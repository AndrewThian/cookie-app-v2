import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from '@domains/home'
import { ClientRender } from '@domains/system/ClientRender'

function App(): JSX.Element {
  return (
    <ClientRender>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </ClientRender>
  )
}

export default App
