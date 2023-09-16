import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DownloadSendContact = () => {
  return (
    <section className='bg-gray-medium text-white'>
      <div className='section flex flex-col gap-2 md:justify-between items-center md:flex-row'>
        <div className='left video'>
          <Image src={'/video.jpeg'} alt='' height={550} width={550} className='rounded-3xl' />
        </div>
        <div className='right max-w-xl'>
          <h1 className='font-bold text-3xl lg:text-5xl' style={{ lineHeight: 1.2 }}>
            Designed For Business,<br />Organizations, Individuals<br />Or Just Networking With <br />Friends -&nbsp;
            <span className='text-custom-blue'>Simple And Magical.</span>
          </h1>
          <div className='h-1 bg-custom-blue rounded w-28 mt-4 hidden md:block' />
          <div className='mt-6 md:mt-8 lg:mt-12'>
            <span className='text-base'>Download SendContact App</span>
            <div className='social-media mt-4 flex gap-4'>
              <Link target='_blank' href={'https://apps.apple.com/us/app/sendcontact/id963951753'}>
                <div>
                  <Image src={'/App_Store.svg'} alt='App store icon' width={163} height={48} />
                </div>
              </Link>
              {/* <Link href={'/'}>
                <div>
                  <Image src={'/Google_Play.svg'} alt='App store icon' width={163} height={48} />
                </div>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSendContact;
