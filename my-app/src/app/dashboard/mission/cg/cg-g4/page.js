'use client'

import React from 'react';
import PieChart from '@/components/PieChart';
import LineChart from '@/components/LineChart';
import GeoMap from '@/components/GeoMap';


const CG_G4 = ({data}) => {

  let dates = []
  data.forEach((e) => {
    const tmpDate = e.date ? e.date.toISOString() : new Date('2023-11-01').toISOString();
    if (!dates.includes(tmpDate)) {
      dates.push(tmpDate)
    }
  });

  dates = dates.map(e => e.split('T')[0])

  const parseData = (data) => {
    let tmp3 = [];
    let dates = []
    data.forEach((e) => {
      const tmpDate = e.date ? e.date.toISOString() : new Date('2023-11-01').toISOString();
      if (!dates.includes(tmpDate)) {
        dates.push(tmpDate)
      }
    });

    for (let i = 0; i < dates.length; i++) {
      const tmpResult = {}
      for (let j = 0 + (i * 150); j < 150 + (i * 150); j++) {
        tmpResult[data[j].operationalstatus] ? tmpResult[data[j].operationalstatus] += 1 : tmpResult[data[j].operationalstatus] = 1;
      }
      tmp3.push(tmpResult);
    }
    for (let i = 0; i < tmp3.length; i++) {
      tmp3[i] = Object.entries(tmp3[i]).map(e => {
        return {
          name: e[0],
          value: e[1],
        };
      });
    }
    return tmp3;
  }

  return (
    <div className="container h-screen pt-4">
      <div className="text-3xl text-center font-bold">CG G4</div>
      <div className="row">
        <div className="card card-side bg-base-100 shadow-xl h-1/2 m-2">
          <div className="card-body">
            <PieChart width={600} height={600} data={parseData(data)[3]} />
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl h-full m-2">
          <div className="card-body">
            <LineChart data={parseData(data)} dates={dates} />
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl h-1/2 m-2">
          <div className="card-body">
            <GeoMap data={parseData(data)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CG_G4;
