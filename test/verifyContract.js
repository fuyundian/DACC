const her = require("hardhat");


async function main() {
 
  const contracts = [
    // {
    //   name: 'Pools',
    //   address:"0x27C0A9b348Ddf60C70518Ba82FAfE10a3B0c7FDC",
    //   constructorArguments: ["0xc23920dce3d20435e1a66388ded9c9ff3b612148","0xB62749fA0319FE568E3c73386a85B213AA981798"],
    // },
    // {
    //   name: 'USDTToken',
    //   address:"0xB62749fA0319FE568E3c73386a85B213AA981798",
    //   constructorArguments: [100000000,"Tether USD","USDT",6],
    // },
    // {
    //   name: 'WBNB',
    //   address:"0x8374ae6C88aF7eBD40aF76aAfCA6b9593974467B",
    //   constructorArguments: [],
    // },
    // {
    //   name: 'BEP20USDT',
    //   address:"0x40d79951a8a3bf37274b3d41aC3e744839989BcF",
    //   constructorArguments: [],
    // },
    // {
    //   name: 'PancakeFactory',
    //   address:"0x59769bC2CE1D1B5b796f1E6cFd25676fCa37dcd4",
    //   constructorArguments: ["0xc23920DcE3D20435e1A66388deD9c9ff3B612148"],
    // },
    {
      name: 'PancakeRouter',
      address:"0xBA08b08d4FB8BB38C39D5F8c9DF0867eFDa1C274",
      constructorArguments: ["0x59769bC2CE1D1B5b796f1E6cFd25676fCa37dcd4","0x8374ae6C88aF7eBD40aF76aAfCA6b9593974467B"],
    },
    // {
    //   name: 'DACC',
    //   address:"0x7aEC0D492BDFb8437b30fe1b24E23fe75556D466",
    //   constructorArguments: [],
    // },
  
  ]
  console.log(contracts)
  let verifys = [];
  for (const { address, constructorArguments } of contracts) {
    try {
      verifys.push(await her.run('verify:verify', {
        address,
        constructorArguments,
      }));
      
    } catch (error) {
     console.log(error.toString())
    }
  }
  await  Promise.all(verifys);
}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })