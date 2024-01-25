import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Mail, Instagram, Ghost } from 'lucide-react';
import { Button } from '../ui/button';

interface SocialProps {
  committeeName: string;
  gmailLink: string;
  instagramLink: string;
}

const Social: React.FC<SocialProps> = ({ committeeName, gmailLink, instagramLink }) => {
  return (
    <div className='flex flex-col justify-center items-center social-container'>
      <div>
        <h1 className='lg:text-3xl mb-3'>{committeeName} Committee</h1>
        <Separator className='bg-zinc-700 mb-4'/>
        <div className='links mt-2 flex flex-col lg:gap-y-4 gap-y-2'>
          <div className='flex gap-4'>
            <Mail /> <Button 
            variant="link"
            onClick={()=>{window.location.href=`mailto:${gmailLink}`}} 
            className='lg:text-xl duration-300 text-sm pb-[1.5rem] ml-[-1rem] font-normal'  
            rel='noopener noreferrer'>Email Us</Button>
          </div>
          <div className='flex gap-4'>
            <Instagram /> <a href={instagramLink} className='lg:text-xl text-sm duration-300 hover:underline' target='_blank' rel='noopener noreferrer'>Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
