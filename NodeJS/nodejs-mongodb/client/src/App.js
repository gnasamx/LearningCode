import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home/Home'
import Signup from './pages/singup/Signup'
import Login from './pages/login/Login'
import ProductDetails from './pages/productdetails/ProductDetails'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/product/:productId" component={ProductDetails} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
