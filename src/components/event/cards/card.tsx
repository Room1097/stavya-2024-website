import React, { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import './card.css'; // Import the CSS file for styling

interface EventCardProps {
  title: string;
  img: string;
  startDate: string;
  endDate?: string;
  registerUrl: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, img, startDate, endDate, registerUrl, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`event-card flex flex-row gap-5 mb-20 ${isHovered ? 'hovered' : ''}`}>
      <div className='image-container' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <img src={img} alt="" className='h-[20rem]' />
      </div>
      <div className={`event-details-container ${isHovered ? 'visible' : ''}`}>
        <div className='w-[28rem] event-details'>
          <h1 className='text-4xl mb-3'>{title}</h1>
          <Separator />
          <p className='text-2xl mb-3'>{startDate} - {endDate}</p>
          <p className='text-justify text-lg'>{description}</p>
          <div className='event-details_buttons flex justify-evenly'>
            <button className='px-5 py-2 text-xl text-black my-4' style={{backgroundColor: 'white'}}>More</button>
            <button className='px-5 py-2 text-xl text-black my-4' style={{backgroundColor: 'white'}}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
