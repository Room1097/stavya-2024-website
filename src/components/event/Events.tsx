import React from "react";
import EventCard from "./cards/card";
import { Separator } from "../ui/separator";
import { EventsDB } from "../../assets/eventdata/EventsDB";

interface EventData {
  img: string;
  registerUrl: string;
  startDate: string;
  endDate?: string;
  title: string;
  description: string;
}

interface EventProps {
  data: EventData[];
}

const Event: React.FC<EventProps> = ({ data }) => {
  const cardsPerLine = 3;

  return (
    <>
      <div className="w-full flex justify-center items-center text-white font-mono h-24 text-4xl">
        Events for Stavya 2K24
      </div>
      <Separator className="w-[80vw] m-auto" />
      <div className="flex flex-wrap p-12 justify-around">
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <EventCard {...item} />
            {(index + 1) % cardsPerLine === 0 && (
              <div key={`separator-${index}`} className="w-full" />
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

const App: React.FC = () => <Event data={EventsDB} />;

export default App;
