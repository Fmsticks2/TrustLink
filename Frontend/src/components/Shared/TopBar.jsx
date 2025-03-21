import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className="fixed top-0 w-full z-50 shadow-sm mx-auto flex justify-between items-center md:px-32 px-10 pt-8 pb-5 bg-gray-100">
      <Link to={'/'} className="logo text-2xl text-[#FF4C4A] uppercase">
        <span className='font-[900]'>Trust</span>Link
      </Link>
    </div>
  );
}

export default Navbar;
                               