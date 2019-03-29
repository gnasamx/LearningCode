;(App = {
  web3Provider: null,
  contracts: {},

  init: async function() {
    return await App.initWeb3()
  },

  initWeb3: async function() {
    if (typeof web3 !== 'undefined') {
      // If a web3 instance is already provided by Meta Mask.
      App.web3Provider = web3.currentProvider
      web3 = new Web3(web3.currentProvider)
    } else {
      // Specify default instance if no web3 instance provided
      App.web3Provider = new Web3.providers.HttpProvider(
        'http://localhost:8545'
      )
      web3 = new Web3(App.web3Provider)
    }
    return App.initContract()
  },

  initContract: function() {
    $.getJSON('CampaignFactory.json', function(campaign) {
      App.contracts.CampaignFactory = TruffleContract(campaign)
      App.contracts.CampaignFactory.setProvider(App.web3Provider)
      // App.listenForEvents()
      return App.render()
    })
  },

  render: function() {
    let campaignFactoryInstance
    // Load account data
    web3.eth.getCoinbase(function(err, account) {
      if (err === null) {
        App.account = account
        $('#accountAddress').html('Your Account: ' + account)
      }
    })

    // console.log(App)
    console.log('Outside render')
    // App.contracts.CampaignFactory.deployed()
    //   .then(function(instance) {
    //     console.log('Hello')
    //     campaignFactoryInstance = instance
    //     console.log(instance)
    //     return campaignFactoryInstance.createCampaign(10)
    //   })
    //   .then(function(campaignAddress) {
    //     let newCampaignAddress = campaignAddress
    //     console.log(campaignAddress)
    //     $('#campaignAddress').html('Campaign ' + newCampaignAddress)
    //   })

    // bindEvents: function() {
    //   $(document).on('click', '.btn-adopt', App.handleAdopt);
  }
}),
  $(function() {
    $(window).load(function() {
      App.init()
    })
  })
