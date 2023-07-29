import Image from 'next/image';
import React from 'react';

const BluetoothProblem = () => {
  return (
    <section className='bg-gray-medium text-white'>
      <div className='section flex items-center justify-evenly'>
        <div className='left text-5xl max-w-2xl flex items-start justify-start flex-col '>
          <h1 className='text-custom-blue '> <span className='text-custom-blue'>The Problem</span> With Bluetooth</h1>
          <h1 className=''>Technology And Our Solution</h1>
          <div className='h-1 bg-custom-blue rounded w-32 mt-4 mb-4' />
          <p className='text-left tracking-normal text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Incidunt aut odit sequi. Unde illum soluta tempora id vel architecto adipisci, 
            reprehenderit maiores animi aliquid nemo consectetur iure distinctio labore nostrum?
            Dolorum cumque perspiciatis esse atque iusto libero placeat fugiat iste delectus odit aliquid,
            autem dignissimos modi ipsa quam recusandae sit!
            Incidunt aut odit sequi. Unde illum soluta tempora id vel architecto adipisci, 
            reprehenderit maiores animi aliquid nemo consectetur iure distinctio labore nostrum?
            Dolorum cumque perspiciatis esse atque iusto libero placeat fugiat iste delectus odit aliquid,
            autem dignissimos modi ipsa quam recusandae sit!</p>
        </div>
        <div className='right'>
          <Image src={'/Bluetooth2.png'}
            alt='Send' className='bg-blend max-w-[400px]'
            height={200}
            width={200}
            // objectFit="contain" layout="fill"
          />
        </div>
      </div>
    </section>
  );
};

export default BluetoothProblem;
