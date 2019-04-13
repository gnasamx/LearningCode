import React, { Component } from 'react'
import './home.css'
import ProductLook from '../../components/ProductLook'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allProducts: []
    }
  }

  componentDidMount() {
    fetch('http:localhost:8000/api/v1/products', {
      headers: {
        Accept: 'text/plain',
        'Content-Type': 'text/plain'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw response
        }
        return response.json()
      })
      .then(json => {
        // this.props.dispatch(doSomethingWithResult(json))
        console.log(json)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    let renderProducts = this.state.allProducts.map(eachProduct => (
      <ProductLook eachProduct={eachProduct} />
    ))
    return (
      <div>
        <p>Home</p>
        <div className="container">
          <div className="row">{renderProducts}</div>
        </div>
      </div>
    )
  }
}

export default Home
