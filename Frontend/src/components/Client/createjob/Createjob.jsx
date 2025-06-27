import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createJob } from "../../../services/api";
import { toast } from "react-hot-toast";

function CreateJob() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    requiredSkills: [],
    budget: {
      amount: "",
      isFixed: true
    },
    timeline: {
      deadline: ""
    },
    requirements: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.title.trim()) {
      toast.error("Please enter a job title");
      return;
    }
    if (!formData.description.trim()) {
      toast.error("Please provide a job description");
      return;
    }
    if (!formData.category) {
      toast.error("Please select a category");
      return;
    }
    if (formData.requiredSkills.length === 0) {
      toast.error("Please add at least one required skill");
      return;
    }
    if (!formData.budget.amount || formData.budget.amount <= 0) {
      toast.error("Please enter a valid budget amount");
      return;
    }
    if (!formData.timeline.deadline) {
      toast.error("Please set a project deadline");
      return;
    }

    try {
      await createJob(formData);
      toast.success("Job posted successfully!");
      navigate("/client/postedjob");
    } catch (error) {
      console.error("Error creating job:", error);
      toast.error(error.message || "Failed to create job");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSkillAdd = (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      e.preventDefault();

      const newSkill = e.target.value.trim();

      if (formData.requiredSkills.length >= 15) {
        toast.error("Maximum 15 skills allowed");
        return;
      }

      if (newSkill.length < 2) {
        toast.error("Skill must be at least 2 characters long");
        return;
      }

      if (formData.requiredSkills.includes(newSkill)) {
        toast.error("This skill has already been added");
        return;
      }

      setFormData(prev => ({
        ...prev,
        requiredSkills: [...prev.requiredSkills, newSkill]
      }));
      e.target.value = "";
    }
  };

  const handleSkillRemove = (skillToRemove) => {
    setFormData(prev => ({
      ...prev,
      requiredSkills: prev.requiredSkills.filter(skill => skill !== skillToRemove)
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex items-center mb-6">
              <Link
                to="/client/home"
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back
              </Link>
            </div>

            <h1 className="text-2xl font-bold mb-8">Create a New Job</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g., Senior React Developer Needed"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  maxLength={100}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Describe the job requirements, responsibilities, and qualifications..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">Select a category</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile Development</option>
                  <option value="design">Design</option>
                  <option value="writing">Content Writing</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Required Skills
                </label>
                <input
                  type="text"
                  placeholder="Type a skill and press Enter"
                  onKeyDown={handleSkillAdd}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <div className="mt-2 flex flex-wrap gap-2">
                  {formData.requiredSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => handleSkillRemove(skill)}
                        className="ml-2 inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-blue-200"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                {formData.requiredSkills.length >= 15 && (
                  <p className="mt-1 text-sm text-red-600">
                    Maximum number of skills reached
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget
                </label>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <input
                      type="number"
                      name="budget.amount"
                      value={formData.budget.amount}
                      onChange={handleChange}
                      placeholder="Enter amount"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      min="1"
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="budget.isFixed"
                      checked={formData.budget.isFixed}
                      onChange={(e) => {
                        setFormData(prev => ({
                          ...prev,
                          budget: {
                            ...prev.budget,
                            isFixed: e.target.checked
                          }
                        }));
                      }}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 text-sm text-gray-700">
                      Fixed Price
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Deadline
                </label>
                <input
                  type="date"
                  name="timeline.deadline"
                  value={formData.timeline.deadline}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Requirements
                </label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Any additional requirements or preferences..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Post Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateJob;
