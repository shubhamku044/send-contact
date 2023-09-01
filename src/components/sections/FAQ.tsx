// @ts-nocheck
'use client';
import React, { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';

const FaqData = [
  {
    id: 1,
    question: 'What is NFC?',
    answer: 'NFC stands for Near Field Communication, and it is a short-range wireless technology that allows two devices to exchange data when they are brought close together, typically within a few centimeters. NFC is commonly used for contactless payments, mobile payments, data transfer between devices, and other applications that require a quick and secure way of exchanging information'
  },
  {
    id: 2,
    question: 'How does the Smart NFC business card work?',
    answer: 'An NFC business card works similarly to a traditional paper business card but with the added benefit of Near Field Communication (NFC) technology. Instead of exchanging physical cards, an NFC business card allows you to share your contact information, website links, social media profiles, and other relevant details with someone by simply tapping your NFC-enabled smartphone or device on their NFC-enabled device'
  },
  {
    id: 3,
    question: 'What phones are compatible with NFC technology?',
    answer: `For iPhones, NFC has been available from iPhone 7 and later models. For Android phones, NFC has become a standard feature in most devices, especially those released in recent years. It's typically included in a wide range of Android phones, from budget-friendly options to high-end flagship devices.To check if your Android phone has NFC capabilities, you can follow these steps:
1 - Go to the "Settings" app on your Android phone.
2 - Look for "Connected devices," "Wireless & networks," or a similar section in the settings menu.
3- Within that section, you should find an option labeled "NFC" or "Near Field Communication."
4 - Toggle the NFC switch on or off to enable or disable NFC.
5 - If the "NFC" option is present in your settings, it means your phone supports NFC technology, and you can use it for various purposes like contactless payments, data transfer, or interacting with NFC tags.`
  },
  {
    id: 13,
    question: 'Do others need an app to access my NFC card?',
    answer: 'No, others can access your NFC card without needing an app.',
  },
  {
    id: 15,
    question: 'Can I update my NFC card after I given it to others?',
    answer: 'Yes, you can have as many cards as you like.'
  },
  {
    id: 18,
    question: 'Can I reuse my NFC card?',
    answer: 'Yes, you can reuse and change its content anytime you like.'
  },
  {
    id: 4,
    question: 'Can I use the NFC card like wireless USB flash drive?',
    answer: 'Yes, you can use it like a USB drive. Others can tap it to their phone and download your content to their phone.'
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
        <p className='text-lg text-gray-400'
          style={{
            maxHeight: active ? '500px' : '0px',
            height: 'auto',
            padding: active ? '16px 0px' : '0px',
            transition: 'all 0.3s linear',
            overflow: 'hidden',
            whiteSpace: 'pre-wrap',
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
    <div
      className='bg-gray-medium text-white'
    >
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
