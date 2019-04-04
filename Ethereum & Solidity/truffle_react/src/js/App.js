import React from 'react'
import ReactDOM from 'react-dom'
import Web3 from 'web3'
import TruffleContract from 'truffle-contract'
// import Election from '../../build/contracts/Election.json'
// import Content from './Content'
import 'bootstrap/dist/css/bootstrap.css'
import CampaignFactory from '../../build/contracts/CampaignFactory'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      account: '0x0',
      loading: true,
      campaignFactoryAddress: null
    }

    if (typeof web3 != 'undefined') {
      this.web3Provider = web3.currentProvider
    } else {
      this.web3Provider = new Web3.providers.HttpProvider(
        'http://localhost:7545'
      )
    }

    this.web3 = new Web3(this.web3Provider)

    // this.election = TruffleContract(Election)
    // this.election.setProvider(this.web3Provider)

    this.campaignFactory = TruffleContract(CampaignFactory)
    this.campaignFactory.setProvider(this.web3Provider)

    // this.castVote = this.castVote.bind(this)
    // this.watchEvents = this.watchEvents.bind(this)

    this.createNewCampaignHandler = this.createNewCampaignHandler.bind(this)
  }

  componentDidMount() {
    // TODO: Refactor with promise chain
    this.web3.eth.getCoinbase((err, account) => {
      this.setState({ account })
      // this.election.deployed().then((electionInstance) => {
      //   this.electionInstance = electionInstance
      //   this.watchEvents()
      //   this.electionInstance.candidatesCount().then((candidatesCount) => {
      //     for (var i = 1; i <= candidatesCount; i++) {
      //       this.electionInstance.candidates(i).then((candidate) => {
      //         const candidates = [...this.state.candidates]
      //         candidates.push({
      //           id: candidate[0],
      //           name: candidate[1],
      //           voteCount: candidate[2]
      //         });
      //         this.setState({ candidates: candidates })
      //       });
      //     }
      //   })
      //   this.electionInstance.voters(this.state.account).then((hasVoted) => {
      //     this.setState({ hasVoted, loading: false })
      //   })
      // })
      console.log('creating campaign factory')
      this.campaignFactory.deployed().then(campaignFactoryInstance => {
        this.campaignFactoryInstance = campaignFactoryInstance
        console.log('Okay => ', campaignFactoryInstance)
        this.setState({
          campaignFactoryAddress: campaignFactoryInstance.address
        })
      })
    })
  }

  // watchEvents() {
  //   // TODO: trigger event when vote is counted, not when component renders
  //   this.electionInstance.votedEvent({}, {
  //     fromBlock: 0,
  //     toBlock: 'latest'
  //   }).watch((error, event) => {
  //     this.setState({ voting: false })
  //   })
  // }

  // castVote(candidateId) {
  //   this.setState({ voting: true })
  //   this.electionInstance.vote(candidateId, { from: this.state.account }).then((result) =>
  //     this.setState({ hasVoted: true })
  //   )
  // }

  createNewCampaignHandler = () => {
    console.log('creating new campaign')
    this.campaignFactoryInstance
      .createCampaign(10, { from: this.state.account })
      .then(campaignFactory => {
        console.log('New Campaign => ', campaignFactory)
        this.setState({ campaignFactory })
      })
  }

  getAllDeployedCampaigns = () => {
    console.log('Fetching all the campaigns')
    this.campaignFactoryInstance.getDeployedCampaigns().then(allCampaigns => {
      console.log(`All campaign ${allCampaigns}`)
      // allCampaigns.map((campaign) => {
      //   console.log(`Campaign: ${campaign.receipt.gasUsed}`)
      // })
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12 text-center">
          <h1>CrowdSF</h1>
          <p>Your account address: {this.state.account}</p>
          <p>CampaignFactory: {this.state.campaignFactoryAddress}</p>
          <button
            className="btn btn-success"
            onClick={this.createNewCampaignHandler}
          >
            Create Campaign
          </button>
          <button
            className="btn btn-warning ml-2"
            onClick={this.getAllDeployedCampaigns}
          >
            Fetch All Campaigns
          </button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
