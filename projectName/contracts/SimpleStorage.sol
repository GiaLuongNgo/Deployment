pragma solidity ^0.5.0;
//Declares a new contract
contract SimpleStorage {
    uint storedData;
    address owner;
    constructor() public {
        owner = msg.sender;
    }
    modifier onlyOwner() {
        require(owner==msg.sender,"not Owner");
        _;
    }

    function set(uint x) public onlyOwner {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}