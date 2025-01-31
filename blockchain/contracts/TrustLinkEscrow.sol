// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract TrustLinkEscrow is ReentrancyGuard {
    struct Milestone {
        uint256 amount;
        bool submitted;
        bool approved;
    }

    struct Project {
        address owner;
        address[] collaborators;
        Milestone[] milestones;
        uint256 totalFunds;
        bool completed;
    }

    mapping(uint256 => Project) public projects;
    uint256 public projectCounter;

    event ProjectCreated(uint256 indexed projectId, address indexed owner);
    event MilestoneSubmitted(uint256 indexed projectId, uint256 milestoneIndex, address collaborator);
    event MilestoneApproved(uint256 indexed projectId, uint256 milestoneIndex, address collaborator);
    event FundsReleased(uint256 indexed projectId, uint256 milestoneIndex, address collaborator);

    modifier onlyOwner(uint256 projectId) {
        require(msg.sender == projects[projectId].owner, "Not project owner");
        _;
    }

    function createProject(
        address[] memory _collaborators,
        uint256[] memory _amounts
    ) external payable nonReentrant {
        require(_collaborators.length == _amounts.length, "Mismatched arrays");

        uint256 totalRequired = 0;
        for (uint256 i = 0; i < _amounts.length; i++) {
            totalRequired += _amounts[i];
        }

        require(msg.value == totalRequired, "Incorrect funds sent");

        uint256 projectId = ++projectCounter;
        Project storage newProject = projects[projectId];
        newProject.owner = msg.sender;
        newProject.totalFunds = msg.value;

        for (uint256 i = 0; i < _collaborators.length; i++) {
            newProject.collaborators.push(_collaborators[i]);
            newProject.milestones.push(Milestone({ amount: _amounts[i], submitted: false, approved: false }));
        }

        emit ProjectCreated(projectId, msg.sender);
    }

    function submitMilestone(uint256 projectId, uint256 milestoneIndex) external {
        Project storage project = projects[projectId];

        require(!project.completed, "Project is completed");
        require(milestoneIndex < project.milestones.length, "Invalid milestone");
        require(project.milestones[milestoneIndex].submitted == false, "Milestone already submitted");

        bool isCollaborator = false;
        for (uint256 i = 0; i < project.collaborators.length; i++) {
            if (msg.sender == project.collaborators[i]) {
                isCollaborator = true;
                break;
            }
        }

        require(isCollaborator, "Not a collaborator");

        project.milestones[milestoneIndex].submitted = true;
        emit MilestoneSubmitted(projectId, milestoneIndex, msg.sender);
    }

    function approveMilestone(uint256 projectId, uint256 milestoneIndex) external onlyOwner(projectId) nonReentrant {
        Project storage project = projects[projectId];

        require(!project.completed, "Project is completed");
        require(milestoneIndex < project.milestones.length, "Invalid milestone");
        require(project.milestones[milestoneIndex].submitted, "Milestone not submitted");
        require(!project.milestones[milestoneIndex].approved, "Milestone already approved");

        project.milestones[milestoneIndex].approved = true;

        address collaborator = project.collaborators[milestoneIndex];
        uint256 amount = project.milestones[milestoneIndex].amount;
        
        payable(collaborator).transfer(amount);
        
        emit MilestoneApproved(projectId, milestoneIndex, collaborator);
        emit FundsReleased(projectId, milestoneIndex, collaborator);

        if (milestoneIndex == project.milestones.length - 1) {
            project.completed = true;
        }
    }
}