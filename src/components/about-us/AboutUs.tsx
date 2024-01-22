import React from 'react';
import Cult from '../cult-comm/Cult';
import Lit from '../lit-comm/Lit';
import Club from '../clubs/Clubs';

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className='lg:mb-[2rem]'>
        <Cult />
      </div>
      <div className='lg:mb-[2rem]'>
        <Lit />
      </div>
      <div className='lg:mb-[2rem]'>
        <Club />
      </div>
      <div className=''>

      </div>
    </div>
  );
};

export default AboutUs;
