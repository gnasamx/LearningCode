import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Campaign from './pages/Campaign'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/:camp" component={Campaign} />
    </Switch>
  </BrowserRouter>,
  document.querySelector('#root')
)
