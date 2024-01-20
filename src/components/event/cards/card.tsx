import React from 'react';
import { Separator } from '@/components/ui/separator';
import './card.css'; // Import the CSS file for styling
import { Button } from '@/components/ui/button';

interface EventCardProps {
  title: string;
  img: string;
  startDate: string;
  endDate?: string;
  registerUrl: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, img, startDate, endDate, registerUrl, description }) => {

  const handleRegisterClick = () => {
    window.location.href = registerUrl;
  };

  return (
    <article className="event-card flex flex-row gap-5 mb-20 p-8 border-orange-500 border-2 rounded-lg w-[48%] transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-[#FFA500]">
      <div className='image-container'>
        <img src={img} alt={`Event: ${title}`} className='event-image w-[30rem] rounded-md ' />
      </div>
      <div className={`event-details-container w-[36rem]`}>
        <header className='event-title text-3xl mb-3 font-bold'>{title}</header>
        <div className='event-details'>
          <Separator />
          <p className='event-dates text-2xl mb-3'>{startDate} - {endDate}</p>
          <p className='event-description text-justify text-lg'>{description}</p>
          <div className='event-buttons flex items-center justify-center'>
            <Button className='register-button px-6 py-4 text-lg mt-4'
              // variant="secondary"
              onClick={handleRegisterClick}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default EventCard;
