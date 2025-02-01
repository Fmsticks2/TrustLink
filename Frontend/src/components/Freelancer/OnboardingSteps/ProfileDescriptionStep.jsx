import { useOnboarding } from '../../../context/OnboardingContext';

const ProfileDescriptionStep = ({ nextStep }) => {
  const { formData, updateFormData } = useOnboarding();
  const [description, setDescription] = useState(formData.profileDescription || '');
  const maxChars = 500;

  const handleChange = (e) => {
    const text = e.target.value;
    if (text.length <= maxChars) {
      setDescription(text);
      updateFormData({ profileDescription: text });
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Add Profile Description.</h2>

        <div className="space-y-2">
          <p className="text-sm text-gray-600">Example:</p>
          <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
            I am a skilled web developer with 5 years of experience in building responsive and user-friendly websites. 
            I specialize in React.js and Node.js, and I have a strong understanding of modern web development practices.
          </p>
        </div>

        <div className="relative">
          <textarea
            value={description}
            onChange={handleChange}
            rows={6}
            placeholder="Write your profile description..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
          />
          <div className="absolute bottom-3 right-3 text-sm text-gray-500">
            {description.length}/{maxChars} characters
          </div>
        </div>
      </div>

      <button
        onClick={nextStep}
        disabled={!description.trim()}
        className={`w-full py-3 rounded-full transition-colors ${
          description.trim()
            ? 'bg-red-500 hover:bg-red-600 text-white'
            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default ProfileDescriptionStep; 