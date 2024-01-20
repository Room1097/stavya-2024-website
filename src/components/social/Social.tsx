import React from 'react';
import { Separator } from '../ui/separator';
import { Mail, Instagram } from 'lucide-react';

interface SocialProps {
  committeeName: string;
  gmailLink: string;
  instagramLink: string;
}

const Social: React.FC<SocialProps> = ({ committeeName, gmailLink, instagramLink }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div>
        <h1 className='text-3xl mb-3'>{committeeName} Committee</h1>
        <Separator className='bg-zinc-700 mb-4'/>
        <div className='links mt-2 flex flex-col gap-y-4'>
          <div className='flex gap-4'>
            <Mail /> <a href={gmailLink} className='text-xl duration-300' target='_blank' rel='noopener noreferrer'>Email Us</a>
          </div>
          <div className='flex gap-4'>
            <Instagram /> <a href={instagramLink} className='text-xl duration-300' target='_blank' rel='noopener noreferrer'>Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
