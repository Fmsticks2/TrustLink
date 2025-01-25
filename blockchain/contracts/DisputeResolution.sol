// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DisputeResolution {
    struct Dispute {
        uint256 projectId;
        uint256 milestoneId;
        address raisedBy;
        string reason;
        bool isResolved;
        address resolver;
    }

    uint256 public disputeCount;
    mapping(uint256 => Dispute) public disputes;

    event DisputeRaised(uint256 disputeId, uint256 projectId, uint256 milestoneId, address raisedBy);
    event DisputeResolved(uint256 disputeId, address resolver, string resolutionDetails);

    function raiseDispute(
        uint256 projectId,
        uint256 milestoneId,
        string calldata reason
    ) external {
        disputeCount++;
        disputes[disputeCount] = Dispute({
            projectId: projectId,
            milestoneId: milestoneId,
            raisedBy: msg.sender,
            reason: reason,
            isResolved: false,
            resolver: address(0)
        });

        emit DisputeRaised(disputeCount, projectId, milestoneId, msg.sender);
    }

    function resolveDispute(uint256 disputeId, string calldata resolutionDetails) external {
        Dispute storage dispute = disputes[disputeId];
        require(!dispute.isResolved, "Dispute already resolved");

        dispute.isResolved = true;
        dispute.resolver = msg.sender;

        emit DisputeResolved(disputeId, msg.sender, resolutionDetails);
    }

    function getDisputeDetails(uint256 disputeId)
        external
        view
        returns (
            uint256 projectId,
            uint256 milestoneId,
            address raisedBy,
            string memory reason,
            bool isResolved,
            address resolver
        )
    {
        Dispute storage dispute = disputes[disputeId];
        return (
            dispute.projectId,
            dispute.milestoneId,
            dispute.raisedBy,
            dispute.reason,
            dispute.isResolved,
            dispute.resolver
        );
    }
}