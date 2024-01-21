// TimelineElem.tsx
import React from "react";
import './Timeline.css'

interface TimelineProps {
  title: string;
  startTime: string;
  endTime: string;
}

const TimelineElem: React.FC<TimelineProps> = ({ title, startTime, endTime }) => {
  return (
    <div className="timeline-item py-[12px]">
      <div className="timeline-content">
        <h1 className="lg:text-lg text-sm">{title}</h1>
        <h2 className="lg:text-[1.5vh] text-[1vh]">
          {startTime} - {endTime}
        </h2>
      </div>
    </div>
  );
};

export default TimelineElem;
