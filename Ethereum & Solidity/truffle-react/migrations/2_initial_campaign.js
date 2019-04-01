const Campaign = artifacts.require('Campaign')
module.exports = function(deployer) {
  deployer.deploy(Campaign, 10, '0x2f867b7971871f8be6bd586d7fc6cc671001ff5f' )
}
