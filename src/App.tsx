import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { StartPage } from './pages/StartPage/StartPage'
import { Routes } from './routing/router'

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.Home} component={StartPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
