import { createContext, useContext, useState } from 'react';

const OnboardingContext = createContext(); // creating a context 

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
    profileImage: '',
    hasNoExperience: false,
    hasNoEducation: false,
  });

  const updateFormData = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  return (
    <OnboardingContext.Provider value={{ formData, updateFormData }}> 
    {/* // wrapping the children(tree os components that needs the state context) with the context provider */}
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => useContext(OnboardingContext); // accessing the formdata context in all components