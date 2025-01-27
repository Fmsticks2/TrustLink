import React, { createContext, useContext, useState } from 'react';

const OnboardingContext = createContext();

export const OnboardingProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    userType: '',
    title: '',
    experiences: [],
    education: [],
    languages: [],
    skills: [],
    profileDescription: '',
    hourlyRate: '',
    contactInfo: {
      address: '',
      city: '',
      country: '',
      zipCode: '',
      phoneNumber: '',
      phoneCode: '',
    },
    profileImage: null,
    hasNoExperience: false,
    hasNoEducation: false,
  });

  const updateFormData = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  return (
    <OnboardingContext.Provider value={{ formData, updateFormData }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => useContext(OnboardingContext); 