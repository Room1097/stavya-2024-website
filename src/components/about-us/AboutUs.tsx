import React from 'react';
import Cult from '../cult-comm/Cult';
import Lit from '../lit-comm/Lit';

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className='mb-[40vh]'>
        <Cult />
      </div>
      <div className='mt-[40vh]'>
        <Lit />
      </div>
      <div className='mb-[80vh]'>

      </div>
    </div>
  );
};

export default AboutUs;
