import React from 'react'

const InfoItem = ({ data, info }) => {
  return (
    <div className="text-center">
      {info !== 'Unique Customers' ? <h3>${data}</h3> : <h3>{data}</h3>}
      <p>{info}</p>
    </div>
  )
}

export default InfoItem
