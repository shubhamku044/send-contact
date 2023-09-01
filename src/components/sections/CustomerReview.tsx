'use client';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

const data = [
  {
    id: 1,
    title: 'Michel P.',
    role: 'CEO, Grown Management',
    ratings: 4.5,
    desc: '\“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.\”',
    imgSrc: '/users/michael.svg'
  },
  {
    id: 2,
    title: 'Sarah H.',
    role: 'Designer',
    ratings: 5,
    desc: '\“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.\”',
    imgSrc: '/users/sarah.svg'
  },
  {
    id: 3,
    title: 'John Brown',
    role: 'Architect',
    ratings: 4.5,
    desc: '\“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.\”',
    imgSrc: '/users/john.svg'
  },
  {
    id: 4,
    title: 'Sarah H.',
    role: 'Designer',
    ratings: 5,
    desc: '\“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.\”',
    imgSrc: '/users/sarah.svg'
  },
  {
    id: 5,
    title: 'Michel P.',
    role: 'CEO, Grown Management',
    ratings: 4.5,
    desc: '\“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.\”',
    imgSrc: '/users/michael.svg'
  },
  {
    id: 6,
    title: 'John Brown',
    role: 'Architect',
    ratings: 4.5,
    desc: '\“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.\”',
    imgSrc: '/users/john.svg'
  },
  {
    id: 7,
    title: 'Sarah H.',
    role: 'Designer',
    ratings: 5,
    desc: '\“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.\”',
    imgSrc: '/users/sarah.svg'
  },
];

const CustomerReview = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const nextHandler = () => {
    swiperRef?.slideNext();
  };
  const preHandler = () => {
    swiperRef?.slidePrev();
  };

  const genRatings = (ratings: number) => {
    const arr = [];
    const full = Math.floor(ratings);
    const half = ratings - full;
    for (let i = 0; i < full; i++) {
      arr.push('full');
    }
    if (half > 0) {
      arr.push('half');
    }
    return arr;
  };

  return (
    <div 
      className='text-white'
      style={{
        background: 'linear-gradient(180deg, #242E3D 0%, #161B23 100%)'
      }}
    >
      <section className='section'>
        <h1 className='text-5xl text-center mb-8'>Customer Reviews</h1>
        <>
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              750: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              996: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
          >
            {data.map((item) => {
              return (
                <div className='item' key={item.id}>
                  <SwiperSlide
                    className="swiper__slide"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <div className='flex flex-col items-center h-80 p-10 rounded-lg'
                      style={{
                        background: 'linear-gradient(135deg, #1A202A 0%, #101319 100%)',
                        width: '28rem'
                      }}
                    >
                      <div className='top flex gap-6'>
                        <div className='flex items-center'>
                          <Image
                            className='rounded-full'
                            src={item.imgSrc} alt='user'
                            width={80}
                            height={80}
                          />
                        </div>
                        <div className='details flex flex-col'>
                          <h3 className='text-xl font-bold mt-4'>{item.title}</h3>
                          <p>{item.role}</p>
                          <div className='flex gap-1'>
                            {genRatings(item.ratings).map((item, id) =>
                              item === 'full' ?
                                <BsStarFill key={id} className='text-[#FBBC04]' /> :
                                <BsStarHalf key={id} className='text-[#FBBC04]' />
                            )}
                          </div>
                        </div>
                      </div>
                      <p className='text-white mt-6'>{item.desc}</p>
                    </div>
                  </SwiperSlide>
                </div>
              );
            })}
            <div className='btn flex w-[100%] justify-center gap-6 my-8'>
              <div className="swiper__arrow h-[40px] w-[40px] bg-gray-light hover:bg-custom-blue duration-300 rounded-full flex justify-center items-center" onClick={preHandler}>
                <AiOutlineArrowLeft />
              </div>
              <div className="swiper__arrow h-[40px] w-[40px] bg-gray-light hover:bg-custom-blue duration-300 rounded-full flex justify-center items-center" onClick={nextHandler}>
                <AiOutlineArrowRight />
              </div>
            </div>
          </Swiper>
        </>
      </section>
    </div>
  );
};

export default CustomerReview;
