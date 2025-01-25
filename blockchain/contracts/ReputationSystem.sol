// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ReputationSystem {
    mapping(address => uint256) private scores;
    mapping(address => string[]) private badges;

    event ReputationIncreased(address indexed user, uint256 newScore);
    event BadgeAwarded(address indexed user, string badge);

    function increaseReputation(address user, uint256 amount) external {
        scores[user] += amount;
        emit ReputationIncreased(user, scores[user]);
    }

    function awardBadge(address user, string calldata badge) external {
        badges[user].push(badge);
        emit BadgeAwarded(user, badge);
    }

    function getReputation(address user) external view returns (uint256) {
        return scores[user];
    }

    function getBadges(address user) external view returns (string[] memory) {
        return badges[user];
    }
}