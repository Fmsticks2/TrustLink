// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/IDisputeResolution.sol";

contract DisputeResolution is IDisputeResolution {
    uint256 private disputeCounter;
    mapping(uint256 => Dispute) private disputes;

    function raiseDispute(
        uint256 projectId,
        uint256 milestoneId,
        string calldata reason
    ) external override {
        disputeCounter++;
        disputes[disputeCounter] = Dispute({
            projectId: projectId,
            milestoneId: milestoneId,
            raisedBy: msg.sender,
            reason: reason,
            isResolved: false,
            resolver: address(0)
        });

        emit DisputeRaised(disputeCounter, projectId, milestoneId, msg.sender);
    }

    function resolveDispute(uint256 disputeId, string calldata resolutionDetails) external override {
        Dispute storage dispute = disputes[disputeId];

        require(!dispute.isResolved, "Dispute already resolved");
        dispute.isResolved = true;
        dispute.resolver = msg.sender;

        emit DisputeResolved(disputeId, msg.sender, resolutionDetails);
    }
}