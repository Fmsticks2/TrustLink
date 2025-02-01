import backgroundImage from '../../../assets/gridImg.png';

const MembershipCard = () => {
  return (
    <div
      className="bg-gradient-to-r from-[#031661] to-[#FF4C4A] px-5 py-3 rounded-2xl shadow-md text-white flex items-center gap-3 justify-center"
      style={{
        backgroundImage: `url(${backgroundImage}), linear-gradient(to right, #011359, #FF4C4A)`,
        backgroundBlendMode: 'overlay',
        backgroundSize: '100%', // Increase the size of the background image
        backgroundPosition: 'center'
      }}
    >
      <h3 className="text-md  text-gray-200 p-0"><span className='font-bold text-white'>Get membership</span> for getting more bids in a month </h3>
      <button className="mt-4 px-4 py-2 bg-white rounded-full text-purple-800 grid text-xs">
        <span className='font-bold'>UP</span>
        <span>TECH</span>
        <span>HUNT</span>
      </button>
    </div>
  );
};

export default MembershipCard;
