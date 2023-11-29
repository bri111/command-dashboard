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
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BudgetChart = ({data}) => {
  console.log(data)
  const options = {
    plugins: {
      datalabels: {
        formatter: (value, context) => context.datasetIndex == 1 ? `${((data.spent[context.dataIndex]/data.budget[context.dataIndex]) * 100).toFixed(2)}%` : ``,
        color: '#FF4069',
        font: {
          size: 20,
        },
        anchor: 'end',
        align: 'top',
      },
      title: {
        display: true,
        text: 'Unit Strength',
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

  // const labels = data.map(e => e.sub_1_upc_name);

  const data1 = {
    labels: data.names,
    datasets: [
      {
        label: 'Spent',
        data: data.spent,
        backgroundColor: 'blue',
      },
      {
        label: 'Remaining',
        data: data.difference,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgb(255, 0, 0)',
        borderWidth: {
          top: 3,
          left: 0,
          bottom: 0,
          right: 0,
        }
      },
    ],
  };

  return (
    <div>
      <Bar data={data1} options={options} plugins={[ChartDataLabels]} />
    </div>
  )
}

export default BudgetChart;
