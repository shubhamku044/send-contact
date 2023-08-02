'use client';
import React, { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';

const FaqData = [
  {
    id: 1,
    question: 'What is NFC and how does it work?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing'
  },
  {
    id: 2,
    question: 'How does the Smart Business Card work?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing'
  },
  {
    id: 3,
    question: 'What phones are compatible?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing'
  },
  {
    id: 4,
    question: 'What kind of files can I add to the Smart Card?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing'
  },
  {
    id: 5,
    question: 'Will I be able to add or remove files?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing'
  }
];

const Accordion = ({ question, answer }: { question?: string; answer?: string; }) => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <div className='border-b border-gray-700'>
        <div
          className='flex cursor-pointer justify-between items-center'
          onClick={() => setActive(!active)}
        >
          <h3 className='text-xl font-semibold py-2'>{question}</h3>
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
          {answer}
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
          {FaqData.map(({ id, question, answer }) => (
            <Accordion
              key={id}
              question={question}
              answer={answer}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQ;
