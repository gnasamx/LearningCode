import React from 'react'
import { Link } from 'react-router-dom'

const ProductLook = ({ name, price }) => (
  <div className="col-sm-6 col-lg-3 mb-5 card text-center">
    <Link to="/" className="text-dark text-center d-block">
      <img
        classNames="img-fluid"
        width="250px"
        src="https://htmlstream.com/preview/space-v1.3/assets/img/500x550/img17.jpg"
      />
      <div className="border-top p-4">
        <h2 className="h5">{name}</h2>
        <span className="d-block h5 text-primary mb-0">${price}</span>
      </div>
    </Link>
  </div>
)

export default ProductLook
