import Line from '../lineBreak/Line'
import PeopleCard from '../people_card/peoplecard'
import { CultDB } from '@/assets/culturaldata/CultDB'
import { Separator } from '../ui/separator'

const AboutUs = () => {
  return (
    <div className="w-100 h-96">
      <div>
        <div className="flex justify-center items-center flex-col">
          <Separator />
            <h1 className="text-2xl mt-5">Cultural Committee</h1>
        </div>
        <div className='peopleCards flex flex-row gap-20 ml-20 mt-5'>
          {CultDB.map((person) => (
          <PeopleCard
            key={person.id} 
            name={person.name}
            image={person.image}
            team={person.team}
            contact={person.contact}
          />
        ))}
        </div>
      </div>
    </div>
  )
}

export default AboutUs
