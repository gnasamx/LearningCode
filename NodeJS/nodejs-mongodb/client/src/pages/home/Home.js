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
    fetch('http://localhost:8000/api/v1/products/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.setState({ allProducts: json.products })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    let renderProducts = this.state.allProducts.map((eachProduct, index) => (
      <ProductLook key={eachProduct._id} eachProduct={eachProduct} />
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
