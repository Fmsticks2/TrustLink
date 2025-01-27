// src/components/Freelancer/OnboardingSteps.jsx
import React, { useState } from 'react';
import TitleStep from './TitleStep';
import EducationPage from './EducationPage';
import LanguagesPage from './LanguagesPage';
import SkillsPage from './SkillsPage';
import ProfileDescriptionPage from './ProfileDescriptionPage';
import HourlyRatePage from './HourlyRatePage';
import ContactInformationPage from './ContactInformationPage';
import SummaryPage from './SummaryPage';
import ExperienceStep from './ExperienceStep';

const OnboardingSteps = () => {
  const steps = [
    { id: 'title', component: TitleStep },
    { id: 'education', component: EducationPage },
    { id: 'languages', component: LanguagesPage },
    { id: 'skills', component: SkillsPage },
    { id: 'profile-description', component: ProfileDescriptionPage },
    { id: 'experience', component: ExperienceStep },
    { id: 'hourly-rate', component: HourlyRatePage },
    { id: 'contact', component: ContactInformationPage },
    { id: 'summary', component: SummaryPage },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const saveData = (data) => {
    setFormData({ ...formData, ...data });
  };

  const CurrentComponent = steps[currentStep].component;

  return (
    <div>
      <CurrentComponent
        onNext={handleNext}
        onPrevious={handlePrevious}
        saveData={saveData}
        data={formData}
      />
    </div>
  );
};

export default OnboardingSteps;
