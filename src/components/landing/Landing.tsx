import React from "react";
import { CalendarDays, MapPin } from "lucide-react";
import TimeLineCard from "../timeline/TimelineCard";
import "./Landing.css";

const Landing = () => {
  return (
    <div>
      <div className="main-image w-full h-[100vh] bg-red-500 text-white">
        <div className="flex flex-col justify-center items-center pt-[20vh] gap-[18px]">
          <div>
            <h1 className="uppercase text-7xl font-bold">stavya 2024</h1>
          </div>
          <div>
            <h2 className="uppercase font-bold text-2xl">
              Retro. Rythms. Revisited.
            </h2>
          </div>
          <div>
            <h3 className="uppercase flex">
              <CalendarDays />
              26th January | Event garden
              <MapPin />
            </h3>
          </div>
        </div>
      </div>
      <div className="part-2 w-full h-[40vh] bg-amber-600">
        <div className="flex flex-col gap-[20px] justify-center items-center pt-[6vh]">
          <h1 className="text-3xl uppercase font-bold">about the event</h1>
          <p className="w-[40vw] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            velit inventore officia ab, omnis minus architecto, possimus
            blanditiis fugit reiciendis necessitatibus quae quia aperiam
            quisquam quis vero modi amet. Cupiditate?
          </p>
        </div>
      </div>
      <div>
        <TimeLineCard />
      </div>
    </div>
  );
};

export default Landing;
