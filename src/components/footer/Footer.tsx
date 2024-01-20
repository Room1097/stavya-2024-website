import React from 'react';
import { Separator } from '../ui/separator';
import { Linkedin, Instagram } from 'lucide-react';
import Social from '../social/Social';

const Footer = () => {
  return (
    <div className='relative bottom-0'>
      <Separator />
      <div className='flex justify-between mt-5 grid-cols-2 mx-60 py-10'>
        <div className='flex flex-row gap-8'>
            <div className='flex flex-col justify-center items-center'>
            <Social
                committeeName='Literature'
                linkedinLink='https://www.linkedin.com/company/literature-committee'
                instagramLink='https://www.instagram.com/literature_committee/'
            />
            </div>
            <div className='flex flex-col justify-center items-center'>
            <Social
                committeeName='Cultural'
                linkedinLink='https://www.linkedin.com/company/literature-committee'
                instagramLink='https://www.instagram.com/literature_committee/'
            />
            </div>
        </div>
       
        <div>
        <p className='text-2xl w-108 text-center'>
            <span className='text-4xl font-bold'>Cultural & Literature</span> <br /> 
            <span className='text-4xl uppercase'>Fest</span> <br />
            <span className='uppercase'>in your nearest Event Garden from</span> <br />
            <span className='text-4xl font-bold'>26, Jan 2024!</span>
        </p>

        </div>
      </div>
      <Separator />
    </div>
  );
};

export default Footer;
