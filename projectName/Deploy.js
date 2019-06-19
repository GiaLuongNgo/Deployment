const ethers = require('ethers');
require('dotenv').config();

const contractInfo = require('./build/contracts/SimpleStorage.json');
// const bytecode = contractInfo.code;
const ABI = contractInfo.abiDefinition;

let provider = ethers.getDefaultProvider('ropsten');

console.log(process.env.pk);
let wallet = new ethers.Wallet(process.env.pk, provider);
// let ContractFactory = new ethers.ContractFactory(ABI, bytecode, wallet);
// async function deployContract() {
//   let contract = await ContractFactory.deploy();
//   await contract.deployed();
//   console.log(contract);
// }

// deployContract();
let contractAddress ="0x86B7746677A1F652abA4379ee7c74eDBe32635E2" ;
let readOnlyContract = new ethers.Contract(contractAddress, ABI, provider);
let readAndWriteContract = readOnlyContract.connect(wallet);

//call function
async function getValue() {
  let value = await readAndWriteContract.get();
  console.log("get value:", value.toNumber());
}
getValue();

async function set() {
  let a = await readAndWriteContract.set(9);
  console.log(a)
}
set();

//event listener

readOnlyContract.on('Data', (b) => {
  console.log(b.toNumber())
})

