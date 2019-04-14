import React from 'react'

class AllRequestCard extends React.Component {
  render() {
    this.props.totalRequestArr.map(i => {
      i.map(j => console.log(j))
    })

    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Purpose</th>
            <th scope="col">Amount(eth)</th>
            <th scope="col">Address</th>
            <th scope="col">Complete</th>
            <th scope="col">Approval Count</th>
            <th scope="col">Approve Request</th>
            <th scope="col">Finalize Request</th>
          </tr>
        </thead>
        <tbody>
          {this.props.totalRequestArr.map((outer, index) => (
            <tr key={index}>
              {outer.map((inner, index) => (
                <td key={index}>{inner.toString()}</td>
              ))}
              <td>
                <button
                  onClick={this.props.handleApprove.bind(this, index)}
                  className="btn btn-outline-info btn-block "
                >
                  Approve
                </button>
              </td>
              <td>
                <button
                  onClick={this.props.handleFinalize.bind(this, index)}
                  className="btn btn-outline-secondary btn-block "
                >
                  Finalize
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default AllRequestCard
