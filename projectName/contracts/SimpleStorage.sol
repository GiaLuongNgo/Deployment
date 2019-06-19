pragma solidity ^0.5.0;
//Declares a new contract
contract SimpleStorage {
    event Data (uint data);
    uint storedData;
    address owner;
    constructor() public {
        owner = msg.sender;
    }

    function set(uint x) public  {
        storedData = x;
        emit Data(storedData);
    }

    function get() public view returns (uint) {
        return storedData;
    }
}