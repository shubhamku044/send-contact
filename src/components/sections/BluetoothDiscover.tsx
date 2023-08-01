'use client';

import Image from 'next/image';
import React from 'react';

import styles from './BluetoothDiscover.module.css';

const BluetoothDiscover = () => {

  return (
    <div className={styles.BluetoothDiscover}>
      <div className="section flex flex-col-reverse items-center justify-between md:flex-row">
        <div className='overflow-hidden'>
          <Image
            className={styles.image}
            src={'/bg.gif'}
            objectFit="cover"
            alt={''}
            fill={true}
          />
          <div
            className={styles.CirclesWrap}
          >
            <div className={styles.ContainerCircles}>
              <div className={styles.StrCircle1}></div>
              <div className={styles.StrCircle2}></div>
              <div className={styles.StrCircle3}></div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <h1
              className="absolute top-9 left-16 text-3xl sm:text-5xl text-white font-bold text-left"
              style={{ lineHeight: '1.2' }}
            >
              <span className="text-custom-blue">Bluetooth</span> Discovery{' '}
              <br />
              Technology
            </h1>
            <div className="absolute top-36 left-16 h-1 bg-custom-blue rounded w-36 " />
          </div>
          <div>
            <p className="text-left text-base tracking-tight text-white absolute md:top-12 top-52 left-16 md:left-auto right-0 md:right-16 w-3/4 md:w-1/2">
              But that&apos;s not all – our app goes even further. It incorporates
              Bluetooth discovery technology, intelligently organizing a list of
              people around you. This ensures efficient information sharing by
              presenting the nearest and most relevant individuals. Our app
              helps you connect with potential customers with a SendContact
              virtual card, NFC digital business card, Bluetooth connect, and a
              simple way to share your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BluetoothDiscover;
