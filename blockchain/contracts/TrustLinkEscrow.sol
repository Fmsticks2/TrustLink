// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TrustLinkEscrow {
    struct Milestone {
        uint256 amount;
        bool isApproved;
        bool isCompleted;
        address collaborator;
    }

    struct Project {
        address owner;
        uint256 totalFunds;
        mapping(uint256 => Milestone) milestones;
        uint256 currentMilestone;
        bool isCompleted;
    }

    mapping(uint256 => Project) public projects;
    uint256 public projectCount;

    event ProjectCreated(uint256 projectId, address owner, uint256 totalFunds);
    event MilestoneSubmitted(uint256 projectId, uint256 milestoneId);
    event MilestoneApproved(uint256 projectId, uint256 milestoneId);
    event FundsReleased(uint256 projectId, uint256 milestoneId, address collaborator);

    modifier onlyOwner(uint256 projectId) {
        require(msg.sender == projects[projectId].owner, "Not the project owner");
        _;
    }

    modifier onlyCollaborator(uint256 projectId, uint256 milestoneId) {
        require(
            msg.sender == projects[projectId].milestones[milestoneId].collaborator,
            "Not the assigned collaborator"
        );
        _;
    }

    function createProject(
        address[] calldata collaborators,
        uint256[] calldata amounts
    ) external payable {
        require(collaborators.length == amounts.length, "Mismatched data");
        require(msg.value > 0, "Funds required");

        projectCount++;
        Project storage project = projects[projectCount];
        project.owner = msg.sender;
        project.totalFunds = msg.value;

        uint256 totalAmount;
        for (uint256 i = 0; i < collaborators.length; i++) {
            project.milestones[i] = Milestone({
                amount: amounts[i],
                isApproved: false,
                isCompleted: false,
                collaborator: collaborators[i]
            });
            totalAmount += amounts[i];
        }

        require(totalAmount == msg.value, "Amount mismatch");
        emit ProjectCreated(projectCount, msg.sender, msg.value);
    }

    function submitMilestone(uint256 projectId, uint256 milestoneId)
        external
        onlyCollaborator(projectId, milestoneId)
    {
        Milestone storage milestone = projects[projectId].milestones[milestoneId];
        require(!milestone.isCompleted, "Milestone already completed");

        milestone.isCompleted = true;
        emit MilestoneSubmitted(projectId, milestoneId);
    }

    function approveMilestone(uint256 projectId, uint256 milestoneId)
        external
        onlyOwner(projectId)
    {
        Milestone storage milestone = projects[projectId].milestones[milestoneId];
        require(milestone.isCompleted, "Milestone not completed");
        require(!milestone.isApproved, "Milestone already approved");

        milestone.isApproved = true;
        payable(milestone.collaborator).transfer(milestone.amount);

        emit MilestoneApproved(projectId, milestoneId);
        emit FundsReleased(projectId, milestoneId, milestone.collaborator);
    }
}