import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import Campaign from './Campaign'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/camp" component={Campaign} />
    </Switch>
  </BrowserRouter>,
  document.querySelector('#root')
)
