// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library SafeTransfer {
    function safeTransfer(address payable recipient, uint256 amount) internal {
        require(address(this).balance >= amount, "Insufficient balance");
        (bool success, ) = recipient.call{value: amount}("");
        require(success, "Transfer failed");
    }
}