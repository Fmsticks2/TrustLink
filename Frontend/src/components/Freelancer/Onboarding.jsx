import { useOnboarding } from '../../context/OnboardingContext';
import InitialSetup from './OnboardingSteps/InitialSetup';
import Welcome from './OnboardingSteps/Welcome';
import TitleStep from './OnboardingSteps/TitleStep';
import ExperienceStep from './OnboardingSteps/ExperienceStep';
import EducationStep from './OnboardingSteps/EducationStep';
import LanguageStep from './OnboardingSteps/LanguageStep';
import SkillsStep from './OnboardingSteps/SkillsStep';
import ProfileDescriptionStep from './OnboardingSteps/ProfileDescriptionStep';
import HourlyRateStep from './OnboardingSteps/HourlyRateStep';
import ContactInfoStep from './OnboardingSteps/ContactInfoStep';
import SummaryStep from './OnboardingSteps/SummaryStep';
import { CgChevronLeft } from 'react-icons/cg';
import { useState } from 'react';

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { formData } = useOnboarding();

  const steps = [
    InitialSetup, // 0
    Welcome, // 1
    TitleStep, // 2
    ExperienceStep, // 3
    EducationStep, // 4
    LanguageStep, // 5
    SkillsStep, // 6
    ProfileDescriptionStep, // 7
    HourlyRateStep, // 8
    ContactInfoStep, // 9
    SummaryStep // 10
  ];

  const CurrentStepComponent = steps[currentStep];

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const getProgressWidth = () => {
    return `${((currentStep) / (steps.length - 1)) * 100}%`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-8 mt-20">
      <div className="max-w-2xl bg-white rounded-lg shadow-lg py-16 sm:px-24 px-8 sm:w-[600px] w-full">
        {currentStep > 1 && currentStep <= steps.length && (
          <div className="mb-8 space-y-6">
            <div className='flex'>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-800 font-semibold rounded-full flex items-center justify-center text-white">
                  {formData.email?.[0]?.toUpperCase() || 'M'}
                </div>
              </div>
              <h1 className='capitalize font-semibold mx-auto text-lg'>{(currentStep) > 9 ? 'profile summary' : 'create profile'}</h1>
            </div>
            <div className="flex items-center justify-between mb-2 -mx-2">
              <button 
                onClick={prevStep}
                className="text-gray-600 hover:text-gray-800"
              >
                <CgChevronLeft className='text-3xl' />
              </button>
              <span className="text-sm text-black">{currentStep - 1}/9</span>
            </div>
            
            <div className="w-full bg-gray-100 rounded-full h-1">
              <div 
                className="bg-red-500 h-1 rounded-full transition-all duration-300"
                style={{ width: getProgressWidth() }}
              />
            </div>
          </div>
        )}

        <CurrentStepComponent 
          nextStep={nextStep} 
          prevStep={prevStep}
        />
      </div>
    </div>
  );
};

export default Onboarding;
