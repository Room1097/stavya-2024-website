import React, { useRef, useState } from "react";
import gsap from "gsap";
import { Separator } from "@/components/ui/separator";
import "./card.css"; // Import the CSS file for styling
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp } from "lucide-react";

interface EventCardProps {
  title: string;
  img: string;
  startDate: string;
  endDate?: string;
  registerUrl: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  img,
  startDate,
  endDate,
  registerUrl,
  description,
}) => {
  const cardRef = useRef(null);
  const [expanded, setExpanded] = useState(true);

  const handleRegisterClick = () => {
    window.location.href = registerUrl;
  };

  const handleMoreClick = () => {
    const card = cardRef.current;

    if (!expanded) {
      // If card is not expanded, expand it
      gsap.from(card, { height: "auto" });
      gsap.to(card, { height: "24rem", duration: 0.5 });
    } else {
      gsap.from(card, { height: "24rem"});

      // If card is expanded, collapse it
      gsap.to(card, { height: "auto", duration: 0.5 });
    }

    setExpanded(!expanded);
  };

  return (
    <article
      ref={cardRef}
      className={`event-card flex lg:flex-row gap-5 mb-20 lg:p-8 border-orange-500 border-2 rounded-lg lg:w-[90%] transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-[#FFA500] lg:h-[22rem] event__card`}
    >
      <div className="image-container">
        <img
          src={img}
          alt={`Event: ${title}`}
          className="event-image lg:w-[12rem] rounded-md "
        />
      </div>
      <div className={`event-details-container w-[80%] h-auto`}>
        <header className="event-title text-3xl mb-3 font-bold">
          <h1 className="event-title">{title}</h1>
        </header>
        <div className="event-details">
          <Separator />
          <p className="event-dates lg:text-2xl mb-3">
            {startDate} - {endDate}
          </p>
          <p className="event-description text-justify lg:text-lg">
            {description}
          </p>
          {/* Additional content for demonstration */}
          {!expanded && (
            <div className="expaneded-content mt-4 text-lg">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vitae facilisis risus. Nullam nec dolor nec elit convallis
                dignissim.
              </p>
              <p>
                Vestibulum efficitur quam vitae justo consectetur ultrices.
                Nullam sed metus quis odio bibendum dignissim.
              </p>
              <p>
                Duis facilisis mauris sit amet nibh rhoncus, at lobortis velit
                scelerisque. In hac habitasse platea dictumst.
              </p>
            </div>
          )}
          {/* End of additional content */}
          <div className="event-buttons grid grid-cols-3 gap-4 items-center ">
            <div className="col-span-1 col-end-3 text-xl">
              <button
                onClick={handleMoreClick}
                className="flex items-center justify-center gap-x-2 hover:underline"
              >
                
                
                {!expanded ? <ArrowUp />  : <ArrowDown /> }
                {!expanded ? "Less" : "More"}
              </button>
            </div>
            <div className=" col-span-1 col-end-4">
              <Button
                className="register-button lg:px-10 lg:py-7 lg:text-xl lg:mt-4"
                onClick={handleRegisterClick}
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>

    </article>
  );
};

export default EventCard;
