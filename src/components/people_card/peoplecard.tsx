import './person.css';
import { Separator } from '../ui/separator';

interface PeopleCardProps {
  image: string;
  name: string;
  team: string;
  contact: string;
}

const PeopleCard: React.FC<PeopleCardProps> = ({ image, name, team, contact }) => {
 


  return (
    <div className='person-card slide__bottom' >
      <div className="profile-pic delay1 show" >
        <img src={image} alt="Profile" className='profile' />
      </div>
      <div className="details show2" >
        <h2 className='details__name'>{name}</h2>
        <Separator />
        <h3>{team}</h3>
        <h3>{contact}</h3>
      </div>
    </div>
  );
};

export default PeopleCard;
