import Image from 'next/image';
import React from 'react';

const BluetoothDiscover = () => {
  return (
    <div className="relative h-screen">
      <div className="section flex flex-col-reverse items-center justify-between md:flex-row">
        <Image
          src={'/Bluetooth Discovery Technology.png'}
          layout="fill"
          objectFit="cover"
          alt={''}
        />
        <div className="flex justify-between  ">
          <div>
            <h1
              className="absolute top-9 left-16 text-3xl sm:text-5xl text-white font-bold text-left"
              style={{ lineHeight: '1.2' }}
            >
              <span className="text-custom-blue">Bluetooth</span> Discovery{" "}
              <br />
              Technology
            </h1>
            <div className="absolute top-36 left-16 h-1 bg-custom-blue rounded w-36 " />
          </div>
          <div>
            <p className="text-left text-base tracking-tight text-white absolute md:top-12 top-52 left-16 md:left-auto right-0 md:right-16 w-3/4 md:w-1/2">
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
