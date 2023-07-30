import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const styles = {
  button: `text-white font-medium py-2 px-4 rounded-md`,
};

const Header = () => {
  return (
    <nav className='z-10 bg-gradient-to-b from-black/90 to-black/5 fixed w-full top-0 left-0'>
      <div className='flex items-center justify-between max-w-7xl mx-auto p-4'>
        <Link href={'/'}>
          <div className='relative w-40' style={{ aspectRatio: '188.6/42.1' }}>
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
        <div className='flex items-center gap-4'>
          <button className={`${styles.button} bg-custom-blue px-8`}>Sign up</button>
          <button className={`${styles.button} bg-[#242E3D] flex items-center gap-2`}>
            <AiOutlineShoppingCart className='h-4 w-4' />
            <span>Shop</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
