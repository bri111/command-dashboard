'use client'

import React, { useState, useRef } from 'react';
import { EnvelopeOpenIcon } from '@heroicons/react/24/solid';
import { Bars3Icon, AdjustmentsHorizontalIcon, ChartBarIcon, CalendarIcon, PaperClipIcon, ChevronDoubleLeftIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import * as d3 from 'd3';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Colors } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';


ChartJS.register(ArcElement, Tooltip, Legend, Colors);

let csvData = [];


const PieChart = ({ width, height, data }) => {
  const svgRef = useRef();

  const data1 = {
    labels: data.map(e => e.name),
    datasets: [
      {
        label: `# of equipment`,
        data: data.map(e => e.value),
        borderWidth: 1,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 50,
        bottom: 50,
        left: 50,
        right: 50,
      },
    },
    plugins: {
      datalabels: {
        formatter: (value) => `${((value / 150) * 100).toFixed(2)}%`,
        color: 'black',
        font: {
          size: 20,
        },
        anchor: 'end',
        align: 'end',
      }
    }
  };

  return (
    <div>
      <div className="ml-auto mr-auto text-center">
            <div className="w-1/2">
              <Pie data={data1} options={options} plugins={[ChartDataLabels]} height={height} widht={width}/>
            </div>
      </div>
    </div>
  );
}

export default PieChart;