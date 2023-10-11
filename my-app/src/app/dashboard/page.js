import React from 'react';
// import {Card, CardBody } from "@material-tailwind/react";

const Page = () => {
  const cardInfo = [
    {name: 'Mission', href: '/dashboard/mission'},
    {name: 'Periodic', href: '/dashboard/periodic'},
    {name: 'Monthly', href: '/dashboard/monthly'},
  ]
  return (
    <div className="bg-white  px-6 py-24 sm:py-32 lg:px-8 h-screen align-middle">
      <button className="btn">HELLO</button>
      <div className="card">HELLO
        <div className="card-body shadow-xl">
          <h2 className="card-title">TITLE</h2>
          <p>Card body</p>
          <div className="card-action">
            <div className="btn btn-primary">NICE</div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w2xl flex flex-row justify-evenly">
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
