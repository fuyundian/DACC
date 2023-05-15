const { contractAt, sendTxn, deployContract } = require(`../scripts/help`);
const ethers = require("ethers");
async function main() {

  const WBNB = await contractAt("WBNB", "0x8374ae6C88aF7eBD40aF76aAfCA6b9593974467B");
  const BEP20USDT = await contractAt("BEP20USDT", "0x40d79951a8a3bf37274b3d41aC3e744839989BcF");
  const PancakeFactory = await contractAt("PancakeFactory", "0x59769bC2CE1D1B5b796f1E6cFd25676fCa37dcd4");
  const PancakeRouter = await contractAt("PancakeRouter", "0x5F4CC8D34291a56D293da888F05294A7FDa00695");
  const DACC = await contractAt("DACC", "0x7aEC0D492BDFb8437b30fe1b24E23fe75556D466");
  // const USDTToken = await contractAt("USDTToken", "0xB62749fA0319FE568E3c73386a85B213AA981798");
  const decimals = Math.pow(10, 18);
  const max = ethers.constants.MaxUint256;
  // const transfer =ethers.BigNumber.from(decimals.toString()).mul(ethers.BigNumber.from("1000000")) ;
  // await sendTxn(BEP20USDT.approve(PancakeRouter.address,max),"BEP20USDT.approve(PancakeRouter.address,max)")
  // await sendTxn(BEP20USDT.transfer("0x2207239431e0C16180D8FC294373B0a29De537F3",transfer),"BEP20USDT.transfer(PancakeRouter.address,max)")
  // await sendTxn(DACC.approve(PancakeRouter.address,max),"DACC.approve(PancakeRouter.address,max)")
  // console.log((await DACC.allowance("0xc23920DcE3D20435e1A66388deD9c9ff3B612148",PancakeRouter.address)).toString())
  // console.log((await BEP20USDT.allowance("0xc23920DcE3D20435e1A66388deD9c9ff3B612148",PancakeRouter.address)).toString())
  // console.log((await DACC.balanceOf("0xc23920DcE3D20435e1A66388deD9c9ff3B612148")).toString())
  // console.log((await BEP20USDT.balanceOf("0xc23920DcE3D20435e1A66388deD9c9ff3B612148")).toString())
  // await sendTxn(PancakeFactory.createPair(BEP20USDT.address,DACC.address),"PancakeFactory.createPair(BEP20USDT.address,DACC.address)");
  // const value = ethers.BigNumber.from(decimals.toString()).mul(ethers.BigNumber.from("150000"));
  // console.log(BEP20USDT.address,DACC.address,value,value.mul(ethers.BigNumber.from(100)),0,0,"0xc23920DcE3D20435e1A66388deD9c9ff3B612148",1685548800)
  // let values = await sendTxn(PancakeRouter.addLiquidity(BEP20USDT.address,DACC.address,value,value.mul(ethers.BigNumber.from(100)),0,0,"0xc23920DcE3D20435e1A66388deD9c9ff3B612148",1685548800),"PancakeRouter.addLiquidity")
  // console.log(values) 
  //   (
      // uint amountOut,
      // uint amountInMax,
      // address[] calldata path,
      // address to,
      // uint deadline
  // }
  const value =ethers.BigNumber.from(decimals.toString()).mul(ethers.BigNumber.from("1000")) ;
  // let amountOuts = await PancakeRouter.getAmountsOut( value ,[BEP20USDT.address, DACC.address]);
  // let values = amountOuts[1] ;
  // let minValue =values.sub(values.mul(ethers.BigNumber.from("9000")).div(ethers.BigNumber.from("1000000")));
  // console.log(values,mintValue,"amountOuts");
  
  // await sendTxn(PancakeRouter.swapExactTokensForTokens( 0,value,[BEP20USDT.address, DACC.address], "0xc23920DcE3D20435e1A66388deD9c9ff3B612148", 1685548800), "PancakeRouter.swapTokensForExactTokens")

  await sendTxn(PancakeRouter.swapTokensForExactTokens( value,max,[BEP20USDT.address, DACC.address], "0xc23920DcE3D20435e1A66388deD9c9ff3B612148", 1685548800), "PancakeRouter.swapTokensForExactTokens")

} main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })