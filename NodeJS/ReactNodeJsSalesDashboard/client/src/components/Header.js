import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const Header = ({ isDate, label, date, handleDateChange, onSearchClick }) => {
  return (
    <form style={{ margin: '4px' }}>
      <label style={{ marginRight: '6px' }}>{label}</label>
      <DatePicker selected={date} onChange={handleDateChange} />
      {isDate && <small className="text-danger">Choose correct date</small>}
    </form>
  )
}

export default Header
