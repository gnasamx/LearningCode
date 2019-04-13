import React from 'react'
import Navbar from '../components/Navbar'

class Campaign extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allCampaigns: []
    }

    if (typeof web3 != 'undefined') {
      this.web3Provider = web3.currentProvider
    } else {
      this.web3Provider = new Web3.providers.HttpProvider(
        'http://127.0.0.1:8545'
      )
    }

    this.web3 = new Web3(this.web3Provider)
    this.account = web3.eth.accounts.toString()
  }

  componentDidMount() {
    this.campaign = TruffleContract(Campaign)
    this.campaign.setProvider(this.web3Provider)
  }

  render() {
    return (
      <React.Fragment>
        <Navbar accountAddress={this.account} />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>Campaign</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Campaign
