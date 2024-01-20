import './person.css';
import { Separator } from '../ui/separator';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface PeopleCardProps {
  image: string;
  name: string;
  team: string;
  contact: string;
}

const PeopleCard: React.FC<PeopleCardProps> = ({ image, name, team, contact }) => {
  const personCardRef = useRef<HTMLDivElement>(null);
  const profilePicRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (personCardRef.current) {
      const timeline = gsap.timeline();

      timeline.from(personCardRef.current, {
        opacity: 1,
        duration: 1.2,
        ease: 'power2.inOut',
        y: 40
      });

      timeline.from(profilePicRef.current, {
        opacity: 1,
        duration: 0.8,
        ease: 'power2.inOut',
        delay: 1
      });

      timeline.from(detailsRef.current, {
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
        delay: 2,
      }, "-=0.6"); 
    }
  }, []); 

  return (
    <div className='person-card' ref={personCardRef}>
      <div className="profile-pic" ref={profilePicRef}>
        <img src={image} alt="Profile" className='profile' />
      </div>
      <div className="details" ref={detailsRef}>
        <h2 className='details__name'>{name}</h2>
        <Separator />
        <h3>{team}</h3>
        <h3>{contact}</h3>
      </div>
    </div>
  );
};

export default PeopleCard;
