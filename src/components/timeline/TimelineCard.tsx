import React from "react";
import TimelineElem from "./TimelineElement";
// import { Separator } from "../ui/separator";
import { Day1, Day2, Day3, Day4, Day5, Day6, Day7, Day8 } from "./TimelineDB";

interface TimeLineCardProps {
  day: number;
}

const TimeLineCard: React.FC<TimeLineCardProps> = ({ day }) => {
  let selectedDay: Array<{ event: string; startTime: string; endTime: string }> = [];

  
  switch (day) {
    case 1:
      selectedDay = Day1;
      break;
    case 2:
      selectedDay = Day2;
      break;
    case 3:
      selectedDay = Day3;
      break;
    case 4:
      selectedDay = Day4;
      break;
    case 5:
      selectedDay = Day5;
      break;
    case 6:
      selectedDay = Day6;
      break;
    case 7:
      selectedDay = Day7;
      break;
    case 8:
      selectedDay = Day8;
      break;
    
    default:
      selectedDay = [];
  }

  return (
    <div className="flex flex-col justify-center items-center border-zinc-800 border-2 py-[1.2em] rounded-2xl text-black time-card-container">
      <div className="lg:hidden block">
        <h1 className="font-NetHouse">Day {day}</h1>
      </div>
      <div className="p-[2rem] w-[100%] lg:w-[30vw] flex flex-col justify-center items-center">
        {selectedDay.map((event, index) => (
          <TimelineElem
            key={index}
            title={event.event}
            startTime={event.startTime}
            endTime={event.endTime}
          />
        ))}
      </div>
    </div>
  );
};

export default TimeLineCard;
