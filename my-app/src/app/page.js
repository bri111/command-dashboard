import React from 'react';
import Image from 'next/image';
import PieChart from '@/components/PieChart';
import Page from '@/app/dashboard/page';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import NavContext from 'react-bootstrap/NavContext';

export default function Home() {
  return (
    <>
      <Navbar />
      <Page />
      <Footer />
    </>
  );
}

