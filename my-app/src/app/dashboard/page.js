import React from 'react';
import db from '@/modules/db';
import prisma from '@/modules/db';
import Image from 'next/image';
import BudgetChart from '@/components/BudgetChart';
import GeoMap from '@/components/GeoMap';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
// import {Card, CardBody } from "@material-tailwind/react";

const Page = async () => {

  const cardInfo = [
    { name: 'Mission', href: '/dashboard/mission' },
    { name: 'Periodic', href: '/dashboard/periodic' },
    { name: 'Monthly', href: '/dashboard/monthly' },
  ]

  return (
    // <div className="bg-white px-2 py-8 sm:py-4 lg:px-6 h-screen align-middle">
    <div className="bg-white h-screen align-middle">
      <Navbar />
      <div className="container mx-auto">
        <h1 className='text-2xl text-center p-2'>
          Mission
        </h1>
        <p className='text-center px-8'>
          The 9th MSC, as an operational reserve in the USINDOPACOM Area of Operations, delivers key reserve component capabilities, maintains a forward posture, is prepared to rapidly mobilize, and provides command and control for Homeland Defense/DSCA, enabling the Theater Army to assure allies, compete with adversaries, respond in crisis, and win in conflict.
        </p>
        <div className='container pt-4'>
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full flex justify-center items-center">
              <img src="/9MSC-6.JPG" className="w-1/3" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide5" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full flex justify-center items-center">
              <img src="/9MSC-1.JPG" className="w-1/2" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full flex justify-center items-center">
              <img src="/9MSC-2.JPG" className="w-1/2" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full flex justify-center items-center">
              <img src="/9MSC-4.JPG" className="w-1/2" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide5" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full flex justify-center items-center">
              <img src="/9MSC-5.JPG" className="w-1/2" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </div>
  );
}

export default Page;
