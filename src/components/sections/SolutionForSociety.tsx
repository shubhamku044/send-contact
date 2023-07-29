import Image from 'next/image';
import React from 'react';

const SolutionForSociety = () => {
  return (
    <section>
      <div className='section flex items-center gap-8'>
        <div className='left '>
          <Image src={'/mountain.jpeg'}
            alt='Send' className='bg-blend max-w-[32rem]'
            height={500}
            width={500}
          />
        </div>
        <div className='right text-5xl max-w-2xl flex items-start justify-start flex-col '>
          <h1 className='text-custom-blue '>The solution for Society:</h1>
          <h1 className=''>True Ownership and freedom</h1>
          <div className='h-1 bg-custom-blue rounded w-32 mt-4 mb-4' />
          <p className='text-left tracking-tight text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Incidunt aut odit sequi. Unde illum soluta tempora id vel architecto adipisci, 
            reprehenderit maiores animi aliquid nemo consectetur iure distinctio labore nostrum?
            Dolorum cumque perspiciatis esse atque iusto libero placeat fugiat iste delectus odit aliquid,
            autem dignissimos modi ipsa quam recusandae sit!
            Incidunt aut odit sequi. Unde illum soluta tempora id vel architecto adipisci, 
            reprehenderit maiores animi aliquid nemo consectetur iure distinctio labore nostrum?
            Dolorum cumque perspiciatis esse atque iusto libero placeat fugiat iste delectus odit aliquid,
            autem dignissimos modi ipsa quam recusandae sit!</p>
        </div>
      </div>
    </section>
  );
};

export default SolutionForSociety;
