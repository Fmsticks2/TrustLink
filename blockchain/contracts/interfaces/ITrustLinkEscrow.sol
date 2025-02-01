// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ITrustLinkEscrow {
    event ProjectCreated(uint256 indexed projectId, address indexed owner, uint256 totalFunds);
    event MilestoneSubmitted(uint256 indexed projectId, uint256 indexed milestoneId);
    event MilestoneApproved(uint256 indexed projectId, uint256 indexed milestoneId);
    event FundsReleased(uint256 indexed projectId, uint256 indexed milestoneId, address indexed collaborator);

    function createProject(address[] calldata collaborators, uint256[] calldata amounts) external payable;
    function submitMilestone(uint256 projectId, uint256 milestoneId) external;
    function approveMilestone(uint256 projectId, uint256 milestoneId) external;
}