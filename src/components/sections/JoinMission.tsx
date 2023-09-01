import Image from 'next/image';
import React from 'react';

const JoinMission = () => {
  return (
    <section
      style={{
        background: 'linear-gradient(0deg, #242E3D 0%, #161B23 100%)'
      }}
      className='bg-gray-medium text-white'
    >
      <div className='section flex flex-col justify-around items-center md:flex-row'>
        <div className='left max-w-[600px]'>
          <h1 style={{ lineHeight: '1.2' }} className='capitalize text-xl md:text-2xl lg:text-5xl font-bold'>
            <span className='text-custom-blue'>
              Join Our Mission
            </span>&nbsp;
            For a Better World
          </h1>
          <div className='underline h-1 w-36 bg-custom-blue my-2'></div>
          <p className='text-left text-lg'>
            In conclusion, SendContact is more than just a tool; it&apos;s a gift to humanity.
            We believe that true success lies in the contributions we make to the world,
            rather than mere wealth or intellect. By embracing SendContact, you&apos;re joining
            our mission to create a greater good for humankind. We invite you to share our
            vision and become a part of the movement towards true ownership, freedom, and control.
            Together, let&apos;s unlock the full potential of communication and empower individuals
            and businesses to thrive.
          </p>
        </div>
        <div className='right'>
          <div className='images relative md:h-72' style={{ aspectRatio: '672/441' }}>
            <Image className='' src="/images/join_mission.jpeg" alt='' fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinMission;
