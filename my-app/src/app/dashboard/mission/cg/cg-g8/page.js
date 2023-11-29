'use client'

import Footer from '@/components/Footer';
import React, { useState, useRef, useEffect } from 'react';
import BudgetChart from '@/components/BudgetChart';

const CG_G8 = async ({data}) => {
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
        total += parseFloat(arr[i][j].amount);
      }
      tmp.push(total);
    }
    let spent = Array.from(tmp);
    // totals.map((e, i) => totals[i] = totals[i] - tmp[i]);
    return {
      spent: tmp,
      budget: totals,
      names: names,
      difference: spent.map((e, i) => spent[i] = totals[i] - tmp[i]),
    }
  }

  return (
    <div className="container">
      <div className="text-2xl text-center"> Budget Data </div>
      <BudgetChart data={parseBudgetData(data)} />
    </div>
  )
}

export default CG_G8;