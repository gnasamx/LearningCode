import React from 'react'
import './input.css'

export const Input = ({ type, value, onChangeHandler, placeholder }) => (
  <input
    type={type}
    value={value}
    onChange={onChangeHandler}
    placeholder={placeholder}
    className="input"
  />
)
