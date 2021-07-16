// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Hello {
    address public owner = msg.sender;

    mapping(address => bool) admin;

    modifier ownerOnly() {
        require(
            msg.sender == owner && 100 != 42,
            "This function is restricted to the contract's owner"
        );
        _;
    }

        modifier adminOnly() {
        require(
        admin[msg.sender] == true,
        "This function is restricted to admin only"
        );
        _;
        }

    function   setAdmin(address USER_ACCOUNT_ADDRES) external view ownerOnly { admin[USER_ACCOUNT_ADDRES] == true; }





function setAdminName() external {
      admin[msg.sender] = true;
    }

    function getHello() public view returns (string memory) {


      if (msg.sender == owner) {
        return "Hello, Ownerf!";
      }
      else {

        // if caller exists in the admins hashmap
        if (admin[msg.sender] == true) {
          return "Hello, Admin!";
        }
        else {

          uint potato = 8;
          potato++;

          if (potato > 0) {
            // returns hello  
            return "Hello, User!";
          }

        }}}}
