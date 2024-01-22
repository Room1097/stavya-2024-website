import React, { useRef, useState } from "react";
import { Separator } from "@/components/ui/separator";
import "./card.css"; // Import the CSS file for styling
import { Button } from "@/components/ui/button";
import { ScrollArea } from "../ui/scroll-area";

import { Card,CardContent } from "../ui/card";
import { Avatar,AvatarImage } from "../ui/avatar";

import { Dialog,DialogContent,DialogTrigger } from "../ui/dialog";

interface EventCardProps {
  title: string;
  img: string;
  startDate: string;
  endDate?: string;
  registerUrl: string;
  description: string;
  rules:string[];
  regdate : string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  img,
  startDate,
  endDate,
  registerUrl,
  description,
  rules,
  regdate
}) => {
  const [expanded, setExpanded] = useState(true);

  const handleRegisterClick = () => {
    window.location.href = registerUrl;
  };
  const handlDate = () =>{
    if (endDate) {
      return `${startDate} - ${endDate}`;
    } else {
      return `On ${startDate}`;
    }

  }
  const renderRulesList = () => {
    return (
      
      <ul className="list-disc ml-6">
        <ScrollArea className="rounded-md border border-slate-700 lg:h-96 h-56 text-xl p-4 ">
        {rules.map((rule, index) => (
          <div className="p-3">{rule}
          <Separator className="mt-4"/>
          </div>
          ))}
      </ScrollArea>
      </ul>
    );
  };

  return (
    <article
      className={`event-card flex lg:flex-row gap-5 mb-20 lg:p-8 border-accent1 border-2 rounded-lg lg:w-[90%] transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-accent2 ${
        expanded ? "lg:h-auto" : "lg:h-[30rem]"
      } event__card`}
    >
      <div className="image-container">
        <img
          src={img}
          alt={`Event: ${title}`}
          className="event-image lg:w-[16rem] rounded-md transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-accent1"
        />
      </div>
      <div className={`event-details-container w-[80%] h-auto`}>
        <header className="event-title text-3xl mb-3 font-bold font-Rialto">
          <h1 className="event-title">{title}</h1>
        </header>
        <div className="event-details">
          <Separator className=" bg-accent2"/>
          <p className="event-dates lg:text-2xl mb-3">
            {handlDate()}
          </p>
          <p className="event-description text-justify lg:text-lg">
            {description}
          </p>

          <Dialog >
          
              <DialogTrigger>
                <Button variant="link" className="mt-5 text-xl px-0 ">
                  More
                </Button>
              </DialogTrigger>
              <DialogContent className="transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-accent1 w-max">
                <div className=" font-bold lg:text-xl text-sm"> Organizers</div>
              <div className="w-full flex lg:flex-row flex-col gap-5">
                <Card className="hover:shadow-lg hover:shadow-accent2">
                  <CardContent className="flex items-center gap-x-3 p-3">

                  <Avatar className="w-20 h-20">
                    <AvatarImage src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"/>                    
                  </Avatar>
                  <h1 className="lg:text-2xl">john doe</h1>
                  </CardContent>
                </Card>
                <Card className=" hover:shadow-lg hover:shadow-accent2">
                  <CardContent className="flex items-center gap-x-3 p-3">

                  <Avatar className="w-20 h-20">
                    <AvatarImage  src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"/>                    
                  </Avatar>
                  <h1 className="lg:text-2xl">john doe</h1>
                  </CardContent>
                </Card>
              </div>
                <div className="expanded-content mt-4 lg:text-lg text-sm text-justify">
                  <div className=" font-bold lg:text-xl text-sm"> Rules</div>
                  <p>
                    {renderRulesList()}
                  </p>
                  <div className=" font-bold lg:text-xl text-sm"> Registration date</div>
                  <p>
                    {regdate}
                  </p>
                </div>
              </DialogContent>
       
          </Dialog>

          
            <div className="flex flex-row justify-end mt-[2vh] mb-[1vh]">
              <Button
                className="register-button lg:px-10 lg:py-7 lg:text-xl hover:shadow-md hover:shadow-accent2"
                onClick={handleRegisterClick}
                variant="ghost1"              >
                Register
              </Button>
            </div>
          
        </div>
      </div>
    </article>
  );
};

export default EventCard;
