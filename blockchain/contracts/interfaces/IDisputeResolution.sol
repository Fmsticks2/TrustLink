// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IDisputeResolution {
    struct Dispute {
        uint256 projectId;
        uint256 milestoneId;
        address raisedBy;
        string reason;
        bool isResolved;
        address resolver;
    }

    function raiseDispute(
        uint256 projectId,
        uint256 milestoneId,
        string calldata reason
    ) external;

    function resolveDispute(uint256 disputeId, string calldata resolutionDetails) external;

    event DisputeRaised(uint256 disputeId, uint256 projectId, uint256 milestoneId, address raisedBy);
    event DisputeResolved(uint256 disputeId, address resolver, string resolutionDetails);
}