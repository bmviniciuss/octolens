import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home } from '../pages'

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  )
}

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default Router
