import React from "react";
import { CalendarDays, MapPin } from "lucide-react";
import TimeLineCard from "../timeline/TimelineCard";
import "./Landing.css";
import { Separator } from "../ui/separator";

const Landing: React.FC = () => {
  return (
    <div>
      <div className="main-image w-full h-[100vh] home-container text-white">
        <div className="flex flex-col justify-center items-center pt-[12vh] gap-[18px]">
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

      <div className="flex flex-col justify-center items-center p-[2rem] timeline-super-div">
        <div>
          <h1 className="text-4xl mb-[20px]">Event Timeline</h1>
        </div>
        <div className="w-[90vw] ">
          <Separator className="py-0.5 my-[2vh]" />
        </div>
        <div className="timeline-container">
          <div className="timeline-item-main">
            <TimeLineCard day={1} />
            <div className="timeline-content">
              {/* Add your content for day 1 */}
            </div>
          </div>
          <div className="timeline-item-main">
            <TimeLineCard day={2} />
            <div className="timeline-content">
              {/* Add your content for day 2 */}
            </div>
          </div>
          <div className="timeline-item-main">
            <TimeLineCard day={3} />
            <div className="timeline-content">
              {/* Add your content for day 3 */}
            </div>
          </div>
          <div className="timeline-item-main">
            <TimeLineCard day={4} />
            <div className="timeline-content">
              {/* Add your content for day 4 */}
            </div>
          </div>
          <div className="timeline-item-main">
            <TimeLineCard day={5} />
            <div className="timeline-content">
              {/* Add your content for day 5 */}
            </div>
          </div>
          <div className="timeline-item-main">
            <TimeLineCard day={6} />
            <div className="timeline-content">
              {/* Add your content for day 6 */}
            </div>
          </div>
          <div className="timeline-item-main">
            <TimeLineCard day={7} />
            <div className="timeline-content">
              {/* Add your content for day 7 */}
            </div>
          </div>
          <div className="timeline-item-main">
            <TimeLineCard day={8} />
            <div className="timeline-content">
              {/* Add your content for day 8 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
