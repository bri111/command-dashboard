import React from 'react';
import db from '@/modules/db';
import prisma from '@/modules/db';
import Image from 'next/image';
// import {Card, CardBody } from "@material-tailwind/react";

const Page = async () => {

  const data = await prisma.mytable.findMany();
  console.log(data);
  return (
    <div className="bg-white px-6 py-8 sm:py-4 lg:px-8 h-screen align-middle">
      <Image
        src="/9th_banner2.png"
        width={1500}
        height={500}
        alt="Picture of the author"
      />
      <div className="container mx-auto pt-8">
        <h1 className='text-2xl text-center p-2'>
          Mission
        </h1>
        <p className='text-center'>
          The 9th MSC, as an operational reserve in the USINDOPACOM Area of Operations, delivers key reserve component capabilities, maintains a forward posture, is prepared to rapidly mobilize, and provides command and control for Homeland Defense/DSCA, enabling the Theater Army to assure allies, compete with adversaries, respond in crisis, and win in conflict.
        </p>
      </div>
    </div>
  );
}

export default Page;
