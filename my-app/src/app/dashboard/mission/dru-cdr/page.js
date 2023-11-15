import React from 'react';
import PieChart from '@/components/PieChart';
import prisma from '@/modules/db';

const classNames = (...className) => {
  return className.filter(Boolean).join(' ');
}
const Page = async () => {
  const data = await prisma.equipment_table.findMany();

  const parseData = (data) => {
    let result = {};
    let tmp = [];
    data.forEach((e) => {
      result[e.operationalstatus] ? result[e.operationalstatus] += 1 : result[e.operationalstatus] = 1;
    });
    // Object.entries(result).forEach(e => console.log(e));
    tmp = Object.entries(result).map((e) => {
      return {
        name: e[0] !== 'null' ? e[0] : 'N/A',
        value: e[1],
      }
    });
    return tmp
  }


  return (
    <div className="container h-screen p-4">
      <div className="text-center font-bold">Mission Driven</div>
      <div className="row">
          <div className="card card-side bg-base-100 shadow-xl h-screen m-2">
            <div className="card-body">
              <h2 className="card-title">DRU CDR</h2>
              <p>A nice summary</p>
              <PieChart width={400} height={400} data={parseData(data)}/>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Page;
