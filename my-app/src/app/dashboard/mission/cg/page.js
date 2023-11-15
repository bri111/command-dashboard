import React from 'react';
import prisma from '@/modules/db';

import CG_TabSystem from '@/components/CG_TabSystem';

const classNames = (...className) => {
  return className.filter(Boolean).join(' ');
}

const Page = async () => {

  const data = await prisma.equipment_table.findMany();
  // console.log(data);

  return (
    <div className="container h-screen pt-8">
      <div className="text-4xl text-center font-bold">CG</div>
      <CG_TabSystem data={data} />
    </div>
  );
}

export default Page;
