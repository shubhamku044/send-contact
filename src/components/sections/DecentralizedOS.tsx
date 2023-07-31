import Image from 'next/image';
import React from 'react';

const DecentralizedOS = () => {
  return (
    <section>
      <div className='section flex flex-col-reverse items-center justify-between md:flex-row'>
        <div className='left '>
          <Image src={'/01-01.jpg'}
            alt='Send' className='bg-blend sm:max-w-[32rem]'
            height={500}
            width={500}
          />
        </div>
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
    </section>
  );
};

export default DecentralizedOS;
