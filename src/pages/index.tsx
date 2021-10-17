import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from 'src/ui/Home'
import SetupYourBudget from 'src/ui/SetupYourBudget'

import { ClientRender } from 'src/ui/system/ClientRender'

function App(): JSX.Element {
  return (
    <ClientRender>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/setup">
            <SetupYourBudget />
          </Route>
        </Switch>
      </Router>
    </ClientRender>
  )
}

export default App
