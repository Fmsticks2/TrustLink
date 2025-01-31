import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className="fixed top-0 w-full z-50 shadow-sm container mx-auto flex justify-between items-center px-32 pt-8 pb-5">
      <Link to={'/'} className="logo text-2xl text-[#FF4C4A]">
        <span className='font-[900]	'>Trust</span>Link
      </Link>
    </div>
  );
}

export default Navbar;
