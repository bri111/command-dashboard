'use client'

import React, { useState } from 'react';
import { EnvelopeOpenIcon } from '@heroicons/react/24/solid';
import { Bars3Icon, AdjustmentsHorizontalIcon, ChartBarIcon, CalendarIcon, PaperClipIcon, ChevronDoubleLeftIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import * as d3 from 'd3';


let csvData = [];

const readFile = () => {
  const file = document.getElementById('csv-file').files[0];
  const reader = new FileReader();
  console.log('wow');
  console.log(typeof file);
  reader.readAsText(file);
  reader.onload = (e) => {
    console.log('loaded');
    const rows = reader.result.split('\r\n');
    const split = rows.map(e => e.split(new RegExp(',(?=(?:[^\"]*\"[^\"]*\")*(?![^\"]*\"))')));
    console.log(split);
    csvData = split;
  }
}

const PieChart = () => {
  return (
    <div>
      <input id='csv-file' type='file' accept='text/csv' onChange={(e) => readFile(e)}/>
      <button onClick={readFile}>submit</button>
    </div>
  );
}

export default PieChart;