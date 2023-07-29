import Image from 'next/image';
import React from 'react';

const DecentralizedOS = () => {
  return (
    <section>
      <div className='section flex items-center justify-between'>
        <div className='left '>
          <Image src={'/01-01.jpg'}
            alt='Send' className='bg-blend max-w-[32rem]'
            height={500}
            width={500}
          />
        </div>
        <div className='right max-w-2xl flex items-start justify-start flex-col'>
          <h1 className='text-5xl font-bold' style={{ lineHeight: '1.2' }}>
            The SendContact<span className='text-custom-blue'> Decentralized Operating System:
            </span> Empowering <br />
             Individuals And Businesses
          </h1>
          <div className='h-1 bg-custom-blue rounded w-32 mt-4 mb-4' />
          <p className='text-left tracking-tight text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Inventore mollitia consequuntur, repellat provident soluta harum alias facere natus praesentium
             veritatis ad, accusamus ex. Alias, sunt. Eius qui beatae, aut quisquam impedit accusamus
              dolorem libero earum eos id minus magni veritatis alias velit veniam cum quidem 
              ipsam animi illum ut rerum adipisci! Quis cum dolore, sunt dolorum quia accusamus 
              distinctio voluptates reprehenderit dolorem eius fugit nostrum quo minima excepturi,
               similique rem iusto maxime fugiat pariatur placeat. Tempora quas, voluptatibus numquam,
                repellat reprehenderit modi, iusto iure aliquam ut maxime ad. Mollitia, ea nesciunt.
                 Amet obcaecati accusantium dolore in, ratione quis totam, dolorum, ipsum veritatis ut 
                 distinctio omnis quisquam nihil. Omnis in facere nobis, sequi architecto ipsam! 
                 
          </p>
        </div>
      </div>
    </section>
  );
};

export default DecentralizedOS;
