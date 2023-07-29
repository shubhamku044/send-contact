'use client';
import React, { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';

const Accordion = ({ question, answer }: { question?: string; answer?: string; }) => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <div className='border-b border-gray-700'>
        <div
          className='flex cursor-pointer justify-between items-center'
          onClick={() => setActive(!active)}
        >
          <h3 className='text-xl font-semibold py-2'>What is a smart card?</h3>
          <button className='text-xl font-semibold'>
            <AiOutlineDown
              className='text-custom-blue'
              style={{
                transform: !active ? 'rotate(-90deg)' : 'rotate(0deg)',
                transition: 'all 0.3s ease-in-out',
              }}
            />
          </button>
        </div>
        <p className='text-lg'
          style={{
            maxHeight: active ? '500px' : '0px',
            height: 'auto',
            padding: active ? '16px 0px' : '0px',
            transition: 'all 0.3s linear',
            overflow: 'hidden',
          }}
        >
          A smart card is a plastic card with a built-in microprocessor, used
          typically to perform financial transactions. Smart cards are a subset
          of a group of cards called chip cards. Smart cards may also provide
          strong security authentication for single sign-on (SSO) within large
          organizations.
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className='bg-gray-medium text-white'>
      <section className='section border-b-4 border-b-gray-700'>
        <h2 className='text-center text-5xl'>Frequently Asked Questions</h2>
        <div className='mt-16 gap-4 flex flex-col'>
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
        </div>
      </section>
    </div>
  );
};

export default FAQ;
