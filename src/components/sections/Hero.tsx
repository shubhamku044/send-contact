import React from 'react';

const Hero = () => {
  return (
    <section
      className='hero'
    >
      <div className='section h-full flex items-center justify-center'>
        <div className='text-3xl mt-20 md:mt-20 md:text-5xl px-4 flex flex-col items-center' style={{ lineHeight: '1.2' }}>
          <h1 className='font-black sm:font-bold text-custom-blue text-4xl sm:text-5xl md:text-6xl'>SendContact App</h1>
          <p className='text-white text-center'>Where Networking <br />Becomes Magical</p>
          <div className='h-1 bg-custom-blue rounded w-28 mt-8' />
          <button className='bg-custom-blue text-base px-14 py-2 mt-8 text-white rounded-md animated-btn'>
            Sign Up Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
