import React from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
    return (
        <div className="nav">
            <div className="flex flex-row gap-4 lg:px-10 items-center justify-between bg-amber-400 text-2xl h-[10vh]">
                {/* Logo */}
                <Link to='/home' className="text-3xl text-white flex justify-center">
                    <img
                        className="lg:h-[14vh] logo"
                        src="src/assets/img/logo.png" alt=""
                    />
                </Link>

                {/* Hamburger icon for smaller screens */}
                <div className='hamburger-icon lg:hidden'>
                    <Menu />
                </div>

                {/* Navigation items for smaller screens */}
                <div className={`text-white flex flex-row gap-3 nav-items lg:block`}>
                    <a href="/home" className='nav-text'> Home </a>
                    <a href="/about" className='nav-text'> About Us </a>
                    <Link to="/events" className='nav-text'> Events </Link>
                    <Link to="/gallery" className='nav-text'> Gallery </Link>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
