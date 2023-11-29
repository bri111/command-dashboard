import React from 'react';
import PieChart from '@/components/PieChart';
import prisma from '@/modules/db';
import LineChart from '@/components/LineChart';
import GeoMap from '@/components/GeoMap';
import StackedBarChart from '@/components/StackedBarChart';
import BudgetLineChart from '@/components/BudgetChart';

const Page = async () => {
  const data = await prisma.equipment_table.findMany();
  const medicalData = await prisma.medical_table.findMany();
  const budgetData = await prisma.budget_table.findMany();

  let dates = []
  data.forEach((e) => {
    const tmpDate = e.date ? e.date.toISOString() : new Date('2023-11-01').toISOString();
    if (!dates.includes(tmpDate)) {
      dates.push(tmpDate)
    }
  });

  dates = dates.map(e => e.split('T')[0])

  const parseMedicalData = (data) => {
    let unitDate = [];
    let unitNames = []
    let units = [];
    data.forEach(e => {
      units.push({
        sub_1_upc_name: e.sub_1_upc_name,
        data: [e.unit_medically_ready_mrc_1_2, e.tpu_drc_3, e.arg_drc_3],
      });
    });
    for (let i = 0; i < 3; i++) {
      unitDate.push(units.slice(0 + (i * 12), 12 + (i * 12)))
    }
    unitNames = Array.from(new Set(units.map(e => e.sub_1_upc_name)));

    return unitDate ;
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
  const parseBudgetData = (data) => {
    let arr = []
    while (data.length > 0) {
      arr.push(data.splice(0, 36));
    }
    arr.forEach(e => e.splice(12,24));
    console.log(arr[0].reduce((e, a) => e.amount + a));
    let tmp = [];
    let names = Array.from(new Set(arr.map(e => e[0].type)));
    let totals = Array.from(new Set(arr.map(e => parseFloat(e[0].budget))));
    for (let i = 0; i < arr.length; i++) {
      let total = 0;
      for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j].amount);
        total += parseFloat(arr[i][j].amount);
      }
      tmp.push(total);
    }
    console.log(names);
    console.log(totals);
    return {
      spent: tmp,
      budget: totals,
      names: names,
    }
  }


  return (
    <div className="container h-screen p-4">
      <div className="text-center font-bold">Mission Driven</div>
      <div className="row">
        <p>A nice summary</p>
        <PieChart width={400} height={400} data={parseData(data)[3]} />
        <LineChart data={parseData(data)} dates={dates}/>
        <GeoMap data={parseData(data)} />
        <StackedBarChart data={parseMedicalData(medicalData)[2]}/>
        <BudgetLineChart data={parseBudgetData(budgetData)} />
      </div>
      </div>
  );
}

export default Page;
