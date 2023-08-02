'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import img1 from '../../../public/decentralized/01-01.jpg';
import img2 from '../../../public/decentralized/01-02.jpg';
import img3 from '../../../public/decentralized/01-03.jpg';
import img4 from '../../../public/decentralized/01-04.jpg';
import img5 from '../../../public/decentralized/01-05.jpg';
import img6 from '../../../public/decentralized/01-06.jpg';

const imageList = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
];

const DecentralizedOS = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const [image, setImage] = useState(img1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImage === 6) {
        setCurrentImage(1);
        setImage(img1);
      } else {
        setCurrentImage(currentImage + 1);
        setImage(imageList[currentImage]);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <section>
      <div className='section flex flex-col-reverse items-center justify-between md:flex-row'>
        <div className='left'>
          <Image
            src={image}
            alt='Send' className='bg-blend sm:max-w-[32rem]'
            height={500}
            width={500}
          />
        </div>
        <div className='flex flex-col'>
          <p className='px-8 py-2 bg-yellow-400 mb-4 self-center rounded-full font-medium'>
            Coming Soon
          </p>
          <div className='right max-w-2xl flex items-start justify-start flex-col'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold' style={{ lineHeight: '1.2' }}>
              The SendContact<span className='text-custom-blue'> Decentralized Operating System:
              </span> Empowering <br />
              Individuals And Businesses
            </h1>
            <div className='h-1 bg-custom-blue rounded w-32 mt-4 mb-4' />
            <p className='text-left text-base md:text-lg'>
              In a world dominated by centralized control, SendContact introduces a
              decentralized operating system. This all-in-one communication tool grants
              individuals and businesses complete control over their tools, data, and content.
              Our core technology operates independently in both centralized and
              decentralized modes. The centralized application offers convenience and fast
              communication, while the decentralized application ensures privacy, security,
              and freedom from censorship. With SendContact, you regain ownership and
              control over your communication tools, liberating yourself from the bondage of
              social media and the centralized internet. It&apos;s an exciting time for individuals and
              businesses to seize control over their devices and communication tools,
              empowering them to truly harness their potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecentralizedOS;
