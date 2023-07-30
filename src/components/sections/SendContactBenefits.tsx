import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  icon: string;
}

const Card = ({ title, description, icon }: CardProps) => {
  return (
    <div className='flex flex-col items-center w-72 p-10 rounded-lg'
      style={{
        background: 'linear-gradient(135deg, #1A202A 0%, #101319 100%)',
        height: '26rem'
      }}
    >
      <Image src={icon} alt='icon' width={140} height={140} />
      <h3 className='text-xl font-bold mt-4'>{title}</h3>
      <p className='text-center text-gray-400 mt-2'>{description}</p>
    </div>
  );
};

const SendContactBenefits = () => {
  return (
    <div className='bg-gray-dark text-white'>
      <section className='section border-b-4 border-b-gray-700'>
        <h2 className='text-center text-5xl font-bold'>Sendcontact Benefits</h2>
        <div className='h-1 bg-custom-blue w-28 mx-auto mt-12' />
        <div className='justify-between flex flex-col lg:flex-row mt-10'>
          <Card
            title={'Easy to use'}
            description={
              'Our app streamlines your workflow and saves you time on repetitive tasks like lead generation and content management.'
            }
            icon={'/benefits/Scalable.svg'}
          />
          <Card
            title={'Easy to use'}
            description={
              'Our app streamlines your workflow and saves you time on repetitive tasks like lead generation and content management.'
            }
            icon={'/benefits/Scalable.svg'}
          />
          <Card
            title={'Easy to use'}
            description={
              'Our app streamlines your workflow and saves you time on repetitive tasks like lead generation and content management.'
            }
            icon={'/benefits/Scalable.svg'}
          />
          <Card
            title={'Easy to use'}
            description={
              'Our app streamlines your workflow and saves you time on repetitive tasks like lead generation and content management.'
            }
            icon={'/benefits/Scalable.svg'}
          />
        </div>
        <p className='text-center text-gray-400 mt-8 text-2xl'>
          Whether you&apos;re a new business owner or an experienced entrepreneur, our app is the perfect solution
          for all your connection, presentation, and selling needs.
        </p>
      </section>
    </div>
  );
};

export default SendContactBenefits;
