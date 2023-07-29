import Image from 'next/image';
import React from 'react';

const SolutionForSociety = () => {
  return (
    <section>
      <div className='section flex items-center gap-8'>
        <div className='left '>
          <Image src={'/mountain.jpeg'}
            alt='Send' className='bg-blend max-w-[32rem]'
            height={500}
            width={500}
          />
        </div>
        <div className='right max-w-2xl flex items-start justify-start flex-col'>
          <h1 className='text-5xl font-bold' style={{ lineHeight: '1.2' }}>
            <span className='text-custom-blue'>
              The solution for Society:
            </span><br />
            True Ownership and freedom
          </h1>
          <div className='h-1 bg-custom-blue rounded w-32 mt-4 mb-4' />
          <p className='text-left tracking-tight text-lg'>
            The incident involving Apple disabling the Bluetooth AirDrop feature in China raised
            important questions about our rights and freedoms concerning our devices and communication
            tools. At SendContact, we firmly believe that if you&apos;ve purchased a device and paid for
            it with your hard-earned money, you should have complete rights and control over it. That&apos;s
            why we provide not only a decentralized operating system but also decentralized software,
            free from dictatorial or authoritarian control. Our Bluetooth functionality enables
            interpersonal communication on the internet and grants you authority and control over your
            network. With SendContact&apos;s decentralized operating system, you truly own your phone,
            communications, data, and network, remaining free from censorship. It&apos;s time to reclaim
            the freedom of communication and embrace a new era of empowerment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionForSociety;
