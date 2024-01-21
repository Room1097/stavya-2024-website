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
  const cardsPerLine = 4;

  return (
    <>
      <div className="w-full flex justify-center items-center text-primay font-sans font-semibold h-24">
       <h1 className="lg:text-4xl text-3xl event-page-title"> Events for Stavya 2024</h1>
      </div>
      <Separator className="w-[80vw] mx-auto" />
      <div className="flex p-12 flex-wrap gap-x-12 justify-center">
        {data.map((item, index) => (
          

          <React.Fragment key={index}>
            
            <EventCard {...item} />
           
          </React.Fragment>
            
        ))}
      </div>
    </>
  );
};

const App: React.FC = () => <Event data={EventsDB} />;

export default App;
