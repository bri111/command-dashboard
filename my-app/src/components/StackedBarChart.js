'use client'
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StackedBarChart = ({data}) => {
  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const labels = data.map(e => e.sub_1_upc_name);

  const data1 = {
    labels,
    datasets: [
      {
        label: 'Medically Ready',
        data: data.map(e => e.data.shift()),
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'TPU DRC 3',
        data: data.map(e => e.data.shift()),
        backgroundColor: 'rgb(75, 192, 192)',
      },
      {
        label: 'ARG DRC 3',
        data: data.map(e => e.data.shift()),
        backgroundColor: 'rgb(53, 162, 235)',
      },
    ],
  };

  return (
    <div>
      <Bar data={data1} options={options} />

    </div>
  )
}

export default StackedBarChart;
