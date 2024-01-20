import React from 'react';
import Cult from '../cult-comm/Cult';
import Lit from '../lit-comm/Lit';

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className='mb-60'>
        <Cult />
      </div>
      <div className='mt-60'>
        <Lit />
      </div>
      <div className='mb-[30rem]'>

      </div>
    </div>
  );
};

export default AboutUs;
