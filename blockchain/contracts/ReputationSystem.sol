// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ReputationSystem {
    struct UserReputation {
        uint256 completedMilestones;
        uint256 disputesResolved;
        uint256 disputesRaised;
        uint256 reputationScore;
    }

    mapping(address => UserReputation) public userReputations;

    event ReputationUpdated(
        address user,
        uint256 completedMilestones,
        uint256 disputesResolved,
        uint256 disputesRaised,
        uint256 reputationScore
    );

    function updateReputation(
        address user,
        uint256 completedMilestones,
        uint256 disputesResolved,
        uint256 disputesRaised
    ) external {
        UserReputation storage reputation = userReputations[user];

        reputation.completedMilestones += completedMilestones;
        reputation.disputesResolved += disputesResolved;
        reputation.disputesRaised += disputesRaised;

        // Calculate reputation score
        reputation.reputationScore =
            (reputation.completedMilestones * 2) +
            (reputation.disputesResolved * 3) -
            (reputation.disputesRaised);

        emit ReputationUpdated(
            user,
            reputation.completedMilestones,
            reputation.disputesResolved,
            reputation.disputesRaised,
            reputation.reputationScore
        );
    }

    function getUserReputation(address user)
        external
        view
        returns (
            uint256 completedMilestones,
            uint256 disputesResolved,
            uint256 disputesRaised,
            uint256 reputationScore
        )
    {
        UserReputation storage reputation = userReputations[user];
        return (
            reputation.completedMilestones,
            reputation.disputesResolved,
            reputation.disputesRaised,
            reputation.reputationScore
        );
    }
}