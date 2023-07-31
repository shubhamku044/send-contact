'use client';
import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const styles = {
  button: `text-white font-medium py-2 px-4 rounded-md`,
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='relative'>
      <nav className='z-10 bg-gray-dark md:bg-gradient-to-b md:from-black/90 md:to-black/5 fixed w-full top-0 left-0'>
        <div className='flex items-center justify-between max-w-7xl mx-auto p-4'>
          <Link href={'/'}>
            <div className='relative w-32 sm:w-40' style={{ aspectRatio: '188.6/42.1' }}>
              <Image
                src={'/logo.svg'}
                alt='Send contact'
                className=''
                fill={true}
              />
            </div>
          </Link>
          <div className='hidden lg:block text-white'>
            <ul className='flex gap-2'>
              <Link href={'/'}>
                <li className='lg:px-4 p-2'>Home</li>
              </Link>
              <Link href={'/'}>
                <li className='lg:px-4 p-2'>Shop</li>
              </Link>
              <Link href={'/'}>
                <li className='lg:px-4 p-2'>Connect</li>
              </Link>
              <Link href={'/'}>
                <li className='lg:px-4 p-2'>Present</li>
              </Link>
              <Link href={'/'}>
                <li className='lg:px-4 p-2'>Sell</li>
              </Link>
              <Link href={'/'}>
                <li className='lg:px-4 p-2'>Blog</li>
              </Link>
              <Link href={'/'}>
                <li className='lg:px-4 p-2'>Contact</li>
              </Link>
              <Link href={'/'}>
                <li className='lg:px-4 p-2'>Login</li>
              </Link>
            </ul>
          </div>
          <div className='flex items-stretch gap-4'>
            <button className={`${styles.button} bg-custom-blue px-8`}>Sign up</button>
            <button className={`${styles.button} bg-[#242E3D] flex items-center gap-2`}>
              <AiOutlineShoppingCart className='h-6 w-6 sm:h-4 sm:w-4' />
              <span className='hidden sm:inline'>Shop</span>
            </button>
          </div>
        </div>
      </nav>
      <div className='w-40 h-72 bg-blue-300 absolute top-0 left-0 lg:hidden z-20'>

      </div>
    </div>
  );

};

export default Header;
