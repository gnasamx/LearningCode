import React from 'react'
import Navbar from '../components/Navbar'
import CampaignDetailsCard1 from '../components/CampaignDetailsCard1'
import CreatorDetailsCard from '../components/CreatorDetailsCard'

class Campaign extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      campaignAddress: this.props.match.params.camp,
      creator: null
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
    // this.setState({ campaignAddress: this.props.match.params.camp })

    // Getting all campaign details from campaign address
    if (this.state.campaignAddress) {
      try {
        console.log(`Campaign address from  url ${this.state.campaignAddress}`)
        this.campaign.at(this.state.campaignAddress).then(campaignInstance => {
          console.log(campaignInstance)
          // campaignInstance.manager().then(oo => {
          //   console.log(`Manager: => ${oo}`)
          //   this.setState({ creator: oo })
          // })
        })
      } catch (error) {
        console.log(
          `Something went wrong fetching campaign details from Blockchain: ${error}`
        )
      }
    } else {
      console.log(`Campaign details are not fetched yet`)
    }
  }

  render() {
    return (
      <React.Fragment>
        <Navbar accountAddress={this.account} />
        <div className="container">
          <div className="row">
            <div className="col-4">
              <CreatorDetailsCard creator={this.state.creator} />
            </div>
            <div className="col-4">
              <CampaignDetailsCard1 />
            </div>
            <div className="col-4">
              <CampaignDetailsCard1 />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Campaign
