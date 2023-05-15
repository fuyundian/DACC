require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-contract-sizer")
require('@typechain/hardhat')
const { version } = require("chai")
const {
  BSC_URL,
  BSC_DEPLOY_KEY,
  BSCSCAN_API_KEY,
  BSC_TESTNET_URL,
  BSC_TESTNET_DEPLOY_KEY
} = require("./env.json")

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners()

  for (const account of accounts) {
    console.info(account.address)
  }
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true
    },
    bsc: {
      url: BSC_URL,
      chainId: 56,
      gasPrice: 5000000000,
      accounts: [BSC_DEPLOY_KEY]
    },
    testnet: {
      url: BSC_TESTNET_URL,
      chainId: 97,
      gasPrice: 20000000000,
      blockGasLimit: 10000000000000000000000,
      accounts: [BSC_TESTNET_DEPLOY_KEY]
    },
  },
  etherscan: {
    apiKey: {
      bsc: BSCSCAN_API_KEY,
      bscTestnet: BSCSCAN_API_KEY,
    }
  },
  solidity: {
    compilers:[
      {version:"0.4.18"},
      {version:"0.5.12"},
      {version:"0.5.16"},
      // {version:"0.6.2"},
      {version:"0.6.6"},
      {version:"0.8.0"},
      {version:"0.8.1"},
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 999999 
      }
    
    }
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  },
}
