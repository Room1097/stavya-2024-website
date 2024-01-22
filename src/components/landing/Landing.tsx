import React from "react";
import { CalendarDays, MapPin } from "lucide-react";
import TimeLineCard from "../timeline/TimelineCard";
import "./Landing.css";
import { Separator } from "../ui/separator";

const days = [1, 2, 3, 4, 5, 6, 7, 8];

interface DayProps {
  day: number;
}

const Landing: React.FC = () => {
  return (
    <div>
      <div className="main-image w-full lg:h-[100vh] h-[65vh] home-container text-white">
        <div className="overlay absolute top-0 right-0 bottom-0 left-0 w-full h-full"></div>
        
        <div className="flex flex-col justify-center items-center lg:pt-[5vh] pt-[8vh] lg:gap-[0px] gap-[10px] text-box-landing">
          
            <div className="uppercase font-Undev flex gap-[0px] "> 
              <span className="lg:text-[10rem] text-5xl ">stavya</span> 
              <span className="lg:text-[10rem] text-5xl ">2024</span> 
            </div>
          
            <div className="uppercase lg:text-4xl font-NetHouse flex gap-[20px]">
              <span className="text-5xl">Retro </span>  
              <span className="text-5xl">Rythms</span>    
              <span className="text-5xl">Revisited</span>
            </div>

          <div>
            
            <h3 className="uppercase flex gap-2">
              <CalendarDays />
              26th January | Event garden
              <MapPin />
            </h3>
          </div>
        </div>
      </div>
      <div className="part-2 w-full pb-10 bg-amber-600">
        <div className="flex flex-col lg:gap-[20px] justify-center items-center pt-[6vh]">
          <h1 className="lg:text-3xl uppercase font-bold">about the event</h1>
          <p className="lg:w-[40vw] w-[80vw] text-center pb-10 lg:pb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quo, sit ea rem est dignissimos provident cum officiis? Culpa animi quae quos labore quas dignissimos, fuga dolorem veniam consectetur perferendis.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center timeline-super-div pb-10">
        <div>
          <h1 className="text-4xl my-[20px] font-Rialto">Event Timeline</h1>
        </div>

        <div className="timeline-container">
          {days.map((day) => (
            <div key={day} className="timeline-wrapper my-[2rem] flex gap-[10vw]">
              <div className="time-line-item-main">
                <TimeLineCard day={day} />
              </div>
              <div className="flex justify-center items-center">
                <h1 className="text-5xl font-bold day-text"> Day {day}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
