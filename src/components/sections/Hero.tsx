import React from 'react';

const Hero = () => {
  return (
    <section
      className='hero'
    >
      <div className='section h-full flex items-start md:items-center'>
        <div className='text-3xl mt-20 md:mt-20 md:text-5xl px-4' style={{ lineHeight: '1.2' }}>
          <h1 className='font-bold text-custom-blue'>SendContact</h1>
          <p className='text-white'>Transform the way <br />you connect, present,<br /> and sell -</p>
          <p className='text-white'>Efforlessly</p>
          <div className='h-1 bg-custom-blue rounded w-28 mt-4' />
          <button className='bg-custom-blue text-base px-14 py-2 mt-4 text-white rounded-md animated-btn'>
            Sign Up Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
