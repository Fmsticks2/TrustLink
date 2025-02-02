import { CurrencyDollarIcon, EnvelopeIcon, PhoneIcon, UsersIcon } from '@heroicons/react/20/solid';
import { FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Verification = ({}) => {

  const verificationItems = [
    {
      icon: <UsersIcon className="text-slate-500 h-5" />,
      label: 'Identity',
      status: 'Verified' 
    },
    {
      icon: <CurrencyDollarIcon className="text-slate-500 h-5" />,
      label: 'Payment',
      status: 'Verified'
    },
    {
      icon: <PhoneIcon className="text-slate-500 h-5" />,
      label: 'Phone',
      status: 'Verified'
    },
    {
      icon: <EnvelopeIcon className="text-slate-500 h-5" />,
      label: 'Email',
      status: 'Verified'
    },
    {
      icon: <FaFacebookF className="text-slate-500 h-5" />,
      label: 'Facebook',
      status: 'Verified'
    }
  ];

  return (
    <div className={`bg-white rounded-lg shadow-md pb-2 w-full`}>
      <h2 className="text-2xl font-semibold mb-4 p-6 pb-0">Verification</h2>
      <div className='w-full bg-gray-300 h-[1px]' />
        <div className="space-y-7 p-6">
        {verificationItems.map((item) => (
          <div key={item.label} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                {item.icon} 
              <span className='text-lg'>{item.label} {item.status}</span>
            </div>
            <Link className="text-blue-500">Verify</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Verification;