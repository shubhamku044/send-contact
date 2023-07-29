import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ShowCasingProduct = () => {
  return (
    <section className='bg-gray-medium text-white'>
      <div className='section flex items-center justify-around'>
        <div className='left'>
          <Image src={'/phone-and-hand.png'}
            alt='Send' className='max-w-[500px]'
            height={300}
            width={400}
            style={{transform:'scaleX(-1)', transformOrigin:'top'} }
          />
        </div>
        <div className='right text-5xl max-w-2xl flex items-start justify-start flex-col  '>
          <h1 className='text-white'><span className='text-custom-blue'>Present-</span>Showcasing Your</h1>
          <h1 className=''>Best Self And Products</h1>
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
          <Link href={`#`}>
            <button className='bg-custom-blue text-base px-14 py-2 mt-4 text-white rounded-md'>
            lorem Ipsum mainjyts
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShowCasingProduct;
