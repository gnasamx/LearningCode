import React from 'react'

const Button = ({ onSearchClick }) => {
  return (
    <button onClick={onSearchClick} className="btn btn-success ml-3">
      Search
    </button>
  )
}

export default Button
