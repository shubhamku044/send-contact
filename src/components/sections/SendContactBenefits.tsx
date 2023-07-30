'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
interface CardProps {
  title: string;
  description: string;
  icon: string;
}
const data = [
  {
    id: 1,
    title: 'abcde xyzt', icon: '/benefits/Scalable.svg', desc: 'lorem ipsum dolor sit amet lorem reso saopaf ain afaagi asf asfasfnaadfg sdfd sdfg'
  },
  {
    id: 2,
    title: 'abcde xyzt',
    icon: '/benefits/Scalable.svg',
    desc: 'lorem ipsum dolor sit amet lorem reso saopaf ain afaagi asf asfasfnaadfg sdfd sdfg'
  },
  {
    id: 3,
    title: 'abcde xyzt',
    icon: '/benefits/Scalable.svg',
    desc: 'lorem ipsum dolor sit amet lorem reso saopaf ain afaagi asf asfasfnaadfg sdfd sdfg'
  },
  {
    id: 4,
    title: 'abcde xyzt',
    icon: '/benefits/Scalable.svg',
    desc: 'lorem ipsum dolor sit amet lorem reso saopaf ain afaagi asf asfasfnaadfg sdfd sdfg'
  },
  {
    id: 5,
    title: 'abcde xyzt',
    icon: '/benefits/Scalable.svg',
    desc: 'lorem ipsum dolor sit amet lorem reso saopaf ain afaagi asf asfasfnaadfg sdfd sdfg'
  },
  {
    id: 6,
    title: 'abcde xyzt',
    icon: '/benefits/Scalable.svg',
    desc: 'lorem ipsum dolor sit amet lorem reso saopaf ain afaagi asf asfasfnaadfg sdfd sdfg'
  },
];

const SendContactBenefits = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const nextHandler = () => {
    swiperRef?.slideNext();
  };
  const preHandler = () => {
    swiperRef?.slidePrev();
  };
  return (
    <div className='bg-gray-dark text-white'>
      <section className='section border-b-4 border-b-gray-700'>
        <h2 className='text-center text-5xl font-bold'>Sendcontact Benefits</h2>
        <div className='h-1 bg-custom-blue w-28 mx-auto mt-12' />
        <div className='mt-10'>
          <>
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              centeredSlides={true}
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
                900: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },

                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              className="mySwiper"
            >
              {data.map((item, id) => {
                return (
                  <div className='item' key={id}>
                    <SwiperSlide
                      className="swiper__slide"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <div className='w-72 p-10 rounded-lg flex flex-col items-center'
                        style={{
                          background: 'linear-gradient(135deg, #1A202A 0%, #101319 100%)',
                          height: '26rem'
                        }}
                      >
                        <Image src={item.icon} alt='icon' width={140} height={140} />
                        <h3 className='text-xl font-bold mt-4'>{item.title}</h3>
                        <p className='text-center text-gray-400 mt-2'>{item.desc}</p>
                      </div>
                    </SwiperSlide>
                  </div>
                );
              })}
              <div className='btn flex w-[100%] justify-center gap-6 my-8'>
                <div className='swiper__arrow h-[40px] w-[40px] bg-gray-light hover:bg-custom-blue duration-300 rounded-full flex justify-center items-center' onClick={preHandler} >
                  <AiOutlineArrowLeft />
                </div>
                <div className='swiper__arrow h-[40px] w-[40px] bg-gray-light hover:bg-custom-blue duration-300 rounded-full flex justify-center items-center' onClick={nextHandler} >
                  <AiOutlineArrowRight />
                </div>
              </div>
            </Swiper>
          </>

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
