import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {

    return (
      <div className="nav h-40">
        <div className="grid grid-cols-3 gap-4 h-10 px-10 items-center border-red-500 text-2xl">
        <div className=" text-white flex gap-6 justify-center">
          <a href="/home" className='nav-text'> Home </a>
          <a href="/about" className='nav-text'> About Us </a>

        </div>
        <Link to='/home' className="text-3xl text-white flex justify-center">
          <img 
            className="h-48"
            src="src/assets/img/logo.png" alt=""
          />
        </Link>
        <div className="text-white flex gap-6 justify-center">
          <Link to="/events" className='nav-text'> Events </Link>
          <Link to="/gallery" className='nav-text'> Gallery </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
