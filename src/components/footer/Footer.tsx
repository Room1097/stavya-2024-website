
import { Separator } from '@/components/ui/separator';
import Social from '../social/Social';


const Footer = () => {
  return (
    <div className='relative bottom-0 pb-4  text-gray-100 footer-main '>
      <Separator className='bg-slate-700' />
      <div className='flex flex-col lg:flex-row justify-center items-center lg:justify-between mt-5 mx-4 lg:mx-60 py-10 lg:gap-40'>
        <div className='flex lg:flex-col flex-row lg:gap-5 gap-3 lg:items-start items-center'>
          <div className='flex lg:flex-col justify-center lg:items-start lg:mb-6'>
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
        <div className='right-footer lg:w-1/3 hidden sm:block lg:flex lg:flex-col lg:items-center lg:justify-center gap-[60px]'>
          <div>
            <img src="public/img/WEB2.png" className="lg:w-[16rem] h-full" alt="" />
          </div>
          <p className='ml-[8vw] text-center w-[26rem] lg:text-left flex flex-col gap-2'>
            <span className='text-2xl'>Indian Institute of Information Technology Vadodara</span>
            <span className='text-xl'>International Campus Diu</span>
            <span className='text-lg'>Education Hub, Kevdi, Diu(U.T)- 362520</span>
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
