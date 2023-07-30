'use client';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
const data = [
  {
    id: 1,
    title: 'abcde xyzt',
    role: 'author',
    ratings: 'start',
    desc: 'lorem ipsum dolor sit amet lorem reso saopaf ain afaagi asf asfasfnaadfg sdfd sdfg lorem ipsum dolor sit amet lorem reso saopaf ain afaagi asf asfasfnaadfg sdfd sdfg'
  },
  {
    id: 2,
    title: 'abcde xyzt',
    role: 'author',
    ratings: 'start',
    desc: 'lorem ipsum dolor sit amet lorem reso saopaf ain afaagi asf asfasfnaadfg sdfd sdfg lorem ipsum dolor sit amet lorem reso saopaf ain afaagi asf asfasfnaadfg sdfd sdfg'
  },
  {
    id: 3,
    title: 'abcde xyzt',
    role: 'author',
    ratings: 'start',
    desc: 'lorem ipsum dolor sit amet lorem reso saopaf ain afaagi asf asfasfnaadfg sdfd sdfg lorem ipsum dolor sit amet lorem reso saopaf ain afaagi asf asfasfnaadfg sdfd sdfg'
  },
  {
    id: 4,
    title: 'abcde xyzt',
    role: 'author',
    ratings: 'start',
    desc: 'lorem ipsum dolor sit amet lorem reso saopaf ain afaagi asf asfasfnaadfg sdfd sdfg lorem ipsum dolor sit amet lorem reso saopaf ain afaagi asf asfasfnaadfg sdfd sdfg'
  },
  {
    id: 5,
    title: 'abcde xyzt',
    role: 'author',
    ratings: 'start',
    desc: 'lorem ipsum dolor sit amet lorem reso saopaf ain afaagi asf asfasfnaadfg sdfd sdfg lorem ipsum dolor sit amet lorem reso saopaf ain afaagi asf asfasfnaadfg sdfd sdfg'
  },
  {
    id: 6,
    title: 'abcde xyzt',
    role: 'author',
    ratings: 'start',
    desc: 'lorem ipsum dolor sit amet lorem reso saopaf ain afaagi asf asfasfnaadfg sdfd sdfg lorem ipsum dolor sit amet lorem reso saopaf ain afaagi asf asfasfnaadfg sdfd sdfg'
  },
  {
    id: 7,
    title: 'abcde xyzt',
    role: 'author',
    ratings: 'start',
    desc: 'lorem ipsum dolor sit amet lorem reso saopaf ain afaagi asf asfasfnaadfg sdfd sdfg lorem ipsum dolor sit amet lorem reso saopaf ain afaagi asf asfasfnaadfg sdfd sdfg'
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
  return (
    <div className='text-white'
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
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
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
                    <div className='flex flex-col items-center w-72 h-96 p-10 rounded-lg'
                      style={{
                        background: 'linear-gradient(135deg, #1A202A 0%, #101319 100%)',
                      }}
                    >
                      <div className='top flex gap-6'>
                        <div className='flex items-center justify-center'>
                          <Image
                            className='rounded-full'
                            src={'/user.jpeg'} alt='user'
                            // fill={true} 
                            width={80}
                            height={80}
                          />
                        </div>
                        <div className='details flex flex-col'>
                          <h3 className='text-xl font-bold mt-4'>{item.title}</h3>
                          <p>{item.role}</p>
                          <Image src={'/star.jpg'} height={20} width={50} alt='ratings' />
                        </div>
                      </div>
                      <p className='text-center text-white mt-6'>{item.desc}</p>
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
