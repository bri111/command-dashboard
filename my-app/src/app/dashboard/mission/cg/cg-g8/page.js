'use client'

import React, { useState, useRef, useEffect } from 'react';
import prisma from '@/modules/db';

const CG_G8 = async ({data}) => {

  // const data = await prisma.budget_table.findMany();
  console.log(data);

  return (
    <div className="container">
      <div className="text-2xl text-center"> Budget Data </div>
    </div>
  )
}

export default CG_G8;