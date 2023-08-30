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
            src={'/bg-not-mobile.png'}
            alt={''}
            fill={true}
            style={{ objectFit: 'cover' }}
          />
          <div
            className={styles.CirclesWrap}
          >
            <div className={styles.ContainerCircles}>
              <div className={styles.StrCircle1}></div>
              <div className={styles.StrCircle2}></div>
              <div className={styles.StrCircle3}></div>
            </div>
            <Image
              className={styles.phoneImage}
              src={'/mobile.gif'}
              alt={''}
              fill={true}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
        <div className={`${styles.BluetoothText} max-w-7xl mx-auto mt-10 gap-4 md:mt-0`}>
          <h1
            className={styles.BluetoothText__header + ' relative h-fit text-3xl sm:text-5xl text-white font-bold'}
            style={{
              lineHeight: '1.2',
              flex: 1
            }}
          >
            <span className="text-custom-blue">Bluetooth </span> Discovery Technology
          </h1>
          <p
            className={styles.BluetoothText__description + ' sm:text-lg text-base text-white'}
            style={{
              flex: 1
            }}
          >
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
  );
};

export default BluetoothDiscover;
