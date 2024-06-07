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
      {/*<Navbar />*/}
      <Page/>
      <div className="flex justify-center items-center min-h-screen">
        <iframe
          title="testingCD"
          width="1280"
          height="650"
          src="https://app.powerbi.com/reportEmbed?reportId=261fcbeb-1779-44a5-8873-da367cfc7fa9&autoAuth=true&ctid=612bb818-ec38-4e9b-884d-124123cd922c"
          frameBorder="0"
          allowFullScreen="true"
        ></iframe>
      </div>

      <Footer/>
    </>
  );
}

