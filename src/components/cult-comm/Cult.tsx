import React from 'react';
import Line from '../lineBreak/Line';
import PeopleCard from '../people_card/peoplecard';
import { CultDB } from '@/assets/culturaldata/CultDB';
import { Separator } from '../ui/separator';

const Cult = () => {
  return (
    <div className="w-full flex flex-wrap items-center justify-center p-4">

      <div className="flex justify-center items-center flex-col w-full lg:w-[90%]">
        <Separator className='py-0.5 bg-slate-300 w-full lg:w-[90vw]' />
        <h1 className="lg:text-5xl lg:mt-5 lg:mb-10 text-3xl mt-2">Cultural Committee</h1>
      </div>

      <div className='people-card-row flex flex-wrap gap-4 lg:gap-[10rem] justify-center lg:flex-row flex-col'>
        {CultDB.map((person) => (
          <PeopleCard
            key={person.name}
            name={person.name}
            image={person.image}
            team={person.team}
            contact={person.contact}
          />
        ))}
      </div>
    </div>
  );
};

export default Cult;
