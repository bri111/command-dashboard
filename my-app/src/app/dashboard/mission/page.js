'use client'

import React, { useState } from 'react';

const classNames = (...className) => {
  return className.filter(Boolean).join(' ');
}
const Page = () => {
  const tableStuff = [
    {
      title: "CG PERSTAT",
      header: ['column1', 'column2', 'column3', 'column4',],
      row: [
        ['CG PERSTAT stuff1', 'CG PERSTAT stuff2', 'CG PERSTAT stuff3', 'CG PERSTATstuff4'],
        ['CG PERSTAT stuff1', 'CG PERSTAT stuff2', 'CG PERSTAT stuff3', 'CG PERSTATstuff4'],
        ['CG PERSTAT stuff1', 'CG PERSTAT stuff2', 'CG PERSTAT stuff3', 'CG PERSTATstuff4'],
        ['CG PERSTAT stuff1', 'CG PERSTAT stuff2', 'CG PERSTAT stuff3', 'CG PERSTATstuff4'],
      ]
    },
    {
      title: "SME",
      header: ['column1', 'column2', 'column3', 'column4',],
      row: [
        ['SME stuff1', 'SME stuff2', 'SME stuff3', 'SME stuff4'],
        ['SME stuff1', 'SME stuff2', 'SME stuff3', 'SME stuff4'],
        ['SME stuff1', 'SME stuff2', 'SME stuff3', 'SME stuff4'],
        ['SME stuff1', 'SME stuff2', 'SME stuff3', 'SME stuff4'],
      ]
    },
    {
      title: "TF-E",
      header: ['column1', 'column2', 'column3', 'column4',],
      row: [
        ['TF-E stuff1', 'TF-E stuff2', 'TF-E stuff3', 'TF-E stuff4'],
        ['TF-E stuff1', 'TF-E stuff2', 'TF-E stuff3', 'TF-E stuff4'],
        ['TF-E stuff1', 'TF-E stuff2', 'TF-E stuff3', 'TF-E stuff4'],
        ['TF-E stuff1', 'TF-E stuff2', 'TF-E stuff3', 'TF-E stuff4'],
      ]
    },

  ]


  // const selectedTab = (e) => {
  //   console.log(e);
  // }

  const [selectedTab, setSelectedTab] = useState(0);


  return (
    <div className="container h-screen pt-8">
      <div className="text-4xl text-center font-bold py-4">Mission Driven</div>
      <div className="row">
        <div className="card card-side bg-base-100 shadow-xl h-screen m-2">
          <div className="card-body">
            <h2 className="card-title">CG</h2>
            <p>A nice summary</p>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl h-screen m-2">
          <div className="card-body">
            <h2 className="card-title">SME</h2>
            <p>SME summary</p>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl h-screen m-2">
          <div className="card-body">
            <h2 className="card-title">TF-E</h2>
            <p>TF-E summary</p>
          </div>
        </div>
      </div>
      <div className="row mt-5">
      </div>
    </div>
  );
}

export default Page;
