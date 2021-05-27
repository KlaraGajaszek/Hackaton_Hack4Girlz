import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { StartPage } from './pages/StartPage/StartPage'

import { router } from '../src/routing/router'

const App = () => {
  const { home } = router

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={home} component={StartPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
