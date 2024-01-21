import React from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
    return (
        <div className="nav">
            <div className="flex flex-row gap-4 lg:px-10 items-center justify-between text-2xl h-[10vh]">
                <Link to='/home' className="text-3xl text-white flex justify-center">
                    <img
                        className="lg:h-[8vh] h-[6vh] pl-4 logo"
                        src="src/assets/img/WEB1.svg" alt=""
                    />
                </Link>

                <div className='hamburger-icon md:hidden sm:hidden lg:hidden'>
                    <Menu />
                </div>

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
