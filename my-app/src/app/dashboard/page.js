import React from 'react';
// import {Card, CardBody } from "@material-tailwind/react";

const Page = () => {
  const cardInfo = [
    {name: 'Daily', href: '/dashboard/daily'},
    {name: 'Weekly', href: '/dashboard/weekly'},
    {name: 'Monthly', href: '/dashboard/monthly'},
  ]
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8 h-screen align-middle">
      <div className="mx-auto max-w2xl flex flex-row justify-evenly">
        {
          cardInfo.map((e) => (
            <a key={e.name} href={e.href} className="max-w-sm rounded overflow-hidden shadow-lg">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-center">{e.name}</div>
                <p class="text-gray-700 text-base">
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
