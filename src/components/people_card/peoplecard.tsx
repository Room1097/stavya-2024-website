import React from 'react';
import './person.css';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { Instagram, Linkedin, LinkedinIcon } from 'lucide-react';

interface PeopleCardProps {
  image: string;
  name: string;
  team: string;
  linkedin : string;
  insta : string;
}

const PeopleCard: React.FC<PeopleCardProps> = ({ image, name, team, linkedin,insta }) => {
  const handleLinkedInClick = () => {
    window.location.href = linkedin;
  };
  const handleInstaClick = () => {
    window.location.href = insta;
  };
  return (
    <div className="person-card-container">
      <div className='person-card slide__bottom person-card-slide'>
      <div className="profile-pic delay1 show">
        <img src={image} alt="Profile" className='profile' />
      </div>
      <div className="details show2">
        <h2 className='details__name'>{name}</h2>
        <Separator />
        <h3>{team}</h3>
        <h3><Button onClick={handleInstaClick} variant="link"><Instagram className='border-red-500 border-2 lg:w-4 lg:h-4 lg:mr-2 p-0'/>Instagram</Button></h3>
        <h3><Button onClick={handleLinkedInClick} variant="link"><LinkedinIcon className='lg:w-4 lg:h-4 lg:mr-2 p-0'/>LinkedIn</Button></h3>
      </div>
    </div>
    </div>
  );
};

export default PeopleCard;
