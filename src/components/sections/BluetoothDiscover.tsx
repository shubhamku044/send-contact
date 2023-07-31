import Image from 'next/image';
import React from 'react';

const BluetoothDiscover = () => {
  return (
    <section className="relative h-screen bg-gray-medium text-white">
      <Image
        src={'/Bluetooth Discovery Technology.png'}
        layout="fill"
        objectFit="cover"
        alt={''}
      />
      <div className="section flex md:flex-row flex-col md:justify-between">
        {/* <div className="left"></div> */}
        <div className=" max-w-2xl  flex-row z-[1]">
          <div className="text-white text-3xl sm:text-5xl font-bold">
            <span className="text-custom-blue">Bluetooth</span> Discovery
            <br />
            Technology
            <div className="h-1 bg-custom-blue rounded w-32 mt-4 mb-4" />
          </div>
        </div>
        <div className="text-left md:w-1/2 text-base sm:text-lg z-[1]">
          But that&apos;s not all – our app goes even further. It incorporates
          Bluetooth discovery technology, intelligently organizing a list of
          people around you. This ensures efficient information sharing by
          presenting the nearest and most relevant individuals. Our app helps
          you connect with potential customers with a SendContact virtual card,
          NFC digital business card, Bluetooth connect, and a simple way to
          share your business.
        </div>
      </div>
    </section>
  );
};

export default BluetoothDiscover;
