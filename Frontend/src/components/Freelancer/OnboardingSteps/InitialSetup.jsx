import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '../../../context/OnboardingContext';
import { Listbox } from '@headlessui/react';
import { FaCheck } from 'react-icons/fa';
import { CgSelect } from 'react-icons/cg';

const countries = [
  { name: 'Choose your country', value: '' },
  { name: 'United States', value: 'US' },
  { name: 'United Kingdom', value: 'UK' },
  { name: 'Canada', value: 'CA' },
];

const InitialSetup = ({ nextStep }) => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useOnboarding();
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = {};
    // if (formData.userType === 'freelancer' && !formData.userType) newErrors.userType = 'Please select user type';
    if (formData.userType === 'freelancer' && !formData.firstName) newErrors.firstName = 'First name is required';
    if (formData.userType === 'freelancer' && !formData.lastName) newErrors.lastName = 'Last name is required';
    if ((formData.userType === 'freelancer' && !formData.country) || formData.country === 'Choose your country') newErrors.country = 'Country is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (formData.userType === 'client') {
      navigate('/client/home');
    } else {
      nextStep();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDisabled(false)
    updateFormData({ [name]: value }); // updates the form data as the user types and saves it (firstName: formData.firstName(Williams))
    setErrors(prev => ({ ...prev, [name]: '' })); //changing the error message to an empty string once the user starts to type
  };

  return (
    <div className="space-y-6 flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-center">
        Complete your free account setup
      </h2>
      
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center text-white">
          {formData.email?.[0]|| 'M'}
        </div>
        <span className="text-gray-600">{formData.email || 'xyz123@gmail.com'}</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full p-2 border rounded-lg ${
                errors.firstName ? 'border-red-500' : 'border-gray-400'
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full p-2 border rounded-lg ${
                errors.lastName ? 'border-red-500' : 'border-gray-400'
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div>
          <Listbox value={formData.country} onChange={(value) => handleChange({ target: { name: 'country', value } })}>
            {({ open }) => (
              <>
                <Listbox.Label className="block text-sm font-medium text-gray-700">Country</Listbox.Label>
                <div className="relative mt-1">
                  <Listbox.Button className={`relative w-full p-2 border rounded-lg text-left ${errors.country ? 'border-red-500' : 'border-gray-400'}`}>
                    <span className="block truncate">{countries.find(country => country.value === formData.country)?.name || 'Choose your country'}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <CgSelect className="w-5 h-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </Listbox.Button>

                  <Listbox.Options className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 py-1 text-base overflow-auto focus:outline-none sm:text-sm">
                    {countries.map((country) => (
                      <Listbox.Option
                        key={country.value}
                        className={({ active }) =>
                          `cursor-pointer select-none relative py-2 pl-10 pr-4 ${active ? 'text-white bg-red-500' : 'text-gray-900'}`
                        }
                        value={country.value}
                      >
                        {({ selected, active }) => (
                          <>
                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                              {country.name}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-red-500'}`}
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
              </>
            )}
          </Listbox>
          {errors.country && (
            <p className="text-red-500 text-xs mt-1">{errors.country}</p>
          )}
        </div>

        <div className="space-y-2 flex flex-col items-center">
          <p className="font-bold">I am a :</p>
          <div className="flex border rounded-lg overflow-hidden">
            <label className={`flex items-center space-x-2 py-1.5 pr-10 pl-5 cursor-pointer ${formData.userType == 'freelancer' ?'bg-red-100 font-semibold' : ''}`}>
              <input
                type="radio"
                name="userType"
                value="freelancer"
                checked={formData.userType === 'freelancer'}
                onChange={handleChange}
                className="form-radio text-red-500 accent-red-500 cursor-pointer"
              />
              <span className=''>Freelancer</span>
            </label>
            <span className='h-10 w-[0.5px] bg-gray-200' />
            <label className={`flex items-center space-x-2 py-1.5 pr-10 pl-5 cursor-pointer ${formData.userType == 'client' ?'bg-red-100 font-semibold' : ''}`}>
              <input
                type="radio"
                name="userType"
                value="client"
                checked={formData.userType === 'client'}
                onChange={handleChange}
                className="form-radio text-red-500 accent-red-500 cursor-pointer"
              />
              <span className=''>Client</span>
            </label>
          </div>
          {errors.userType && (
            <p className="text-red-500 text-sm">{errors.userType}</p>
          )}
        </div>

        <div className='flex flex-col gap-5'>
          <label className='space-x-3 flex items-start'>
            <input
              type="checkbox"
              name="userType"
              value="client"
              className="mt-1  text-red-500 accent-red-500"
            />
            <span className='text-xs text-gray-500'>Yes! Send me genuinely useful emails every now and then to help me get the most out of Upwork.</span>
          </label>
          <label className='space-x-3 flex items-start'>
            <input
              type="checkbox"
              name="userType"
              value="client"
              required
              className="mt-1  text-red-500 accent-red-500"
            />
            <span className='text-xs text-gray-500'>Yes, I understand and agree to the <span className='text-red-500 cursor-pointer hover:underline'>UPTECHUNT Terms of Service</span>, including the <span className='text-red-500 cursor-pointer hover:underline'>User Agreement and Privacy Policy</span>.</span>
          </label>
        </div>
        
       
        <button
          type="submit"
          className={`w-full bg-red-500 text-white py-2 rounded-full transition-colors ${disabled ? 'cursor-not-allowed hover:bg-red-400' : 'cursor-pointer hover:bg-red-600'}`}
          disabled={disabled}
        >
          Create My Account
        </button>          

      </form>
    </div>
  );
};

export default InitialSetup;