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
        <div className="flex flex-col justify-center items-center lg:pt-[12vh] pt-[8vh] lg:gap-[18px] gap-[10px]">
          <div>
            <h1 className="uppercase lg:text-7xl text-5xl font-bold">stavya 2024</h1>
          </div>
          <div>
            <h2 className="uppercase font-bold text-xl lg:text-2xl">
              Retro. Rythms. Revisited.
            </h2>
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

      <div className="flex flex-col justify-center items-center p-[2rem] timeline-super-div">
        <div>
          <h1 className="text-4xl mb-[20px]">Event Timeline</h1>
        </div>
        <div className="w-[90vw] ">
          <Separator className="py-0.5 my-[2vh] bg-amber-600" />
        </div>
        <div className="timeline-container">
          {days.map((day) => (
            <div key={day} className="timeline-item-main">
              <TimeLineCard day={day} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
