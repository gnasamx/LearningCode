const Campaign = artifacts.require('Campaign')
module.exports = function(deployer) {
  deployer.deploy(Campaign, 10, '0xaa8598658d8c51d5375cb5a21fbfb94807af8c75' )
}
