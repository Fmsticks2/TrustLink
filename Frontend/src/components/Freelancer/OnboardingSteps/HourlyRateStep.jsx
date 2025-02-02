import { useState } from 'react';
import { useOnboarding } from '../../../context/OnboardingContext';

const HourlyRateStep = ({ nextStep }) => {
  const { formData, updateFormData } = useOnboarding();
  const [rate, setRate] = useState(formData.hourlyRate || '');

  const handleChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    if (value === '' || (/^\d*\.?\d*$/.test(value) && !isNaN(parseFloat(value)))) {
      setRate(value);
      updateFormData({ hourlyRate: value });
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Add Hourly Rate</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.
        </p>

        <div className="relative">
          <div className="flex items-center">
            <span className="absolute left-3 text-gray-500">$</span>
            <input
              type="text"
              value={rate}
              onChange={handleChange}
              placeholder="50.00"
              className="w-full pl-8 pr-16 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <span className="absolute right-3 text-gray-500">/hr</span>
          </div>
        </div>
      </div>

      <button
        onClick={nextStep}
        disabled={!rate || parseFloat(rate) <= 0}
        className={`w-full py-3 rounded-full transition-colors ${
          rate && parseFloat(rate) > 0
            ? 'bg-red-500 hover:bg-red-600 text-white'
            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default HourlyRateStep; 