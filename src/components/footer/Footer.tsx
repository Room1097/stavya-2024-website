import React from 'react';
import { Separator } from '../ui/separator';
import Social from '../social/Social';
import { Copyright } from 'lucide-react';

const Footer = () => {
  return (
    <div className='relative bottom-0 bg-orange-400 pb-4 text-gray-800'>
      <Separator className='bg-slate-700' />
      <div className='flex flex-col lg:flex-row justify-center items-center lg:justify-between mt-5 mx-4 lg:mx-60 py-10 lg:gap-40'>
        <div className='flex lg:flex-col flex-row lg:gap-8 gap-3 items-center'>
          <div className='flex  lg:flex-col justify-center items-center lg:mb-6'>
            {/* Use flex-row on smaller screens */}
            <Social
              committeeName='Literature'
              gmailLink='https://www.linkedin.com/company/literature-committee'
              instagramLink='https://www.instagram.com/literature_committee/'
      
            />
          </div>
          <div className='flex  lg:flex-col justify-center items-center'>
            {/* Use flex-row on smaller screens */}
            <Social
              committeeName='Cultural'
              gmailLink='https://www.linkedin.com/company/literature-committee'
              instagramLink='https://www.instagram.com/literature_committee/'
              
            />
          </div>
        </div>

        {/* Hide on small screens */}
        <div className='right-footer lg:w-1/3 hidden sm:block'>
          <p className='text-center lg:text-left flex flex-col gap-2'>
            <span className='text-4xl'>Indian Institute of Information Technology Vadodara</span>
            <span className='text-2xl'>International Campus Diu</span>
            <span className='text-xl'>Education Hub, Kevdi, Diu(U.T)- 362520</span>
          </p>
        </div>
      </div>
      <Separator className='bg-slate-700' />
      <div className='py-2 lg:flex justify-center items-center gap-2 text-sm hidden sm:flex'>
        Annual Fest organized by Literature Committee and Cultural Committee of IIIT Vadodara, International Campus - Diu
      </div>
      <Separator className='bg-slate-700' />
    </div>
  );
};

export default Footer;
