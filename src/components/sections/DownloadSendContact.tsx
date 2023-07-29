import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DownloadSendContact = () => {
  return (
    <section className='bg-gray-medium text-white'>
      <div className='section flex justify-between items-center'>
        <div className='left video'>
          <Image src={'/video.jpeg'} alt='' height={550} width={550} className='rounded-3xl'/>
        </div>
        <div className='right text-4xl max-w-[400px] mx-auto '>
          <h1>SendContact Brings Out The Best In Me. It's</h1>
          <h1 className='text-custom-blue'>Simple And Easy To Use</h1>
          <div className='h-1 bg-custom-blue rounded w-28 mt-4' />
          <span className='text-base'>Download SendContact App</span>
          <div className='social-media mt-4 flex gap-4'>
            <Link href={'/'}>
              <div>
                <Image src={'/App_Store.svg'} alt='App store icon' width={163} height={48} />
              </div>
            </Link>
            <Link href={'/'}>
              <div>
                <Image src={'/Google_Play.svg'} alt='App store icon' width={163} height={48} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSendContact;
