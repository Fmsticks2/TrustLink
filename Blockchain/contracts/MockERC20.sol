// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MockERC20 is ERC20, Ownable {
    uint8 private _decimals;

    constructor(
        string memory name,
        string memory symbol,
        uint8 decimals_
    ) ERC20(name, symbol) {
        _decimals = decimals_;
        
        // Mint 1 million tokens to the deployer for testing
        _mint(msg.sender, 1000000 * 10**decimals_);
    }

    function decimals() public view virtual override returns (uint8) {
        return _decimals;
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    // Function to request test tokens (faucet functionality)
    function requestTokens() external {
        require(balanceOf(msg.sender) < 1000 * 10**_decimals, "Already have sufficient tokens");
        _mint(msg.sender, 1000 * 10**_decimals);
    }
}