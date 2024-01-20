import React from 'react';
import { Separator } from '../ui/separator';
import { Linkedin, Instagram } from 'lucide-react';

interface SocialProps {
  committeeName: string;
  linkedinLink: string;
  instagramLink: string;
}

const Social: React.FC<SocialProps> = ({ committeeName, linkedinLink, instagramLink }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div>
        <h1 className='text-3xl mb-3'>{committeeName} Committee</h1>
        <Separator />
        <div className='links mt-2 flex flex-col gap-y-4'>
          <div className='flex gap-4'>
            <Linkedin /> <a href={linkedinLink} className='text-xl duration-300' target='_blank' rel='noopener noreferrer'>LinkedIn Page</a>
          </div>
          <div className='flex gap-4'>
            <Instagram /> <a href={instagramLink} className='text-xl duration-300' target='_blank' rel='noopener noreferrer'>Instagram Page</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
