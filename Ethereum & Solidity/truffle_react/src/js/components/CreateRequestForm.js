import React from 'react'

const CreateRequestForm = props => {
  return (
    <form>
      <div className="form-group row">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label ">
          Request purpose
        </label>
        <div className="col-sm-10">
          <input
            name="requestPurpose"
            type="text"
            className="form-control"
            id="inputEmail3"
            placeholder="Eg. Buy new tool"
            onChange={props.requestChangeHandler}
            value={props.requestPurpose}
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
          Amount of ETH
        </label>
        <div className="input-group col-sm-10">
          <div className="input-group-prepend">
            <div className="input-group-text">eth</div>
          </div>
          <input
            type="text"
            name="requestEthAmt"
            className="form-control"
            id="ContributionFieldId"
            aria-describedby="Help"
            placeholder="Enter amount"
            onChange={props.requestChangeHandler}
            value={props.requestEthAmt}
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="inputPassword4" className="col-sm-2 col-form-label">
          Worker Address
        </label>
        <div className="col-sm-10">
          <input
            name="requestWorkerAdd"
            type="text"
            className="form-control"
            id="inputPassword4"
            placeholder="Address"
            onChange={props.requestChangeHandler}
            value={props.requestWorkerAdd}
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-10">
          <button
            onClick={props.createNewRequestHandler}
            className="btn btn-primary"
          >
            Create Request
          </button>
        </div>
      </div>
    </form>
  )
}

export default CreateRequestForm
