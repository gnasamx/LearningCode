import React from 'react'
import { Link } from 'react-router-dom'

const ProductLook = ({ eachProduct }) => {
  let imageUrl = `http://localhost:8000/${eachProduct.image}`
  let productId = `/${eachProduct._id}`
  return (
    <div className="col-sm-6 col-lg-3 mb-5 ">
      <Link to={productId} className="text-dark card text-center d-block">
        <img
          src={imageUrl}
          className="img-fluid"
          style={{
            backgroundSize: 'cover'
          }}
          alt={eachProduct.name}
        />
        <div className="border-top p-4">
          <h2 className="h5">{eachProduct.name}</h2>
          <span className="d-block h5 text-primary mb-0">
            ₹{eachProduct.price}
          </span>
        </div>
      </Link>
    </div>
  )
}

export default ProductLook
