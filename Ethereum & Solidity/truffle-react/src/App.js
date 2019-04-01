import React, { Component } from 'react'
import Web3 from 'web3'
import TruffleContract from 'truffle-contract'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      account: '0x0',
      candidates: [],
      hasVoted: false,
      loading: true,
      voting: false
    }
  }

  initWeb3() {
    this.web3 = new Web3(
      new Web3.providers.HttpProvider('http://localhost:8545')
    )
  }

  componentDidMount() {
    this.initWeb3()
    // TODO: Refactor with promise chain
    this.web3.eth.getCoinbase((err, account) => {
      if (err) {
        console.log(err)
      }
      this.setState({ account })
    })
  }

  render() {
    return (
      <div>
        <p>It Works</p>
        <p>{this.state.account}</p>
      </div>
    )
  }
}

export default App
