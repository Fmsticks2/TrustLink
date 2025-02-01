// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library MilestoneLib {
    struct Milestone {
        uint256 amount;
        bool isApproved;
        bool isCompleted;
        address collaborator;
    }

    function complete(Milestone storage milestone) internal {
        require(!milestone.isCompleted, "Milestone already completed");
        milestone.isCompleted = true;
    }

    function approve(Milestone storage milestone) internal {
        require(!milestone.isApproved, "Milestone already approved");
        milestone.isApproved = true;
    }
}