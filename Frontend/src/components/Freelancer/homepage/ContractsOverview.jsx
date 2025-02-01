import { FaCloudDownloadAlt, FaRegFileAlt, FaXingSquare } from 'react-icons/fa';

const ContractsOverview = () => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className='flex justify-between items-center p-4'>
        <h3 className="text-lg font-semibold">My contracts</h3>
        <p>Total: <span className='font-bold'>10</span></p>
      </div>
      <div className='w-full bg-gray-300 h-[1px]' />
      <div className='p-6 flex flex-col gap-5'>
        <p className='flex gap-2 items-center'>
          <FaRegFileAlt className='text-green-500' /> 
          <span className='font-bold'>Active projects: </span> 
          02
        </p>
        <p className='flex gap-2 items-center'>
          <FaCloudDownloadAlt className='text-blue-500' /> 
          <span className='font-bold'>Completed projects: </span> 
          07
        </p>
        <p className='flex gap-2 items-center'>
          <FaXingSquare className='text-red-500' /> 
          <span className='font-bold'>Cancelled projects: </span> 
          01
        </p>
        <div className='self-center'>
          <button className="mt-2 font-semibold px-8 py-2 border border-[#FF4C4A] text-[#FF4C4A] rounded-full">View All</button>        
        </div>
      </div>

    </div>
  );
};

export default ContractsOverview;
