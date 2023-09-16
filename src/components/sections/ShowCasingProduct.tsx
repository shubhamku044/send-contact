import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './ShowCasingProduct.module.css';

const ShowCasingProduct = () => {
  return (
    <section className='bg-gray-medium text-white overflow-hidden'>
      <div className='section flex flex-col items-center md:justify-around md:flex-row'>
        <div className='left relative w-full '>
          <div className={styles.imageWrap + ' relative m-auto'}>
            <Image src={'/phone-and-hand.webp'}
              alt='Send' className='max-w-[500px] relative z-10 right1/2'
              height={300}
              width={400}
              style={{ transform: 'scaleX(-1)', transformOrigin: 'top' }}
            />
            <Image src={'/ShowcasePhone.webp'}
              alt='Send' className='max-w-[500px] absolute z-0'
              height={50}
              width={150}
              style={{ left: '11.8rem', top: '1.0rem' }}
            />
          </div>
        </div>
        <div className='right max-w-2xl flex items-start justify-start flex-col'>
          <h1 className='text-white text-3xl sm:text-5xl font-bold' style={{ lineHeight: 1.2 }}>
            <span className='text-custom-blue'>Present</span>&nbsp;
            - Showcasing Your<br />
            Service & Products Beautifully
          </h1>
          <div className='h-1 bg-custom-blue rounded w-32 mt-4 mb-4' />
          <p className='text-left text-base sm:text-lg'>
            The SendContact App is not just about networking; it also empowers you to present the
            best of yourself and your products. It serves as your all-in-one hub, offering social
            media functionalities similar to popular platforms like Instagram, LinkedIn, and YouTube.
            You can showcase your photos, videos, network with like-minded professionals, and even
            share large files. The best part is that you retain complete control over your content –
            no one can remove it without your permission. SendContact puts you in the driver&apos;s seat
            when it comes to presenting yourself and your business in the best light possible.
          </p>
          <Link href={`#`}>
            <button className='bg-custom-blue text-base px-14 py-2 mt-4 text-white rounded-md animated-btn'>
              Download SendContact
            </button>
          </Link>
        </div>
      </div>
    </section >
  );
};

export default ShowCasingProduct;
