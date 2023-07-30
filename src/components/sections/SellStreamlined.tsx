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
          <p className='text-left tracking-tight sm:text-lg'>
            Selling products or services online has never been easier with the SendContact App.
            Within minutes, you can add an item for sale, set up a checkout button, and establish
            your online shop. Say goodbye to the need for web developers or complex payment setups.
            We bring powerful sales tools right to your fingertips, streamlining the entire sales
            process. Additionally, we offer an exclusive payment process called &quot;Bluetooth Pay,&quot;
            which allows you to make and receive payments using Bluetooth technology. With Bluetooth Pay,
            you can enjoy a convenient and secure payment experience. Whether you&apos;re a small business
            or a budding entrepreneur, SendContact simplifies your online sales journey.
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
        <div className='left'>
          <Image src={'/phone-and-hand.png'}
            alt='Send' className='bg-blend max-w-[32rem]'
            height={280}
            width={380}
          />
        </div>
      </div>
    </section>
  );
};

export default SellStreamlined;
