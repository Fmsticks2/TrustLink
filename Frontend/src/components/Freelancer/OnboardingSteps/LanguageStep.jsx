import React, { useEffect, useRef, useState } from 'react';
import { useOnboarding } from '../../../context/OnboardingContext';
import { Listbox } from '@headlessui/react';
import { FaCheck } from 'react-icons/fa';
import { CgSelect } from 'react-icons/cg';
import { CgTrash } from 'react-icons/cg';

const LanguageStep = ({ nextStep }) => {
  const { formData, updateFormData } = useOnboarding();
  const [languages, setLanguages] = useState(formData.languages || []);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [customLanguage, setCustomLanguage] = useState('');
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  const languageOptions = [
    'English',
    'Spanish',
    'French',
    'German',
    'Chinese',
    'Japanese',
    'Arabic',
  ];

  const proficiencyLevels = [
    'Elementary',
    'Intermediate',
    'Professional',
    'Native/Bilingual',
  ];

  const handleCustomLanguageChange = (e) => {
    setCustomLanguage(e.target.value);
    setShowDropdown(false); // Hide dropdown when typing
  };

  const handleAddLanguage = () => {
    const newLanguage = {
      language: customLanguage || selectedLanguage,
      proficiency: ''
    };
    const newLanguages = [...languages, newLanguage];
    setLanguages(newLanguages);
    updateFormData({ languages: newLanguages });
    setCustomLanguage('');
    setSelectedLanguage('');
    setShowDropdown(false);
  };

  const handleProficiencyChange = (index, level) => {
    const newLanguages = languages.map((lang, i) => 
      i === index ? { ...lang, proficiency: level } : lang
    );
    setLanguages(newLanguages);
    updateFormData({ languages: newLanguages });
  };

  const handleRemoveLanguage = (index) => {
    const newLanguages = languages.filter((_, i) => i !== index);
    setLanguages(newLanguages);
    updateFormData({ languages: newLanguages });
  };

  const canProceed = languages.length > 0;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (dropdownRef.current && !dropdownRef.current.contains(event.target)) &&
        (inputRef.current && !inputRef.current.contains(event.target))
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Add your languages.</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        </p>

        <div className="relative" ref={dropdownRef}>
          <input
            type="text"
            value={customLanguage || selectedLanguage}
            onChange={handleCustomLanguageChange}
            onFocus={() => setShowDropdown(true)}
            placeholder="Add a language"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            ref={inputRef}
          />
          {showDropdown && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto scrollbar-custom">
              {languageOptions.map((lang) => (
                <div
                  key={lang}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedLanguage(lang);
                    setCustomLanguage('');
                    setShowDropdown(false);
                  }}
                >
                  {lang}
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={handleAddLanguage}
          disabled={!customLanguage && !selectedLanguage}
          className="w-full p-2 text-red-500 border border-red-500 rounded-lg hover:bg-red-50"
        >
          + Add language
        </button>
      </div>

      <div className="space-y-2">
        {languages.map((lang, index) => (
          <div key={index} className="flex justify-between xs:items-center items-start gap-3 py-3 rounded-lg">
            <div className='flex max-xs:flex-col items-center gap-5'>
              <div>
                <span className="font-semibold">{lang.language}</span>
                {lang.proficiency &&( 
                  <span className="ml-2 text-gray-600">
                    <span className="hidden xs:inline">
                      ({lang.proficiency.slice(0, 6)})
                    </span>
                    <span className="xs:hidden inline">
                      ({lang.proficiency})
                    </span>
                  </span>
                )}
              </div>
              <Listbox value={lang.proficiency} onChange={(value) => handleProficiencyChange(index, value)}>
                {({ open }) => (
                  <>
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-48 p-2 border border-gray-300 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-red-500">
                        <span className={`block truncate ${!lang.proficiency ? 'text-gray-400' : 'text-black'}`}>{lang.proficiency || 'My level is'}</span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <CgSelect className="w-5 h-5 text-gray-400" aria-hidden="true" />
                        </span>
                      </Listbox.Button>
                      <Listbox.Options className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 py-1 text-base overflow-auto focus:outline-none sm:text-sm">
                        {proficiencyLevels.map((level) => (
                          <Listbox.Option
                            key={level}
                            className={({ active }) =>
                              `cursor-pointer select-none relative py-2 pl-10 pr-4 ${active ? 'text-white bg-red-600' : 'text-gray-900'}`
                            }
                            value={level}
                          >
                            {({ selected, active }) => (
                              <>
                                <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                  {level}
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
                  </>
                )}
              </Listbox>
            </div>

            <button
              onClick={() => handleRemoveLanguage(index)}
              className="text-red-500 hover:text-red-600 mt-1"
            >
              <CgTrash />
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={nextStep}
        disabled={!canProceed}
        className={`w-72 flex justify-center justify-self-center py-3 rounded-full transition-colors ${
          canProceed 
            ? 'bg-red-500 hover:bg-red-600 text-white' 
            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default LanguageStep;