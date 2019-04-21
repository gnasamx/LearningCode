import React, { Component } from 'react'

class ProductDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productDetails: {}
    }
  }

  componentDidMount() {
    let productId = this.props.match.params.productId
    if (productId !== undefined || productId !== null) {
      fetch(`http://localhost:8000/api/v1/products/${productId}`, {
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
          this.setState({ productDetails: json.singleProduct })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  handleAddToCart = () => {
    let productId = this.props.match.params.productId
    fetch(`http://localhost:8000/api/v1/cart/create/${productId}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data.message)
      })
  }

  render() {
    let { name, image, price, details } = this.state.productDetails
    let imageUrl = `http://localhost:8000/${image}`
    return (
      <div className="container space-2 space-3--lg">
        <div className="row">
          <div className="col-lg-5 text-center">
            <img
              src={imageUrl}
              className="img-fluid"
              alt={name}
              style={{ backgroundImage: 'contain' }}
            />
          </div>
          <div className="col-lg-7 mb-7 mb-lg-0 d-flex justify-content-between flex-column">
            <div className="">
              <h3>{name}</h3>
              <span className="d-block h3 mb-3 text-success">₹{price}</span>
              <p className="text-secondary">{details}</p>
            </div>
            <div className="mb-4 row">
              <div className="col">
                <button
                  onClick={this.handleAddToCart}
                  type="button"
                  className="btn btn-success btn-block"
                >
                  Add to cart
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-secondary btn-block">
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetails
