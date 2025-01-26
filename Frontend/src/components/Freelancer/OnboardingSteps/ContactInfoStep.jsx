import React, { useState } from 'react';
import { useOnboarding } from '../../../context/OnboardingContext';
import { FaCheck } from 'react-icons/fa';
import { CgSelect } from 'react-icons/cg';
import { Listbox } from '@headlessui/react';

const ContactInfoStep = ({ nextStep }) => {
  const { formData, updateFormData } = useOnboarding();
  const [contactInfo, setContactInfo] = useState(formData.contactInfo || {
    address: '',
    city: '',
    country: '',
    zipCode: '',
    phoneNumber: '',
    phoneCode: '',
  });
  const [profileImage, setProfileImage] = useState(formData.profileImage || null);
  const [imagePreview, setImagePreview] = useState(formData.profileImage ? URL.createObjectURL(formData.profileImage) : null);

  const countryCodes = [
    { code: '+1', country: 'USA' },
    { code: '+44', country: 'UK' },
    { code: '+61', country: 'Australia' },
    { code: '+91', country: 'India' },
    { code: '+234', country: 'Nigeria' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactInfo(prev => ({
      ...prev,
      [name]: value
    }));
    updateFormData({
      contactInfo: {
        ...contactInfo,
        [name]: value
      }
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      setImagePreview(URL.createObjectURL(file));
      updateFormData({ profileImage: file });
    }
  };

  const isFormValid = () => {
    return (
      contactInfo.address &&
      contactInfo.city &&
      contactInfo.country &&
      contactInfo.zipCode &&
      contactInfo.phoneNumber &&
      contactInfo.phoneCode 
    );
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Add contact information.</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.
        </p>

        <div className="flex justify-center mb-6">
          <div className="relative flex flex-col items-center gap-5">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">No Image</span>
              </div>
            )}
            <label className="text-red-500 rounded-full w-full p-2 cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <span className='border py-3 px-8 rounded-full font-semibold text-sm'>+ Upload photo</span>
            </label>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 grid-cols-1">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            readOnly
            disabled
            className="p-3 rounded-lg bg-gray-50"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            readOnly
            disabled
            className="p-3 rounded-lg bg-gray-50"
          />
        </div>

        <input
          type="text"
          name="address"
          value={contactInfo.address}
          onChange={handleInputChange}
          placeholder="Address"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />

        <div className="grid sm:grid-cols-2 gap-4 grid-cols-1">
          <input
            type="text"
            name="city"
            value={contactInfo.city}
            onChange={handleInputChange}
            placeholder="City Name"
            className="p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            name="country"
            value={contactInfo.country}
            onChange={handleInputChange}
            placeholder="Country"
            className="p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4 grid-cols-1">
          <input
            type="text"
            name="zipCode"
            value={contactInfo.zipCode}
            onChange={handleInputChange}
            placeholder="Zip code/Pincode"
            className="p-3 border border-gray-300 rounded-lg"
          />
          <div className="flex">
            <Listbox value={contactInfo.phoneCode} onChange={(value) => handleInputChange({ target: { name: 'phoneCode', value } })}>
              {({ open }) => (
                <div className="relative w-fit">
                  <Listbox.Button className="relative w-fit p-3 border border-gray-300 rounded-l-lg text-left">
                    <span className="block truncate">{contactInfo.phoneCode || '+'}</span>
                  </Listbox.Button>
                  <Listbox.Options className="absolute z-10 w-fit mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 py-1 text-base overflow-auto focus:outline-none sm:text-sm">
                    {countryCodes.map(({ code, country }) => (
                      <Listbox.Option
                        key={code}
                        className={({ active }) =>
                          `cursor-pointer select-none relative py-2 pl-10 pr-4 ${active ? 'text-white bg-red-600' : 'text-gray-900'}`
                        }
                        value={code}
                      >
                        {({ selected, active }) => (
                          <>
                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                              {code}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-red-600'}`}
                              >
                                <FaCheck aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              )}
            </Listbox>
            <input
              type="text"
              name="phoneNumber"
              value={contactInfo.phoneNumber}
              onChange={handleInputChange}
              placeholder="Phone number"
              className="flex-1 p-3 border border-gray-300 rounded-r-lg w-full"
            />
          </div>
        </div>
      </div>

      <button
        onClick={nextStep}
        disabled={!isFormValid()}
        className={`w-full py-3 rounded-full transition-colors ${
          isFormValid()
            ? 'bg-red-500 hover:bg-red-600 text-white'
            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default ContactInfoStep; 