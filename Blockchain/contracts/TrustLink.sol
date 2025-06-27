// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TrustLink is ReentrancyGuard, Ownable {
    // Structs
    struct Job {
        uint256 id;
        address client;
        string title;
        string description;
        uint256 budget;
        bool isFixed;
        bool isActive;
        address freelancer;
        uint256 deadline;
        JobStatus status;
    }

    struct Proposal {
        uint256 id;
        uint256 jobId;
        address freelancer;
        uint256 bid;
        string description;
        bool accepted;
    }

    struct UserProfile {
        string name;
        string skills;
        uint256 rating;
        uint256 totalRatings;
        bool isVerified;
        UserType userType;
    }

    // Enums
    enum JobStatus { Open, InProgress, Completed, Cancelled }
    enum UserType { Client, Freelancer }

    // State variables
    mapping(uint256 => Job) public jobs;
    mapping(uint256 => Proposal[]) public jobProposals;
    mapping(address => UserProfile) public userProfiles;
    mapping(address => uint256[]) public userJobs;
    mapping(address => uint256) public userEscrowBalances;

    uint256 public jobCounter;
    uint256 public proposalCounter;
    uint256 public platformFee; // in basis points (1% = 100)
    IERC20 public paymentToken;

    // Events
    event JobCreated(uint256 indexed jobId, address indexed client, string title, uint256 budget);
    event ProposalSubmitted(uint256 indexed jobId, uint256 proposalId, address indexed freelancer);
    event ProposalAccepted(uint256 indexed jobId, uint256 proposalId, address indexed freelancer);
    event JobCompleted(uint256 indexed jobId, address indexed client, address indexed freelancer);
    event PaymentReleased(uint256 indexed jobId, address indexed freelancer, uint256 amount);

    constructor(address _paymentToken, uint256 _platformFee) {
        paymentToken = IERC20(_paymentToken);
        platformFee = _platformFee;
    }

    // Core functions
    function createJob(
        string memory _title,
        string memory _description,
        uint256 _budget,
        bool _isFixed,
        uint256 _deadline
    ) external {
        require(_budget > 0, "Invalid budget");
        require(_deadline > block.timestamp, "Invalid deadline");

        uint256 escrowAmount = _budget + (_budget * platformFee / 10000);
        require(paymentToken.transferFrom(msg.sender, address(this), escrowAmount), "Escrow transfer failed");

        jobs[jobCounter] = Job({
            id: jobCounter,
            client: msg.sender,
            title: _title,
            description: _description,
            budget: _budget,
            isFixed: _isFixed,
            isActive: true,
            freelancer: address(0),
            deadline: _deadline,
            status: JobStatus.Open
        });

        userJobs[msg.sender].push(jobCounter);
        emit JobCreated(jobCounter, msg.sender, _title, _budget);
        jobCounter++;
    }

    function submitProposal(
        uint256 _jobId,
        uint256 _bid,
        string memory _description
    ) external {
        require(jobs[_jobId].isActive, "Job is not active");
        require(jobs[_jobId].status == JobStatus.Open, "Job is not open");
        require(_bid <= jobs[_jobId].budget, "Bid exceeds budget");

        Proposal memory proposal = Proposal({
            id: proposalCounter,
            jobId: _jobId,
            freelancer: msg.sender,
            bid: _bid,
            description: _description,
            accepted: false
        });

        jobProposals[_jobId].push(proposal);
        emit ProposalSubmitted(_jobId, proposalCounter, msg.sender);
        proposalCounter++;
    }

    function acceptProposal(uint256 _jobId, uint256 _proposalId) external {
        require(jobs[_jobId].client == msg.sender, "Not job owner");
        require(jobs[_jobId].status == JobStatus.Open, "Job is not open");

        Proposal[] storage proposals = jobProposals[_jobId];
        uint256 proposalIndex;
        bool found;

        for (uint256 i = 0; i < proposals.length; i++) {
            if (proposals[i].id == _proposalId) {
                proposalIndex = i;
                found = true;
                break;
            }
        }

        require(found, "Proposal not found");
        proposals[proposalIndex].accepted = true;
        jobs[_jobId].freelancer = proposals[proposalIndex].freelancer;
        jobs[_jobId].status = JobStatus.InProgress;

        emit ProposalAccepted(_jobId, _proposalId, proposals[proposalIndex].freelancer);
    }

    function completeJob(uint256 _jobId) external nonReentrant {
        Job storage job = jobs[_jobId];
        require(job.client == msg.sender, "Not job owner");
        require(job.status == JobStatus.InProgress, "Invalid job status");

        uint256 payment = job.budget;
        uint256 fee = (payment * platformFee) / 10000;
        
        job.status = JobStatus.Completed;
        
        require(paymentToken.transfer(job.freelancer, payment), "Payment transfer failed");
        require(paymentToken.transfer(owner(), fee), "Fee transfer failed");

        emit JobCompleted(_jobId, job.client, job.freelancer);
        emit PaymentReleased(_jobId, job.freelancer, payment);
    }

    // Profile management
    function createProfile(
        string memory _name,
        string memory _skills,
        UserType _userType
    ) external {
        userProfiles[msg.sender] = UserProfile({
            name: _name,
            skills: _skills,
            rating: 0,
            totalRatings: 0,
            isVerified: false,
            userType: _userType
        });
    }

    // Getters
    function getJob(uint256 _jobId) external view returns (Job memory) {
        return jobs[_jobId];
    }

    function getJobProposals(uint256 _jobId) external view returns (Proposal[] memory) {
        return jobProposals[_jobId];
    }

    function getUserProfile(address _user) external view returns (UserProfile memory) {
        return userProfiles[_user];
    }

    // Admin functions
    function updatePlatformFee(uint256 _newFee) external onlyOwner {
        require(_newFee <= 1000, "Fee too high"); // Max 10%
        platformFee = _newFee;
    }

    function verifyUser(address _user) external onlyOwner {
        userProfiles[_user].isVerified = true;
    }
}