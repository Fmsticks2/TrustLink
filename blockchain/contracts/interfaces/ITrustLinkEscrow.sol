// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ITrustLinkEscrow {
    struct Milestone {
        uint256 amount;
        bool isApproved;
        bool isCompleted;
        address collaborator;
    }

    function createProject(
        address[] calldata collaborators,
        uint256[] calldata amounts
    ) external payable;

    function submitMilestone(uint256 projectId, uint256 milestoneId) external;

    function approveMilestone(uint256 projectId, uint256 milestoneId) external;

    event ProjectCreated(uint256 projectId, address owner, uint256 totalFunds);
    event MilestoneSubmitted(uint256 projectId, uint256 milestoneId);
    event MilestoneApproved(uint256 projectId, uint256 milestoneId);
    event FundsReleased(uint256 projectId, uint256 milestoneId, address collaborator);
}