// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/ITrustLinkEscrow.sol";
import "./libraries/MilestoneLib.sol";
import "./helpers/SafeTransfer.sol";

contract TrustLinkEscrow is ITrustLinkEscrow {
    using MilestoneLib for MilestoneLib.Milestone;
    using SafeTransfer for address payable;

    uint256 private projectCounter;
    mapping(uint256 => Project) private projects;

    struct Project {
        address owner;
        address[] collaborators;
        uint256 totalFunds;
        mapping(uint256 => MilestoneLib.Milestone) milestones;
        uint256 milestoneCount;
    }

    modifier onlyOwner(uint256 projectId) {
        require(projects[projectId].owner == msg.sender, "Not project owner");
        _;
    }

    function createProject(
        address[] calldata collaborators,
        uint256[] calldata amounts
    ) external payable override {
        require(collaborators.length == amounts.length, "Mismatched input lengths");
        require(msg.value == sum(amounts), "Incorrect funds sent");

        projectCounter++;
        Project storage project = projects[projectCounter];
        project.owner = msg.sender;
        project.totalFunds = msg.value;

        for (uint256 i = 0; i < collaborators.length; i++) {
            project.collaborators.push(collaborators[i]);
            project.milestones[i] = MilestoneLib.Milestone({
                amount: amounts[i],
                isApproved: false,
                isCompleted: false,
                collaborator: collaborators[i]
            });
            project.milestoneCount++;
        }

        emit ProjectCreated(projectCounter, msg.sender, msg.value);
    }

    function submitMilestone(uint256 projectId, uint256 milestoneId) external override {
        require(projectId > 0 && projectId <= projectCounter, "Invalid project ID");
        Project storage project = projects[projectId];
        require(milestoneId < project.milestoneCount, "Invalid milestone ID");

        MilestoneLib.Milestone storage milestone = project.milestones[milestoneId];
        require(milestone.collaborator == msg.sender, "Not assigned collaborator");

        milestone.complete();
        emit MilestoneSubmitted(projectId, milestoneId);
    }

    function approveMilestone(uint256 projectId, uint256 milestoneId) external override onlyOwner(projectId) {
        require(projectId > 0 && projectId <= projectCounter, "Invalid project ID");
        Project storage project = projects[projectId];
        require(milestoneId < project.milestoneCount, "Invalid milestone ID");

        MilestoneLib.Milestone storage milestone = project.milestones[milestoneId];
        milestone.approve();
        payable(milestone.collaborator).safeTransfer(milestone.amount);

        emit MilestoneApproved(projectId, milestoneId);
        emit FundsReleased(projectId, milestoneId, milestone.collaborator);
    }

    function getProject(uint256 projectId) external view returns (
        address owner,
        address[] memory collaborators,
        uint256 totalFunds,
        uint256 milestoneCount
    ) {
        require(projectId > 0 && projectId <= projectCounter, "Invalid project ID");
        Project storage project = projects[projectId];
        return (project.owner, project.collaborators, project.totalFunds, project.milestoneCount);
    }

    function getMilestone(uint256 projectId, uint256 milestoneId) external view returns (
        uint256 amount,
        bool isApproved,
        bool isCompleted,
        address collaborator
    ) {
        require(projectId > 0 && projectId <= projectCounter, "Invalid project ID");
        Project storage project = projects[projectId];
        require(milestoneId < project.milestoneCount, "Invalid milestone ID");

        MilestoneLib.Milestone storage milestone = project.milestones[milestoneId];
        return (milestone.amount, milestone.isApproved, milestone.isCompleted, milestone.collaborator);
    }

    function sum(uint256[] memory amounts) private pure returns (uint256 total) {
        for (uint256 i = 0; i < amounts.length; i++) {
            total += amounts[i];
        }
    }
}
