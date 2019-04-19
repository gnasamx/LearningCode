import React from 'react'

const RecentTransactions = ({ recentTransactions }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Time</th>
          <th scope="col">Name</th>
          <th scope="col">Payment Status</th>
          <th scope="col">Amount</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {recentTransactions.length !== 0 ? (
          recentTransactions.slice(0, 20).map((singleTransaction, index) => (
            <tr key={index}>
              {Object.values(singleTransaction).map((ii, index) => (
                <td key={index}>{ii}</td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td>No transactions</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default RecentTransactions
