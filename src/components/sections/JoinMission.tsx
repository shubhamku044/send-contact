import Image from 'next/image';
import React from 'react';

const JoinMission = () => {
  return (
    <section className='bg-gray-medium text-white'>
      <div className='section flex flex-col justify-around items-center md:flex-row'>
        <div className='left max-w-[600px]'>
          <h1 className='uppercase text-xl md:text-2xl lg:text-3xl font-semibold'> <span className='text-custom-blue'>Join Our Mission
          </span> For a Better World</h1>
          <div className='underline h-[3px] w-[130px] bg-custom-blue my-2'></div>
          <p className='text-left tracking-tighter'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Temporibus voluptates est laboriosam, eveniet totam sit quibusdam similique facere! Saepe nihil
             repellat nisi esse id corrupti rerum perferendis eligendi delectus itaque debitis tenetur maxime 
             voluptatibus adipisci fugiat quos expedita consequatur velit, blanditiis commodi molestiae nostrum! 
             Magni unde maiores quibusdam incidunt numquam!</p>
        </div>
        <div className='right  '>
          <div className='images relative pt-[100px]'>
            <Image className='absolute top-[10px] md:right-28 w-[300px] sm:w-[300px]'  src="/images/send_contact.jpeg" alt='' width={300} height={300}/>
            <Image className='w-[300px] sm:w-[350px]' src="/images/join_mission.jpeg" alt='' width={350} height={350}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinMission;
