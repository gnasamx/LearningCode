const Campaign = artifacts.require('Campaign')

module.exports = function(deployer) {
  deployer.deploy(Campaign, 10, '0x28b4dd9e8e47aacda00b15177c8a72fb2a7dcaa5')
}
