import Image from 'next/image';
import React from 'react';

const BluetoothDiscover = () => {
  return (
    <div className="relative h-screen">
      <div className="section flex flex-col-reverse items-center justify-between md:flex-row">
        <Image
          src={'/coposicao-chi.png'}
          layout="fill"
          objectFit="cover"
          alt={''}
        />
        <Image
          src="/bluetooth wave.png"
          width={900}
          height={500}
          alt={''}
          className="mt-80 ml-28 z-[100]"
        />
        <Image
          src={'/mobile.png'}
          width={1200}
          height={500}
          alt={''}
          className="z-[100] absolute left-20"
        />
        <Image
          src={'/13 pro - 4.png'}
          width={105}
          height={100}
          alt={''}
          className="z-[90] -mt-8 ml-[6px] absolute left-20"
        />
        <Image
          src={'/fg.jpg'}
          width={105}
          height={100}
          alt={''}
          className="z-[90] mt-7 absolute right-[75px]"
        />
        <Image
          src={'/fg.jpg'}
          width={51}
          height={50}
          alt={''}
          className="z-[90] absolute left-[424px] mt-[98px]"
        />
        <Image
          src={'/fg.jpg'}
          width={40}
          height={35}
          alt={''}
          className="z-[90] absolute left-[540px] mt-[137px]"
        />
        <Image
          src={'/fg.jpg'}
          width={50}
          height={35}
          alt={''}
          className="z-[90] absolute right-[397px] mt-[58px]"
        />
        <Image
          src={'/fg.jpg'}
          width={40}
          height={35}
          alt={''}
          className="z-[90] absolute right-[645px] mt-[12px]"
        />
        <Image
          src={'/fg.jpg'}
          width={40}
          height={35}
          alt={''}
          className="z-[90] absolute right-[530px] mt-[110px]"
        />

        <div className="absolute top-10 w-full text-center">
          <div className="section right max-w-2xl flex items-start justify-start flex-col">
            <h1
              className="absolute top-10 text-3xl sm:text-5xl text-white font-bold text-left"
              style={{ lineHeight: '1.2' }}
            >
              <span className="text-custom-blue">Bluetooth</span> Discovery{' '}
              <br />
              Technology
            </h1>
            <div className="h-1 bg-custom-blue rounded w-36 mt-14" />
            <p className="text-left text-base tracking-tight text-white absolute top-12 right-16 w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              delectus sed aliquam adipisci alias aut, voluptatem corrupti,
              labore temporibus possimus dolorum nihil debitis, praesentium
              nostrum iure laborum. A commodi voluptates molestiae optio.
              Molestiae officia, harum laborum nostrum rerum consequatur nam
              dicta amet illum veniam esse incidunt, deleniti, sequi maiores
              eligendi ipsam praesentium ut? Fuga explicabo quis ut repellat
              molestias provident!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BluetoothDiscover;
