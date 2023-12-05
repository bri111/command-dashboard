import React from 'react'
import BarChart from '@/components/BarChart'
import { getCookies, setCookie, deleteCookie, getCookie } from 'cookies-next';

export const CG1_Strength_Report = () => {

  // FY2021
  let FY2021 = [
    {
      sub1: '7QSAA',
      asgnPercent: 117.0
    },
    {
      sub1: '7UEAA',
      asgnPercent: 91.4
    },
    {
      sub1: '82CAA',
      asgnPercent: 117.6
    },
    {
      sub1: '8DFAA',
      asgnPercent: 86.3
    },
    {
      sub1: '8G4AA',
      asgnPercent: 113.0
    },
    {
      sub1: '8HWAA',
      asgnPercent: 107.5
    },
    {
      sub1: 'RMAAA',
      asgnPercent: 0.0
    },
    {
      sub1: 'RR3AA',
      asgnPercent: 89.0
    },
    {
      sub1: 'Z4XAA',
      asgnPercent: 99.3
    },
    {
      sub1: 'Z5TAA',
      asgnPercent: 93.7
    }
  ]

  let labels21 = []
  let percent21 = []

  // FY 2022
  let FY2022 = [
    {
      sub1: '36KAA',
      asgnPercent: 0.0
    },
    {
      sub1: '7QSAA',
      asgnPercent: 101.1
    },
    {
      sub1: '7UEAA',
      asgnPercent: 91.9
    },
    {
      sub1: '82CAA',
      asgnPercent: 113.9
    },
    {
      sub1: '8DFAA',
      asgnPercent: 79.5
    },
    {
      sub1: '8G4AA',
      asgnPercent: 120.3
    },
    {
      sub1: '8HWAA',
      asgnPercent: 113.2
    },
    {
      sub1: '8S9AA',
      asgnPercent: 0.0
    },
    {
      sub1: 'RMAAA',
      asgnPercent: 88.0
    },
    {
      sub1: 'RR3AA',
      asgnPercent: 120.5
    },
    {
      sub1: 'Z4XAA',
      asgnPercent: 105.9
    },
    {
      sub1: 'Z5TAA',
      asgnPercent: 100.9
    }
  ]

  let labels22 = []
  let percent22 = []

  //FY2023
  let FY2023 = [
    {
      sub1: '36KAA',
      asgnPercent: 0.0
    },
    {
      sub1: '7QSAA',
      asgnPercent: 90.3
    },
    {
      sub1: '7UEAA',
      asgnPercent: 107.8
    },
    {
      sub1: '82CAA',
      asgnPercent: 113.9
    },
    {
      sub1: '8DFAA',
      asgnPercent: 95.9
    },
    {
      sub1: '8G4AA',
      asgnPercent: 92.1
    },
    {
      sub1: '8HWAA',
      asgnPercent: 110.3
    },
    {
      sub1: 'RMAAA',
      asgnPercent: 87.3
    },
    {
      sub1: 'RR3AA',
      asgnPercent: 175.9
    },
    {
      sub1: 'Z4XAA',
      asgnPercent: 95.8
    },
    {
      sub1: 'Z5TAA',
      asgnPercent: 113.7
    }
  ]

  let labels23 = []
  let percent23 = []


  FY2021.map((item) => labels21.push(item.sub1))
  FY2021.map((item) => percent21.push(item.asgnPercent))
  FY2022.map((item) => labels22.push(item.sub1))
  FY2022.map((item) => percent22.push(item.asgnPercent))
  FY2023.map((item) => labels23.push(item.sub1))
  FY2023.map((item) => percent23.push(item.asgnPercent))

  const data21 = {
    labels: labels21,
    datasets: [
      {
        label: 'FY2021 Strength Report (%)',
        data: percent21,
        backgroundColor: [
          'grey'
        ]
      }
    ]
  }

  const data22 = {
    labels: labels22,
    datasets: [
      {
        label: 'FY2022 Strength Report (%)',
        data: percent22,
        backgroundColor: [
          'grey'
        ],
      }
    ]
  }

  const data23 = {
    labels: labels23,
    datasets: [
      {
        label: 'FY2023 Strength Report (%)',
        data: percent23,
        backgroundColor: [
          'blue'
        ],
      }
    ]
  }

  return (
    <div className="container h-screen">
      <div className="text-2xl text-center"> Strength Report Data </div>
      <div className='grid grid-cols-2 gap-3'>
        <div className="card card-side shadow-xl">
          <div className="card-body flex">
            <div className="justify-end rating">
              <input onClick={() => setCookie('strengthChart', getCookie('strengthChart') !== 'true')} type="checkbox" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
            </div>
            <BarChart data={data23} />
          </div>
        </div>
        <div className="card card-side shadow-xl">
          <div className="card-body flex">
            <div className="justify-end rating">
              <input onClick={() => setCookie('strengthChart', getCookie('strengthChart') !== 'true')} type="checkbox" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
            </div>
            <BarChart data={data22} />
          </div>
        </div>
        <div className="card card-side shadow-xl">
          <div className="card-body flex">
            <div className="justify-end rating">
              <input onClick={() => setCookie('strengthChart', getCookie('strengthChart') !== 'true')} type="checkbox" name="rating-2" className="mask mask-star-2" />
            </div>
            <BarChart data={data21} />
          </div>
        </div>
      </div>
    </div>
  )
}