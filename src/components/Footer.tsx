import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='text-white'>
      <div
        style={{
          background: 'linear-gradient(135deg, #1A202A 0%, #101319 100%)',
        }}
      >
        <div className='max-w-7xl mx-auto px-12 sm:px-6 lg:px-4 py-16 flex flex-col lg:flex-row justify-between'>
          <div>
            <div>
              <Image src={'/logo.svg'} width={200} height={38} alt='logo' />
            </div>
            <div className='mt-4 lg:mt-12 flex items-center gap-4'>
              <p>
                Follow Us
              </p>
              <ul className='flex gap-1 items-center'>
                <li className='p-2'>
                  <Link target='_blank' href={'https://www.facebook.com/people/SendContact/61550819955406/'}>
                    <AiFillFacebook className='w-6 h-6' />
                  </Link>
                </li>
                {/* <li className='p-2'>
                  <Link target='_blank' href={'/'}>
                    <AiFillInstagram className='w-6 h-6' />
                  </Link>
                </li> */}
                <li className='p-2'>
                  <Link target='_blank' href={'https://www.youtube.com/@SendContact_'}>
                    <AiFillYoutube className='w-6 h-6' />
                  </Link>
                </li>
                <li className='p-2'>
                  <Link target='_blank' href={'https://twitter.com/SendContact_'}>
                    <AiOutlineTwitter className='w-6 h-6' />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mt-12 lg:mt-0 justify-between gap-12'>
            {/* <div>
              <h5 className='font-semibold text-xl'>Products</h5>
              <ul className='mt-4 text-[#BEC3CA] gap-1 flex flex-col'>
                <li>Art Paper Smart Card</li>
                <li>Plastic Smart Card</li>
                <li>Bamboo Smart Card</li>
                <li>Metal Smart Card</li>
                <li>Smart Card Paper Sheet</li>
              </ul>
            </div> */}
            <div>
              <ul className='font-semibold text-xl flex flex-col gap-2'>
                {/* <li>How it Works</li>
                <li>About Us</li> */}
                <li><Link href={'#faq'}>Frequently Asked Questions</Link></li>
                <li><Link href={'mailto:contact@sendcontact.com'} target='_blank'>Contact Us</Link></li>
                <li className='block md:hidden'>Download</li>
                <li className='block md:hidden'>
                  <Link href={'/'}>
                    <div>
                      <Image src={'/App_Store.svg'} alt='App store icon' width={163} height={48} />
                    </div>
                  </Link>
                </li>
                <li className='block md:hidden'>
                  <Link href={'https://apps.apple.com/us/app/sendcontact/id963951753'}>
                    <div>
                      <Image src={'/Google_Play.svg'} alt='App store icon' width={163} height={48} />
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='md:flex hidden flex-col gap-4'>
              <p className='font-semibold text-lg'>Download Sendcontact App</p>
              <Link target='_blank' href={'/'}>
                <div>
                  <Image src={'/App_Store.svg'} alt='App store icon' width={163} height={48} />
                </div>
              </Link>
              {/* <Link href={'/'}>
                <div>
                  <Image src={'/Google_Play.svg'} alt='App store icon' width={163} height={48} />
                </div>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div
        className='py-8 bg-gray-dark flex items-center justify-center'
        style={{
          borderTop: '1px solid #242E3D'
        }}
      >
        <div className='text-base flex items-center gap-2'>
          <FaRegCopyright className='w-4 h-4' /> Sendcontact 2023.
        </div>
      </div>
    </footer >
  );
};

export default Footer;
