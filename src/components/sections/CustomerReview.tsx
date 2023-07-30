'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import {AiOutlineArrowRight } from 'react-icons/ai';
import {AiOutlineArrowLeft} from 'react-icons/ai';
const data=[{id:1, 
  title:'abcde xyzt', role:'author',ratings:'start',desc:'lorem ipsum dolor sit amet lorem reso saopaf ain afaagi asf asfasfnaadfg sdfd sdfg'},
{id:1, 
  title:'abcde xyzt',
  role:'author',
  ratings:'start',
  desc:'lorem ipsum dolor sit amet lorem reso saopaf ain afaagi asf asfasfnaadfg sdfd sdfg'},
{id:2, 
  title:'abcde xyzt',
  role:'author',
  ratings:'start',
  desc:'lorem ipsum dolor sit amet lorem reso saopaf ain afaagi asf asfasfnaadfg sdfd sdfg'},
{id:3, 
  title:'abcde xyzt',
  role:'author',
  ratings:'start',
  desc:'lorem ipsum dolor sit amet lorem reso saopaf ain afaagi asf asfasfnaadfg sdfd sdfg'},
{id:4, 
  title:'abcde xyzt',
  role:'author',
  ratings:'start',
  desc:'lorem ipsum dolor sit amet lorem reso saopaf ain afaagi asf asfasfnaadfg sdfd sdfg'},
{id:5, 
  title:'abcde xyzt',
  role:'author',
  ratings:'start',
  desc:'lorem ipsum dolor sit amet lorem reso saopaf ain afaagi asf asfasfnaadfg sdfd sdfg'},
{id:6, 
  title:'abcde xyzt',
  role:'author',
  ratings:'start',
  desc:'lorem ipsum dolor sit amet lorem reso saopaf ain afaagi asf asfasfnaadfg sdfd sdfg'},
];

const CustomerReview = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const nextHandler = () => {
    swiperRef?.slideNext();
  };
  const preHandler = () => {
    swiperRef?.slidePrev();
  };
  return (
    <div className='bg-gray-medium text-white'>
    
      <section className='section'>
        <h1 className='text-5xl text-center mb-8'>Customer Reviews</h1>
        <>
          <Swiper
            onSwiper={(swiper) => setSwiperRef(swiper)}
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            // modules={[Pagination]}
            className="mySwiper"
          >
            {data.map((item, id) => {
              return (
                <div className='item' key={id}>
                  <SwiperSlide className="swiper__slide">
                    <div className='flex flex-col items-center w-72 p-10 rounded-lg'
                      style={{
                        background: 'linear-gradient(135deg, #1A202A 0%, #101319 100%)',
                        height: '22rem'
                      }}
                    >
                      <div className='top flex gap-6'>
                        <div className='relative h-100 w-100'>
                          <Image 
                            className='' 
                            src={'/user.jpeg'} alt='user' 
                            fill={true}
                          />
                        </div>
                        <div className='details flex flex-col'>
                          <h3 className='text-xl font-bold mt-4'>{item.title}</h3>
                          <p>{item.role }</p>
                          <Image src={'/star.jpg'} height={20} width={50} alt='ratings'/>
                        </div>
                      </div>
                      <p className='text-center text-gray-400 mt-6'>{item.desc}</p>
                    </div>
                  </SwiperSlide>
                </div>
              );
            })}
            <div className='btns flex w-[100%] justify-center gap-6 my-8'>
              <div className="swiper__arrow h-[40px] w-[40px] bg-gray-light rounded-full flex justify-center items-center" onClick={preHandler}>
                <AiOutlineArrowLeft/>
              </div>
              <div className="swiper__arrow h-[40px] w-[40px] bg-custom-blue rounded-full flex justify-center items-center" onClick={nextHandler}>
                <AiOutlineArrowRight/>
              </div>
            </div>
          </Swiper>
        </>
      </section>
    </div>
  );
};

export default CustomerReview;
