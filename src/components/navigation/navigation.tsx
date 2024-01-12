import { Button } from "../ui/button";

const Navigation = () => {
    return (
      <div className="grid grid-cols-3 gap-4 h-10 px-10 items-center border-red-500 ">
        <div className="text-3xl text-white flex gap-6 justify-center">
          <h2>Home</h2>
          <h2>About Us</h2>
        </div>
        <div className=" text-3xl text-white flex justify-center">
          <img 
          className=" h-48"
          src="src/assets/img/logo.png" alt="" />
        </div>
        <div className="text-3xl text-white flex gap-6 justify-center">
          <h2>Events</h2>
          <h2>Contact Us</h2>

        
        </div>
      </div>
    );
  }
  
  export default Navigation;
  