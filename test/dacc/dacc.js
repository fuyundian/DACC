const network = (process.env.HARDHAT_NETWORK || 'mainnet');
const {deployContract,contractAt} = require(`../../scripts/help`);
async function main(){
    // const WBNB = await deployContract("WBNB",[]);
    // const BEP20USDT = await deployContract("BEP20USDT",[]);
    // 0x8374ae6C88aF7eBD40aF76aAfCA6b9593974467B 0x40d79951a8a3bf37274b3d41aC3e744839989BcF
    // console.log(WBNB.address,BEP20USDT.address)
    // const PancakeFactory = await deployContract("PancakeFactory",["0xc23920DcE3D20435e1A66388deD9c9ff3B612148"]);
    //0x59769bC2CE1D1B5b796f1E6cFd25676fCa37dcd4
    // console.log(PancakeFactory.address)
    const WBNB = await contractAt("WBNB", "0x8374ae6C88aF7eBD40aF76aAfCA6b9593974467B");
    // const BEP20USDT = await contractAt("BEP20USDT", "0x40d79951a8a3bf37274b3d41aC3e744839989BcF");
    const PancakeFactory = await contractAt("PancakeFactory", "0x59769bC2CE1D1B5b796f1E6cFd25676fCa37dcd4");
    const PancakeRouter = await deployContract("PancakeRouter",[PancakeFactory.address,WBNB.address]);
    console.log(PancakeRouter.address)
    //0x7aEC0D492BDFb8437b30fe1b24E23fe75556D466
    // const DACC = await deployContract("DACC",[]);
    // console.log(DACC.address)
}
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })