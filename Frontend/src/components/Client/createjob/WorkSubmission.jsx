import BgImg from '../../../../public/bgImage.png';
import { Link } from 'react-router-dom';
import  { useState, useEffect } from "react";


const WorkSubmission = () => {

  const [milestoneDetails, setMilestoneDetails] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Change the content after a delay of 5 seconds
    const timer = setTimeout(() => {
      setMilestoneDetails(1);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  const handleAccept = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleReject = () => {
    alert("Milestone rejected!");
  };


return (
    <div className="bg-gray-100 min-h-screen  text-white">
    {/* Background */}
    <div className="relative">
      <div className="bg-[#2942A5] h-[400px]" />
      <img
        src={BgImg}
        alt="Background"
        className="absolute top-0 right-0 w-auto"
      />
    </div>

    {/* Main Content */}
    <div className="max-w-6xl mx-auto -mt-[90%]  p-4 lg:-mt-[25%]  relative">
      {/* Back Button */}
      <div className="mb-6">
        <button className="text-white text-lg"> <Link to={'/client/hire'}>&#8249; Back</Link></button>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My contracts</h1>
        <span>Total earnings: <strong>$10.00 USD</strong></span>
      </div>


{/* Tabs */}
<div className="relative mb-6">
  <div className="flex items-center lg:ml-[44px] border-b border-gray-100 border-opacity-30 gap-6 text-gray-300 text-sm font-semibold">
    <span className=" px-4 text-center py-2  border-b-4 hover:border-[#FF4C4A] text-white cursor-pointer">
      Active contracts (02)
    </span>
    <span className=" text-center border-b-4 py-4 px-4 lg:py-2 border-transparent cursor-pointer hover:text-white hover:border-[#FF4C4A]">
      Completed contracts (07)
    </span>
    <span className=" text-center border-b-4 py-4 px-4 lg:py-2 border-transparent cursor-pointer hover:text-white hover:border-[#FF4C4A]">
      Proposals (09)
    </span>
  </div>
</div>




      {/* Contract Card */}
      <div className="bg-white rounded-lg px-6 py-10 shadow-md ">
        {/* Filter and Buttons */}
        <div className="flex flex-col gap-[2.5em] justify-between items-center mb-4 lg:flex-row">
          <div className="flex items-center gap-2">
            <label className="text-gray-600 text-sm font-semibold">
              Select contract:
            </label>
            <select className="p-2 rounded bg-gray-100 h-[3em] w-[18em] text-black border border-gray-300">
              <option value="all">All</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handleReject} className="text-red-500 border w-[160px] h-[39px] border-red-500 px-4 py-2 rounded-full hover:bg-red-100  lg:w-[190px] lg:h-[39px]">
              End contract
            </button>
            <button className="text-white bg-red-500 px-4 py-2 w-[160px] h-[39px] rounded-full hover:bg-red-600 lg:w-[190px] lg:h-[39px] ">
              Message
            </button>
          </div>
        </div>

        {/* Contract Details */}
        <div className="space-y-4">
        <hr className=" opacity-60 w-full border-t-2 border-gray-300" />
          <h2 className="text-lg font-bold text-gray-800">
            Russia - Research Support (Targeted Calling){" "}
            <span className="text-red-500 font-semibold text-sm ml-2">
              Fixed rate
            </span>
          </h2>
          <p className="text-gray-600">
            <strong>Client name:</strong> Anikur Rahman
          </p>
          <p className="text-gray-600">
            <strong>Budget:</strong> $400 | 2 milestones
          </p>
          <hr className=" opacity-60 w-full border-t-2 border-gray-300" />
        </div>

        {/* Tabs for Milestones */}
        <div className="mt-6">
          <div className="flex border-b text-gray-500 text-sm font-semibold">
            <div className="flex-1 text-center py-2 border-b-2 border-red-500">
              Active milestones (02)
            </div>
            <div className="flex-1 text-center py-2 hover:text-black cursor-pointer">
              Awaiting milestones (0)
            </div>
            <div className="flex-1 text-center py-2 hover:text-black cursor-pointer">
              Payments request (0)
            </div>
          </div>
        </div>

        <div className="mt-6 text-gray-600">
      {milestoneDetails === 0 ? (
        // Initial Milestone Details
        <>
          <p>
            <strong>Last milestone paid:</strong> $200
          </p>
          <p>
            <strong>Next milestone to be paid:</strong> $200
          </p>
          <p className="text-gray-500">Waiting for submission</p>
          <p className="text-gray-500">Due date: 23 Feb 2022</p>
        </>
      ) : (
        // Updated Milestone Details
        <>
          <p>
            <strong>Last milestone paid:</strong> $200
          </p>
          <p>
            <strong>Next milestone to be paid:</strong> $200
          </p>
          <p className="text-gray-500">Submission received. Please review:</p>
          <p className="text-gray-500">Due date: 23 Feb 2022</p>
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleAccept}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Accept
            </button>
            <button
              
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Request changes
            </button>
          </div>


          {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-center text-lg font-semibold">Are you sure?</h2>
            <p className="text-center text-gray-600 mt-2">
              If you choose yes, then the amount of $200 for the first milestone
              will be sent to the freelancer's account.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => {
                  alert("Milestone approved!");
                  handleClosePopup();
                }}
                className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600"
              >
                Yes, I am sure
              </button>
              <button
                onClick={handleClosePopup}
                className="border border-red-500 text-red-500 px-6 py-2 rounded-full hover:bg-red-100"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

       




        </>
      )}
    </div>

      </div>
    </div>
  </div>
)
}

export default WorkSubmission
