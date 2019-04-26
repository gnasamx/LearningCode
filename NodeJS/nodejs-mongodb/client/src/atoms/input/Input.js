import React from 'react'
import './input.css'

export const Input = ({ type, name, inputValue, onChangeHandler, placeholder }) => (
  <input
    type={type}
    name={name}
    value={inputValue}
    onChange={onChangeHandler}
    placeholder={placeholder}
    className="input"
  />
)
