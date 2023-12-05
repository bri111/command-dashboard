'use client'

import React, { useState, useTransition, useEffect } from 'react';
import Link from 'next/link';
import TabButton from '@/components/TabButton';
import Footer from './Footer';
import { getCookies, setCookie, deleteCookie, getCookie } from 'cookies-next';

//CG page imports
import { CG_G1 } from '@/app/dashboard/mission/cg/cg-g1/page';
// import Page from '@/app/dashboard/mission/dru-cdr/page';
import G4 from '@/app/dashboard/mission/cg/g4/page';
// import CG_G4 from '@/app/dashboard/mission/cg/cg-g4/page';
import CG_G8 from '@/app/dashboard/mission/cg/cg-g8/page';
import CG_Medical from '@/app/dashboard/mission/cg/cg-medical/page';
import PieChart from '@/components/PieChart';
import GeoMap from '@/components/GeoMap';
import LineChart from '@/components/LineChart';

const CG_TabSystem = ({ data }) => {
  const [pie, setPie] = useState(false);
  const [map, setMap] = useState(false);
  const [line, setLine] = useState(false);
  useEffect(() => {
    let cookie = getCookie('pieChart');
    setPie(cookie);
    cookie = getCookie('mapChart');
    setMap(cookie)
    cookie = getCookie('lineChart');
    setLine(cookie)
  }, [pie, map, line])

  let dates = []
  data.equipmentData.forEach((e) => {
    const tmpDate = e.date ? e.date.toISOString() : new Date('2023-11-01').toISOString();
    if (!dates.includes(tmpDate)) {
      dates.push(tmpDate)
    }
  });

  const parseData = (data) => {
    let tmp3 = [];
    let dates = []
    data.forEach((e) => {
      const tmpDate = e.date ? e.date.toISOString() : new Date('2023-11-01').toISOString();
      if (!dates.includes(tmpDate)) {
        dates.push(tmpDate)
      }
    });

    for (let i = 0; i < dates.length; i++) {
      const tmpResult = {}
      for (let j = 0 + (i * 150); j < 150 + (i * 150); j++) {
        tmpResult[data[j].operationalstatus] ? tmpResult[data[j].operationalstatus] += 1 : tmpResult[data[j].operationalstatus] = 1;
      }
      tmp3.push(tmpResult);
    }
    for (let i = 0; i < tmp3.length; i++) {
      tmp3[i] = Object.entries(tmp3[i]).map(e => {
        return {
          name: e[0],
          value: e[1],
        };
      });
    }
    return tmp3;
  }

  const CG_TABS = [
    {
      title: "CG Main",
      id: "main",
      content: (
        <div className='container h-screen'>
          <div className='text-3xl text-center'>
            Favorites
            {pie === 'true' ?
              <PieChart data={parseData(data.equipmentData)[3]} width={400} height={400} /> : ''
            }
            {map === 'true' ?
              <GeoMap data={{}} /> : ''
            }
            {line === 'true' ?
              <LineChart data={parseData(data.equipmentData)} dates={dates} /> : ''
            }
            <Footer />
          </div>
        </div>
      ),
    },
    {
      title: "G1",
      id: "g1",
      content: (<CG_G1 />),
    },
    {
      title: "G4",
      id: "g4",
      // content: (<CG_G4 data={data.equipmentData} />),
      content: (<G4 data={data.equipmentData} />),
    },
    {
      title: "G8",
      id: "g8",
      content: (<CG_G8 data={data.budgetData} />),
    },
    {
      title: "Medical",
      id: "medical",
      content: (<CG_Medical data={data.medicalData} />),
    },
  ]

  const [tab, setTab] = useState("main");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div className='h-screen'>
      <div className="container pt-8 px-4">
        <div className="px-4 flex flex-row justify-start mt-8">
          <TabButton
            selectTab={() => handleTabChange("main")}
            active={tab === "main"}
          >
            {" "}CG Main{" "}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("g1")}
            active={tab === "g1"}
          >
            {" "}G1{" "}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("g4")}
            active={tab === "g4"}
          >
            {" "}G4{" "}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("g8")}
            active={tab === "g8"}
          >
            {" "}G8{" "}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("medical")}
            active={tab === "medical"}
          >
            {" "}Medical{" "}
          </TabButton>
        </div>
        <div className="row">
          <h2 className="card-title">
            {CG_TABS.find((t) => t.id === tab).content}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CG_TabSystem;
