import React from 'react';
import { Link } from 'react-router-dom';

const FreelancerHome = () => {
  return (
    <div className="p-8 m-52">
      <h1 className="text-3xl font-bold">Welcome to Freelancer Dashboard</h1>
      <p className="mt-4">This is your main workspace.</p>
      <Link to={'/'}>
        back
      </Link>
    </div>
  );
};

export default FreelancerHome;
