import React from 'react';
import Line from '../lineBreak/Line';
import PeopleCard from '../people_card/peoplecard';
import { LitDB } from '@/assets/litdata/LitDB';
import { Separator } from '../ui/separator';

const Cult = () => {
  const peopleCardsRows = [];

  for (let i = 0; i < LitDB.length; i += 3) {
    const row = LitDB.slice(i, i + 3).map((person) => (
      <PeopleCard
        key={person.name} 
        name={person.name}
        image={person.image}
        team={person.team}
        contact={person.contact}
      />
    ));

    const isTwoPeopleCards = row.length === 2;
    const centerClass = isTwoPeopleCards ? 'justify-center' : '';

    peopleCardsRows.push(
      <div key={i} className={`peopleCards flex flex-row gap-[12rem] ${centerClass}`}>
        {row}
      </div>
    );

    if (i < LitDB.length - 3) {
      peopleCardsRows.push(<div key={`gap-${i}`} className="mt-20" />);
    }
  }

  return (
    <div className="w-100 h-96 flex flex-wrap">
      <div>
        <div className="flex justify-center items-center flex-col">
          <Separator />
          <h1 className="text-3xl mt-5 mb-10">Literature Committee</h1>
        </div>
        {peopleCardsRows}
      </div>
    </div>
  );
};

export default Cult;
