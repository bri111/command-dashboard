'use client'

import React, { useState, useRef } from 'react';
import { EnvelopeOpenIcon } from '@heroicons/react/24/solid';
import { Bars3Icon, AdjustmentsHorizontalIcon, ChartBarIcon, CalendarIcon, PaperClipIcon, ChevronDoubleLeftIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import * as d3 from 'd3';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const LineChart = ({ width, height, data, dates }) => {
const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Equipment Status Trends',
    },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  let tmp = {};
  console.log(data.flat());
  data.flat().forEach(e => {
    if (!tmp[e.name]) {
      tmp[e.name] = {data: [e.value]};
    } else {
      tmp[e.name]['data'].push(e.value);
    }
  })
  let dataset = [];
  Object.keys(tmp).forEach(e => {
    const set = {
      label: e,
      data: tmp[e].data,
    }
    dataset.push(set);
  })
  console.log(dataset);

const data1 = {
  labels: dates,
  datasets: dataset,
};


  return (
    <div className="ml-auto mr-auto text-center">
      <div className="w-1/2">
        <Line data={data1} options={options}/>
      </div>
    </div>
  );
}

export default LineChart;