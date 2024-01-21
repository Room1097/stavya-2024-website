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
        <div className="nav">
            <div className={`flex flex-row gap-4 lg:px-10 items-center justify-between text-2xl h-[10vh] ${isActive ? 'active' : ''}`}>
                <Link to='/home' className="text-3xl text-white flex justify-center">
                    <img
                        className="lg:h-[8vh] h-[6vh] pl-4 logo"
                        src="src/assets/img/WEB1.svg" alt=""
                    />
                </Link>

                <div className='hamburger-icon md:hidden sm:hidden lg:hidden' onClick={toggleMenu}>
                    <Menu />
                </div>

                <div className={`text-white flex flex-col lg:flex-row gap-3 nav-items ${isActive ? 'active' : ''}`}>
                    <Link to="/home" className='nav-text'> Home </Link>
                    <Link to="/about" className='nav-text'> About Us </Link>
                    <Link to="/events" className='nav-text'> Events </Link>
                    <Link to="/gallery" className='nav-text'> Gallery </Link>
                </div>
            </div>

            <div className={`overlay ${isActive ? 'active' : ''}`} onClick={toggleMenu}></div>
        </div>
    );
};

export default Navigation;
