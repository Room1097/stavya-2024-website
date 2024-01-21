import React from "react";
import TimelineElem from "./TimelineElement";
import { TimelineDB } from "./TimelineDB";

const TimeLineCard: React.FC = () => {
  return (
    <div>
      <TimelineElem title="Meeting" startTime="10:00 AM" endTime="11:00 AM" />
    </div>
  );
};

export default TimeLineCard;
