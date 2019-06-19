// // /*global contract, config, it, assert*/
// /*
const SimpleStorage = require('Embark/contracts/SimpleStorage');

let accounts;

// For documentation please see https://embark.status.im/docs/contracts_testing.html
config({
  contracts: {
    "SimpleStorage": {}
  }
}, (_err, web3_accounts) => {
  accounts = web3_accounts
});

contract("SimpleStorage", function () {
  this.timeout(0);

  it("set storage value from owner", async function () {
    await SimpleStorage.methods.set(150).send({from:accounts[0]});
    let result = await SimpleStorage.methods.get().call();
    assert.strictEqual(parseInt(result, 10), 150);
  });

  it("set storage value not owner", async function () {
    try{
    await SimpleStorage.methods.set(150).send({from:accounts[5]});
    }catch(error){
      let actualError = error.message
      let expectedError = "not Owner"
      console.log("test");
      assert.ok(actualError.includes(expectedError))
    }
    console.log('test2')
  });
  
  it("should have account with balance", async function() {
    let balance = await web3.eth.getBalance(accounts[0]);
    assert.ok(parseInt(balance, 10) > 0);
  });
})
