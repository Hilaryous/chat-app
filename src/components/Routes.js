import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './Main'
import Login from './Login'
import AppContext from '../context'

export default () => (
  <Router>
    <AppContext.Provider>
      <Route render={() => (
        <Switch>
          <Route
            exact
            path="/login"
            component={Login}
          />
          <Route
            exact
            path="/"
            component={Main}
          />
        </Switch>
      )}
      />
    </AppContext.Provider>
  </Router>
)
