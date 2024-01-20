// import { Button } from "../ui/button";
import './navigation.css'

const Navigation = () => {
    return (
      <div className="nav h-40">
        <div className="grid grid-cols-3 gap-4 h-10 px-10 items-center border-red-500 text-2xl">
        <div className=" text-white flex gap-6 justify-center">
          <a href="/home" className='nav-text'> Home </a>
          <a href="/about" className='nav-text'> About Us </a>
        </div>
        <div className=" text-3xl text-white flex justify-center">
          <img 
          className=" h-48"
          src="src/assets/img/logo.png" alt="" />
        </div>
        <div className=" text-white flex gap-6 justify-center">
          
          <a href="/events" className='nav-text'> Events </a>
          <a href="#" className='nav-text'> Contact Us </a>
        
        </div>
      </div>
      </div>
    );
  }
  
  export default Navigation;
  