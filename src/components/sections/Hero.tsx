import React from 'react';

const Hero = () => {
  return (
    <section
      style={{
        background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.50) 35.94%, rgba(0, 0, 0, 0.00) 100%), url("/hero_bg.png"), lightgray -46.031px -1.228px / 121.926% 116.15% no-repeat',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // aspectRatio: '1729/849',
        height: '849px',
      }}
    >
      <div className='section h-full flex items-center'>
        <div className='text-5xl' style={{ lineHeight: '1.2' }}>
          <h1 className='font-bold text-custom-blue'>SendContact</h1>
          <p className='text-white'>Transform the way <br />you connect, present,<br /> and sell -</p>
          <p className='text-white'>Efforlessly</p>
          <div className='h-1 bg-custom-blue rounded w-28 mt-4' />
          <button className='bg-custom-blue text-base px-14 py-2 mt-4 text-white rounded-md'>
            Sign Up Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
