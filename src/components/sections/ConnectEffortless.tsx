"use client";

import Image from 'next/image';
import React from 'react';
import { useState, useEffect } from "react";
import { InView, useInView } from "react-intersection-observer";
import { AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai';
import { SiWetransfer } from 'react-icons/si';
import { BsDropbox, BsLinkedin } from 'react-icons/bs';
import styles from './ConnectEffortless.module.css';

const ConnectEffortless = () => {
  const [isInView, setIsInView] = useState(false);
  const [ pulseActive, setIsPulseActive ] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.6, // trigger when 80% of the element visible in the viewport
  });

  // Set the isInView state when the element enters the viewport
  useEffect(() => {
    if (inView) {
      setIsInView(true);
      setTimeout(() => {
         setIsPulseActive(true)
      }, 800)
    }
  }, [inView]);
  
  const getHandStyle = () => {
    let defaultStyle = 'bg-blend max-w-[32rem] -mt-16'
    if (isInView) return defaultStyle + " " + styles.showHand
    else return defaultStyle + " " + styles.hideHand;
  };
  
  const getCirclesStyle = () => {
    if (pulseActive)
    {
      return styles.Pulse;
    } else
    {
      return "";
    }
  }


  return (
    <section>
      <div className='section flex flex-col-reverse items-center justify-between md:flex-row '>
        <div className='right max-w-2xl flex items-start justify-start flex-col'>
          <h1 className='text-3xl sm:text-5xl font-bold' style={{ lineHeight: '1.2' }}>
            <span className='text-custom-blue'>Connect
            </span> - Effortless <br />
            Networking At Your Fingertips.
          </h1>
          <div className='h-1 bg-custom-blue rounded w-32 mt-4 mb-4' />
          <p className='text-left tracking-tight sm:text-lg'>
            With the SendContact App, networking becomes effortless. Utilizing cutting-edge NFC technology,
            you can seamlessly connect with customers and potential partners. Just a simple tap of your phone
            against another person&*apos;s NFC card or phone instantly transfers contact information, images, and
            videos. It&apos;s like having a digital business card on the go.
          </p>
          <span className='text-base my-3 text-left font-bold sm:mx-0'>
            You&apos;re also able to add  your
            social media  links as:
          </span>
          <div className='my-3 grid md:grid-cols-3 grid-cols-2 w-full items-center'>
            <div className='flex items-center space-x-3 md:justify-normal'>
              <div>< AiOutlineInstagram className='text-xl' /></div>
              <div>Instagram</div>
            </div>
            <div className='flex items-center space-x-3 space-y-3 md:justify-normal'>
              <div>< SiWetransfer className='text-xl' /></div>
              <div>WeTransfer</div>
            </div>
            <div className='flex items-center space-x-3 space-y-3 md:justify-normal'>
              <div>< AiFillYoutube className='text-xl' /></div>
              <div>Youtube</div>
            </div>
            <div className='flex items-center space-x-3 space-y-3 md:justify-normal'>
              <div>< BsLinkedin className='text-xl' /></div>
              <div>Linkedin</div>
            </div>
            <div className='flex items-center space-x-3 space-y-3 md:justify-normal'>
              <div>< BsDropbox className='text-xl' /></div>
              <div>Dropbox</div>
            </div>
          </div>
          <button className='bg-custom-blue text-base px-14 py-2 mt-4 text-white rounded-md sm:mx-0'>
            Download SendContact
          </button>
        </div>
        <div className='left relative' ref={ref}>
          <div className={styles.HandWrap}>
            <Image src={'/hand-and-card.png'}
              alt='Send' className='bg-blend max-w-[32rem] relative z-0'
              height={300}
              width={400}
            />
            <Image src={'/hand-and-mobile.png'}
              alt='Send' className={getHandStyle()}
              height={300}
              width={400}
            />
          </div>
          <div className={styles.ContainerCircles}>
            <div className={styles.StrCircle1 + " " + getCirclesStyle()}></div>
            <div className={styles.StrCircle2 + " " + getCirclesStyle()}></div>
            <div className={styles.StrCircle3 + " " + getCirclesStyle()}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectEffortless;
