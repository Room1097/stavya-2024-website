import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import EventCard from "../event_card/card";
import { Separator } from "@/components/ui/separator";
import { EventsDB } from "../../assets/eventdata/EventsDB";

gsap.registerPlugin(ScrollTrigger);

interface EventData {
  img: string;
  registerUrl: string;
  startDate: string;
  endDate?: string;
  title: string;
  description: string;
  rules: string[];
  regdate: string;
  organizers1 ?: string; 
  organizers1Photo ?: string; 
  organizers2 ?: string; 
  organizers2Photo ?: string; 
 
}

interface EventProps {
  data: EventData[];
}

const Event: React.FC<EventProps> = ({ data }) => {
  // const cardsPerLine = 4;
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = Array.from(cardsRef.current?.children || []);

    if (cards.length > 0) {
      cards.forEach((card: Element) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top center",
              end: "bottom center",
              scrub: 1,
            },
          }
        );
      });
    }
  }, []);

  return (
    <>
      <div className="w-full flex justify-center items-center text-primay font-sans font-semibold h-24">
        <h1 className="lg:text-4xl text-3xl event-page-title font-Casino">Events for Stavya 2024</h1>
      </div>
      <Separator className="w-[80vw] mx-auto" />
      <div className="flex p-12 flex-wrap gap-x-12 justify-center" ref={cardsRef}>
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
