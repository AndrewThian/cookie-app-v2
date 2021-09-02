import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from 'src/ui/Home'
import { ClientRender } from 'src/ui/system/ClientRender'

function App(): JSX.Element {
  return (
    <ClientRender>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ClientRender>
  )
}

export default App
