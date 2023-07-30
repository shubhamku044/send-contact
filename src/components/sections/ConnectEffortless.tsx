import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai';
import { SiWetransfer } from 'react-icons/si';
import { BsDropbox, BsLinkedin } from 'react-icons/bs';


const ConnectEffortless = () => {
  return (
    <section>
      <div className='section flex flex-col-reverse items-center justify-between md:flex-row'>
        <div className='right max-w-2xl flex items-start justify-start flex-col'>
          <h1 className='text-3xl sm:text-5xl font-bold' style={{ lineHeight: '1.2' }}>
            <span className='text-custom-blue'>Connect
            </span> - Effortless <br />
            Networking At Your Fingertips.
          </h1>
          <div className='h-1 bg-custom-blue rounded w-32 mt-4 mb-4' />
          <p className='text-left tracking-tight sm:text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam delectus sed aliquam adipisci alias aut, voluptatem corrupti, labore temporibus possimus dolorum nihil debitis, praesentium nostrum iure laborum. A commodi voluptates molestiae optio. Molestiae officia, harum laborum nostrum rerum consequatur nam dicta amet illum veniam esse incidunt, deleniti, sequi maiores eligendi ipsam praesentium ut? Fuga explicabo quis ut repellat molestias provident!
          </p>
          <span className='text-base my-3 text-center font-bold mx-auto sm:mx-0'>You're also able to add  your 
           social media  links as:</span>
           <div className='my-3 grid md:grid-cols-3 grid-cols-1 w-full items-center'>
            <div className='flex items-center space-x-3 md:justify-normal justify-center'>
              <div>< AiOutlineInstagram className='text-xl' /></div>
              <div>Instagram</div>
            </div>
            <div className='flex  items-center space-x-3 md:justify-normal justify-center'>
              <div>< SiWetransfer className='text-xl' /></div>
              <div>WeTransfer</div>
            </div>
            <div className='flex items-center space-x-3 md:justify-normal justify-center'>
              <div>< AiFillYoutube className='text-xl' /></div>
              <div>Youtube</div>
            </div>
            <div className='flex items-center space-x-3 md:justify-normal justify-center'>
              <div>< BsLinkedin className='text-xl' /></div>
              <div>Linkedin</div>
            </div>
            <div className='flex items-center space-x-3 md:justify-normal justify-center'>
              <div>< BsDropbox className='text-xl' /></div>
              <div>Dropbox</div>
            </div>
           </div>
          <button className='bg-custom-blue text-base px-14 py-2 mt-4 text-white rounded-md mx-auto sm:mx-0'>
            Download SendContact
          </button>
        </div>
        <div className='left '>
          <Image src={'/hand-and-card.png'}
            alt='Send' className='bg-blend max-w-[32rem]'
            height={300}
            width={400}
          />
          <Image src={'/hand-and-mobile.png'}
            alt='Send' className='bg-blend max-w-[32rem] -mt-16'
            height={300}
            width={400}
          />
        </div>
      </div>
    </section>
  );
};

export default ConnectEffortless;
