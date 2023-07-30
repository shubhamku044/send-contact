import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SellStreamlined = () => {
  return (
    <section>
      <div className='section flex flex-col-reverse items-center justify-between md:flex-row'>
        <div className='right max-w-2xl flex items-start justify-start flex-col'>
          <h1 className='text-3xl sm:text-5xl font-bold' style={{ lineHeight: '1.2' }}>
            <span className='text-custom-blue'>Sell
            </span> - Streamlined Online <br />
             Sales Made Simple
          </h1>
          <div className='h-1 bg-custom-blue rounded w-32 mt-4 mb-4' />
          <p className='text-left text-base sm:text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Inventore mollitia consequuntur, repellat provident soluta harum alias facere natus praesentium
             veritatis ad, accusamus ex. Alias, sunt. Eius qui beatae, aut quisquam impedit accusamus
              dolorem libero earum eos id minus magni veritatis alias velit veniam cum quidem 
              ipsam animi illum ut rerum adipisci! Quis cum dolore, sunt dolorum quia accusamus 
              distinctio voluptates reprehenderit dolorem eius fugit nostrum quo minima excepturi,
               similique rem iusto maxime fugiat pariatur placeat. Tempora quas, voluptatibus numquam,
          </p>
          <button className='bg-custom-blue text-base px-14 py-2 mt-4 text-white rounded-md mx-auto sm:mx-0'>
            Download SendContact
          </button>
          <span className='text-base my-3 text-center mx-auto sm:mx-0'>Download SendContact App</span>
          <div className='w-[100%] sm:w-auto social media flex flex-col items-center gap-4 sm:gap-4  my-3 sm:flex-row '>
            <Link href={'/'}>
              <div>
                <Image src={'/App_Store.svg'} alt='App store icon' width={163} height={48} />
              </div>
            </Link>
            <Link href={'/'}>
              <div>
                <Image src={'/Google_Play.svg'} alt='App store icon' width={163} height={48} />
              </div>
            </Link></div>
        </div>
        <div className='left '>
          <Image src={'/phone-and-hand.png'}
            alt='Send' className='bg-blend max-w-[32rem]'
            height={300}
            width={400}
          />
        </div>
      </div>
    </section>
  );
};

export default SellStreamlined;
