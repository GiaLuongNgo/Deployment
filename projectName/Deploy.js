const ethers = require('ethers');
require('dotenv').config();

const contractInfo = require('./build/contracts/SimpleStorage.json');
const bytecode = contractInfo.code;
const ABI = contractInfo.abiDefinition;

let provider = ethers.getDefaultProvider('ropsten');

console.log(process.env.PK);
let wallet = new ethers.Wallet(process.env.PK, provider);

let ContractFactory = new ethers.ContractFactory(ABI, bytecode, wallet);

async function deployContract() {
  let contract = await ContractFactory.deploy();
  await contract.deployed();
  console.log(contract);
}

deployContract();