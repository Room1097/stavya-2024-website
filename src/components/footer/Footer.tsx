import React from 'react';
import { Separator } from '../ui/separator';
import Social from '../social/Social';
import { Copyright } from 'lucide-react';

const Footer = () => {
  return (
    <div className='relative bottom-0 bg-orange-400' style={{color: "#3A3A50"}}>
      <Separator />
      <div className='flex justify-between mt-5 grid-cols-2 mx-60 py-10 gap-40'>
        <div className='flex flex-row gap-8'>
            <div className='flex flex-col justify-center items-center'>
            <Social
                committeeName='Literature'
                gmailLink='https://www.linkedin.com/company/literature-committee'
                instagramLink='https://www.instagram.com/literature_committee/'
            />
            </div>
            <div className='flex flex-col justify-center items-center'>
            <Social
                committeeName='Cultural'
                gmailLink='https://www.linkedin.com/company/literature-committee'
                instagramLink='https://www.instagram.com/literature_committee/'
            />
            </div>
        </div>
       
        <div>
        <p className='text-2xl w-[28vw] text-left flex flex-col gap-2'>
                <span className='text-4xl'>Indian Institute of Information Technology Vadodara</span> 
                <span className='text-2xl'> International Campus Diu</span>
                <span className='text-xl'>Education Hub, Kevdi, Diu(U.T)- 362520</span>
        </p>

        </div>
      </div>
      <Separator />
      <div className='py-2 flex justify-center items-center gap-2 text-sm'>
        Annual Fest organized by Literature Committee and Cultural Committee of IIIT Vadodara, International Campus - Diu
      </div>
      <Separator />
    </div>
  );
};

export default Footer;
