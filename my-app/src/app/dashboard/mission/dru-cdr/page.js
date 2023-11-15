import React from 'react';
import PieChart from '@/components/PieChart';
import prisma from '@/modules/db';
import LineChart from '@/components/LineChart';
import GeoMap from '@/components/GeoMap';

const Page = async () => {
  const data = await prisma.equipment_table.findMany();

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
    console.log(dates)

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
    <div className="container h-screen p-4">
      <div className="text-center font-bold">Mission Driven</div>
      <div className="row">
        <p>A nice summary</p>
        <PieChart width={400} height={400} data={parseData(data)[3]} />
        <LineChart data={parseData(data)} dates={dates}/>
        <GeoMap data={parseData(data)} />
      </div>
      </div>
  );
}

export default Page;
