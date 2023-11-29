import React from 'react';
import prisma from '@/modules/db';

import CG_TabSystem from '@/components/CG_TabSystem';
import Footer from '@/components/Footer';

const Page = async () => {

  const data = {
    equipmentData: await prisma.equipment_table.findMany(),
    medicalData: await prisma.medical_table.findMany(),
    budgetData: await prisma.budget_table.findMany(),
  }

  return (
    <div className="h-screen pt-8">
      <div className="text-4xl text-center font-bold">CG</div>
      <CG_TabSystem data={data} />
    </div>
  );
}

export default Page;
