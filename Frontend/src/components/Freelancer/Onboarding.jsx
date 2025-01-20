import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Onboarding = () => {
  const [formData, setFormData] = useState({ bio: '', skills: '', experience: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Onboarding Data:', formData); // Replace with actual form handling
  };

  return (
    <div className="p-8 max-w-2xl mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Freelancer Onboarding</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Bio</label>
        <textarea
          name="bio"
          className="w-full p-2 mb-4 border rounded"
          onChange={handleChange}
        />

        <label className="block mb-2">Skills</label>
        <input
          name="skills"
          type="text"
          className="w-full p-2 mb-4 border rounded"
          onChange={handleChange}
        />

        <label className="block mb-2">Experience</label>
        <input
          name="experience"
          type="text"
          className="w-full p-2 mb-4 border rounded"
          onChange={handleChange}
        />

        <Link to={'/freelancer/home'}>
          <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Complete Onboarding
          </button>        
        </Link>

      </form>
    </div>
  );
};

export default Onboarding;
