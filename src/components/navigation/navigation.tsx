import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="nav w-[100vw]">
            <div className={`flex flex-row gap-4 lg:px-10 items-center justify-between text-2xl h-[10vh] ${isActive ? 'active' : ''}`}>
                <Link to='/home' className="text-3xl text-white flex justify-center">
                    <img
                        className="lg:h-[8vh] h-[6vh] pl-4 logo"
                        src="public/img/WEB2.png" alt=""
                    />
                </Link>

                <div className='hamburger-icon md:hidden lg:hidden text-white' onClick={toggleMenu}>
                    <Menu />
                </div>

                <div className={`text-white font-NetHouse flex flex-col lg:flex-row gap-3 nav-items ${isActive ? 'active' : ''}`}>
                    <Link to="/home" className='nav-text text-white'> Home </Link>
                    <Link to="/about" className='nav-text text-white'> About Us </Link>
                    <Link to="/events" className='nav-text text-white'> Events </Link>
                    <Link to="/gallery" className='nav-text text-white'> Gallery </Link>
                </div>
            </div>

            <div className={`overlay ${isActive ? 'active' : ''}`} onClick={toggleMenu}></div>
        </div>
    );
};

export default Navigation;
