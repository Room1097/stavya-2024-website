import React from 'react';
import './person.css';

interface PeopleCardProps {
  image: string;
  name: string;
  team: string;
  contact: string;
}

const PeopleCard: React.FC<PeopleCardProps> = ({ image, name, team, contact }) => {
  return (
    <div className='person-card'>
      <div className="profile-pic">
        <img src={image} alt="Profile" className='profile'/>
      </div>
      <div className="details">
        <h2>{name}</h2>
        <h3>{team}</h3>
        <h3>{contact}</h3>
      </div>
    </div>
  );
};

export default PeopleCard;
