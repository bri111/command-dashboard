import React from 'react';
import db from '@/modules/db';
import prisma from '@/modules/db';
import Image from 'next/image';
// import {Card, CardBody } from "@material-tailwind/react";

const Page = async () => {
  const cardInfo = [
    { name: 'Mission', href: '/dashboard/mission' },
    { name: 'Periodic', href: '/dashboard/periodic' },
    { name: 'Monthly', href: '/dashboard/monthly' },
  ]
  const data = await prisma.mytable.findMany();
  console.log(data);
  return (
    <div className="bg-white  px-6 py-8 sm:py-12 lg:px-8 h-screen align-middle">
      <div>
        <Image
          src="/9th_banner2.png"
          width={1500}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <div className="py-8 mx-auto max-w2xl flex flex-row justify-evenly">
        {
          cardInfo.map((e) => (
            <a key={e.name} href={e.href} className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">{e.name}</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
            </a>
          )
          )
        }
      </div>
    </div>
  );
}

export default Page;
