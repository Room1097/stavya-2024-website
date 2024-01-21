import React from "react";

interface TimelineProps {
  title: string;
  startTime: string;
  endTime: string;
}

const TimelineElem: React.FC<TimelineProps> = ({ title, startTime, endTime }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <h2>
          {startTime} - {endTime}
        </h2>
      </div>
    </div>
  );
};

export default TimelineElem;
