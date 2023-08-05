'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const data = [
  {
    id: 1,
    title: 'Time-saving',
    icon: '/benefits/Time-saving.svg',
    desc: 'Our app streamlines your workflow and saves you time on repetitive tasks like lead generation and content management.'
  },
  {
    id: 2,
    title: 'User-friendly',
    icon: '/benefits/User-friendly.svg',
    desc: "Our app is easy to use, even if you don't have technical expertise."
  },
  {
    id: 3,
    title: 'Cost-effective',
    icon: '/benefits/Cost-effective.svg',
    desc: 'Our app saves your time and money without the need to pay for a website or developer to maintain it, so you can focus on growing your business.'
  },
  {
    id: 4,
    title: 'Scalable',
    icon: '/benefits/Scalable.svg',
    desc: 'Our app is designed to grow with your business and adapt to your changing needs. With the ability to add multiple virtual cards, mini-websites, and payment links'
  },
  {
    id: 5,
    title: 'Time-saving',
    icon: '/benefits/Time-saving.svg',
    desc: 'Our app streamlines your workflow and saves you time on repetitive tasks like lead generation and content management.'
  },
  {
    id: 6,
    title: 'User-friendly',
    icon: '/benefits/User-friendly.svg',
    desc: "Our app is easy to use, even if you don't have technical expertise."
  }
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
