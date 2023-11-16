import React from 'react';
import StackedBarChart from '@/components/StackedBarChart';

const CG_Medical = async ({data}) => {

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
    console.log(unitDate);

    return unitDate ;
  }

  return (
    <div className="container h-screen pt-4 px-8">
      <div className="text-3xl text-center font-bold">Medical Readiness</div>
      <StackedBarChart data={parseMedicalData(data)[2]}/>
    </div>
  )
}

export default CG_Medical;