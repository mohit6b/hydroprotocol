const HybridExchange = artifacts.require('./HybridExchange.sol')
const fs = require('fs')

module.exports = function (deployer) {
  deployer.deploy(HybridExchange, "0xbE48E4bE73504839A6821D16B32EFA32C172A2cf",
   "0x90977d1f754fC30f6209d1F6768B477578464E29")
    .then(() => {
    // Record recently deployed contract address to 'deployedAddress' file.
    if (HybridExchange._json) {
      // Save abi file to deployedABI.
      fs.writeFile(
        'deployedABI',
        JSON.stringify(HybridExchange._json.abi, 2),
        (err) => {
          if (err) throw err
          console.log(`The abi of ${HybridExchange._json.contractName} is recorded on deployedABI file`)
        })
    }

    fs.writeFile(
      'deployedAddress',
      HybridExchange.address,
      (err) => {
        if (err) throw err
        console.log(`The deployed contract address * ${HybridExchange.address} * is recorded on deployedAddress file`)
    })
  })
}
