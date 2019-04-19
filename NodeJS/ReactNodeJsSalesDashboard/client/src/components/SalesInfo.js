import React from 'react'
import InfoItem from './InfoItem'

const SalesInfo = ({ totalSales, avgRevenue, uniqueCustomers }) => {
  return (
    <div className="row">
      <div className="col-4">
        <InfoItem info="Total Sales" data={totalSales} />
      </div>
      <div className="col-4">
        <InfoItem info="Average Revenue / Day" data={avgRevenue} />
      </div>
      <div className="col-4">
        <InfoItem info="Unique Customers" data={uniqueCustomers} />
      </div>
    </div>
  )
}

export default SalesInfo
