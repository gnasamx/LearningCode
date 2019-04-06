import React from 'react'
import Campaign from '../../../build/contracts/Campaign'

// const singleCampFunction = props => (
//   <div className="card" style="width: 18rem;">
//     <div className="card-body">
//       <h5 className="card-title">{props}</h5>
//       <h6 className="card-subtitle mb-2 text-muted">Campaign</h6>
//       <p className="card-text">
//         Some quick example text to build on the card title and make up the bulk
//         of the card's content.
//       </p>
//     </div>
//   </div>
// )

class SingleCampaign extends React.Component {
  constructor(props) {
    super(props)

    if (typeof web3 != 'undefined') {
      this.web3Provider = web3.currentProvider
    } else {
      this.web3Provider = new Web3.providers.HttpProvider(
        'http://localhost:8545'
      )
    }

    this.web3 = new Web3(this.web3Provider)
  }

  componentDidMount() {
    this.campaign = TruffleContract(Campaign)
    this.campaign.setProvider(this.web3Provider)
  }

  listOnClickHandler = campAdd => {
    // console.log(campAdd)

    this.campaign
      .at(campAdd)
      .then(campaignInstance => {
        // campaignInstance.manager().then(oo => {
        //   console.log(`Minimum contribution: => ${oo}`)
        // })

        campaignInstance.contribute({value: 20}).then(() => {
          console.log("Successful contribution")
        })
      })
  }

  render() {
    const campaignList = this.props.campaignsFromBlockchain.map(
      (cfbcAddress, i) => (
        <li key={i} onClick={() => this.listOnClickHandler(cfbcAddress)}>
          {cfbcAddress}
        </li>
      )
    )

    return <ul>{campaignList}</ul>
  }
}

export default SingleCampaign
