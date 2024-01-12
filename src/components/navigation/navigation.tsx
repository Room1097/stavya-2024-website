// import { Button } from "../ui/button";
import './navigation.css'

const Navigation = () => {
    return (
      <div className="nav">
        <div className="grid grid-cols-3 gap-4 h-10 px-10 items-center border-red-500">
        <div className=" text-white flex gap-6 justify-center">
          <a href="#" target='_blank' className='nav-text'> Home </a>
          <a href="#" target='_blank' className='nav-text'> About Us </a>
        </div>
        <div className=" text-3xl text-white flex justify-center">
          <img 
          className=" h-48"
          src="src/assets/img/logo.png" alt="" />
        </div>
        <div className=" text-white flex gap-6 justify-center">
          
          <a href="#" target='_blank' className='nav-text'> Events </a>
          <a href="#" target='_blank' className='nav-text'> Contact Us </a>
        
        </div>
      </div>
      </div>
    );
  }
  
  export default Navigation;
  