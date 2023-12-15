import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa6';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className='bg-gray-100 w-full border-2 fixed top-0 px-4 py-4 '>
         <div className="flex justify-between items-center w-full ">
          <div className='flex  items-center gap-4'>
            <img src="/" alt="nav-logo" />
            <h3 className="text-2xl font-medium text-gray-600 px-8">cyfrin updraft</h3>
          </div>

          <ul className=" flex items-center gap-2">
            <li className="border-1 rounded-lg py-2 px-4 ml-64 text-center  text-gray-600 font-semibold">
              <Link to="/">Home</Link>
            </li>
            <li className="border-1 rounded-lg  text-center text-md font-semibold text-gray-600">
              <Link to="/Courses">Courses</Link>
            </li>
          </ul>
          
          <div className='flex gap-2'>
            <button className="border-2 text-gray-600 text-center text-md rounded-xl py-2 px-4 font-semibold bg-gray-100">Signin</button>
            <button className="border-1 bg-blue-600 hover:bg-blue-900  text-white text-center text-md  rounded-xl px-4 py-2 font-semibold">Login</button>
          </div>
          <div className=' block md:hidden cursor-pointer'>
            <FaBars onClick={handleToggleMenu} />
            <div className={` ${isMenuOpen ? 'flex flex-col' : 'hidden '}`}>
              <p>Home</p>
              <p>Courses</p>
            </div>

          </div>
         
        </div> 
        
      </div>
    </nav>
  );
};

export default Navbar;
