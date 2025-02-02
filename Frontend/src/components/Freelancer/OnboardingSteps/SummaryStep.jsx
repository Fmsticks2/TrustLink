import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '../../../context/OnboardingContext';

const SummaryStep = () => {
  const navigate = useNavigate();
  const { formData } = useOnboarding();

  const handleComplete = () => {
    // Here you would typically send the data to your backend
    navigate('/freelancer/home', { state: { successMessage: 'Congratulations, you have successfully created your account' } });
  };


  const sections = [
    {
      title: 'Basic Information',
      data: [
        { label: 'Name', value: `${formData.firstName} ${formData.lastName}` },
        { label: 'Title', value: formData.title },
        { label: 'Hourly Rate', value: `$${formData.hourlyRate}/hr` },
      ]
    },
    {
      title: 'Contact Information',
      data: [
        { label: 'Address', value: formData.contactInfo.address },
        { label: 'City', value: formData.contactInfo.city },
        { label: 'Country', value: formData.contactInfo.country },
        { label: 'Phone', value: `${formData.contactInfo.phoneCode} ${formData.contactInfo.phoneNumber}` },
      ]
    },
    {
      title: 'Professional Information',
      data: [
        { label: 'Skills', value: formData.skills.join(', ') },
        { label: 'Languages', value: formData.languages.map(l => `${l.language} (${l.proficiency})`).join(', ') },
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          {formData.profileImage && (
            <img
              src={URL.createObjectURL(formData.profileImage)}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
          )}
          <div>
            <h3 className="text-xl font-semibold">{`${formData.firstName} ${formData.lastName}`}</h3>
            <p className="text-gray-600">{formData.title}</p>
          </div>
        </div>

        {sections.map((section, index) => (
          <div key={index} className="space-y-3">
            <h3 className="font-semibold text-lg border-b pb-2">{section.title}</h3>
            <div className="grid grid-cols-2 gap-4">
              {section.data.map((item, i) => (
                <div key={i}>
                  <p className="text-sm text-gray-600">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="space-y-3">
          <h3 className="font-semibold text-lg border-b pb-2">Profile Description</h3>
          <p className="text-gray-700">{formData.profileDescription}</p>
        </div>

        {formData.experiences.length > 0 && (
          <div className="space-y-3">
            <h3 className="font-semibold text-lg border-b pb-2">Experience</h3>
            <ul className="list-disc list-inside space-y-2">
              {formData.experiences.map((exp, index) => (
                <li key={index} className="text-gray-700">{exp}</li>
              ))}
            </ul>
          </div>
        )}

        {formData.education.length > 0 && (
          <div className="space-y-3">
            <h3 className="font-semibold text-lg border-b pb-2">Education</h3>
            <ul className="list-disc list-inside space-y-2">
              {formData.education.map((edu, index) => (
                <li key={index} className="text-gray-700">{edu}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <button
        onClick={handleComplete}
        className="w-full py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
      >
        Complete Profile Setup
      </button>
    </div>
  );
};

export default SummaryStep; 