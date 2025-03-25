import { useState, useEffect } from "react";
import { useOnboarding } from "../../../context/OnboardingContext";

const EditProfileModal = ({ isOpen, onClose }) => {
  const { formData, updateFormData } = useOnboarding();

  const [profile, setProfile] = useState({
    firstName: formData.firstName || "",
    lastName: formData.lastName || "",
    title: formData.title || "",
    hourlyRate: formData.hourlyRate || "",
    profileDescription: formData.profileDescription || "",
  });

  useEffect(() => { // this useEffect will run when the modal is opened and will prevent scrolling of the body
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateFormData(profile);
    onClose();
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 modal-overlay" onClick={handleOutsideClick}>
      <div className="bg-white rounded-lg p-6 max-md:max-w-lg w-[1000px] shadow-lg relative" onClick={(e) => e.stopPropagation()}>
        {/* <h2 className="text-2xl font-bold mb-2">Edit Profile</h2>
        <p className="text-gray-500 mb-4">Update your profile information.</p> */}
        <div className="space-y-4">
          <div className="flex gap-4"> 
            <input type="text" name="firstName" value={profile.firstName} onChange={handleChange} placeholder="First Name" className="mt-1 px-5 py-3 font-bold tracking-wide block w-full rounded-md border border-[#00000033] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg text-sm capitalize" />

            <input type="text" name="lastName" value={profile.lastName} onChange={handleChange} placeholder="Last Name" className="mt-1 px-5 py-3 font-bold tracking-wide block w-full rounded-md  border border-[#00000033] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg text-sm capitalize" />
          </div>
          <div>
            <input type="text" name="title" value={profile.title} onChange={handleChange} placeholder="Job Title" className="mt-1 px-5 py-3 tracking-wide block w-full rounded-md border border-[#00000033] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-xs capitalize" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Hourly Rate ($/hr)</label>
            <input type="number" name="hourlyRate" value={profile.hourlyRate} onChange={handleChange} placeholder="Hourly Rate ($/hr)" className="mt-1 px-5 py-3 tracking-wide block w-full rounded-md border border-[#00000033] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-xs" />
          </div>
          <div>
            <textarea name="profileDescription" value={profile.profileDescription} onChange={handleChange} placeholder="Profile Description" className="mt-1 px-5 py-3 tracking-wide block w-full rounded-md border border-[#00000033] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-xs min-h-[100px]"></textarea>
          </div>
        </div>
        <div className="flex justify-end gap-4 mt-6">
          <button onClick={onClose} className="px-4 py-2 border border-gray-300 bg-white rounded-md text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Cancel</button>
          <button onClick={handleSave} className="px-4 py-2 bg-red-500 text-white rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;