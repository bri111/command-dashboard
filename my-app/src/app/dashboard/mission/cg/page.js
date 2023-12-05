import React from 'react';
import prisma from '@/modules/db';
import { cookies } from 'next/headers'
import { getCookies, setCookie, deleteCookie, getCookie } from 'cookies-next';

import CG_TabSystem from '@/components/CG_TabSystem';
import Footer from '@/components/Footer';
import PieChart from '@/components/PieChart';

const Page = async () => {

  const data = await {
    equipmentData: await prisma.equipment_table.findMany(),
    medicalData: await prisma.medical_table.findMany(),
    budgetData: await prisma.budget_table.findMany(),
  }

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
    <div className="h-screen pt-8">
      <div className="text-4xl text-center font-bold">CG</div>
      <CG_TabSystem data={data} />
    </div>
  );
}

export default Page;
