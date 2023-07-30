import Image from 'next/image';
import React from 'react';

const BluetoothProblem = () => {
  return (
    <section className='bg-gray-medium text-white'>
      <div className='section flex flex-col lg:flex-row items-center justify-evenly'>
        <div className='left text-5xl max-w-2xl flex flex-col lg:flex-row items-start justify-start'>
          <h1 className='font-bold'>
            <span className='text-custom-blue'>The Problem</span>&nbsp;
            With Bluetooth Technology And Our Solution
          </h1>
          <div className='h-1 bg-custom-blue rounded w-32 mt-4 mb-4' />
          <p className='text-left tracking-normal text-lg'>
            We&apos;ve all experienced the chaos of Bluetooth technology. When turning on the
            Bluetooth feature on your mobile phone, you&apos;re bombarded with a long list of nearby
            devices, making it challenging to find the one you&apos;re seeking. But fear not, as SendContact
            has developed a patented solution. Our innovative technology measures the signal strength of each
            device in proximity to you and ensures that the closest device appears at the top of the
            Bluetooth list. This simple yet crucial feature saves valuable time and enhances your user experience,
            especially in crowded events or networking gatherings. With SendContact, the chaos of Bluetooth
            scanning is effectively managed, presenting the nearest individuals in a continuous flow on your phone.
            Just imagine meeting someone at an event and simply holding up your phones to instantly exchange
            contact information. SendContact simplifies Bluetooth connectivity, making networking a breeze.
          </p>
        </div>
        <div className='right'>
          <Image src={'/Bluetooth2.png'}
            alt='Send' className='bg-blend max-w-[400px]'
            height={200}
            width={200}
          />
        </div>
      </div>
    </section>
  );
};

export default BluetoothProblem;
