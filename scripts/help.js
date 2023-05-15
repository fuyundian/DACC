const network = (process.env.HARDHAT_NETWORK || 'mainnet');

const BSC_TEST = 97
const BSC = 56
const {

   BSC_TESTNET_DEPLOY_KEY,
   BSC_TESTNET_URL,
   BSC_URL
  } = require("../env.json")

const providers = {
    nettest: new ethers.providers.JsonRpcProvider(BSC_TESTNET_URL),
    bscTest: new ethers.providers.JsonRpcProvider(BSC_URL)
  }
  
const signers = {
    testnet: new ethers.Wallet(BSC_TESTNET_DEPLOY_KEY).connect(providers.nettest),
}

async function deployContract(name, args) {
  const contractFactory = await ethers.getContractFactory(name)
  return await contractFactory.deploy(...args)
}

async function contractAt(name, address) {
  const contractFactory = await ethers.getContractFactory(name)
  return await contractFactory.attach(address)
}

async function sendTxn(txnPromise, label) {
  try{
  const txn = await txnPromise
  console.info(`Sending ${label}...`)
  await txn.wait()
  console.info(`... Sent! ${txn.hash}`)
  // await sleep(1000)
  return txn
  }catch(error){
    console.info(`Sending ${label}... ,error :${error}`)
  }
}

module.exports = {
  deployContract,
  contractAt,
  signers,
  sendTxn
}