'use client'

import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import TabButton from '@/components/TabButton';

//CG page imports
import { CG_G1 } from '@/app/dashboard/mission/cg/cg-g1/page';
// import Page from '@/app/dashboard/mission/dru-cdr/page';
import G4 from '@/app/dashboard/mission/cg/g4/page';
// import CG_G4 from '@/app/dashboard/mission/cg/cg-g4/page';
import CG_G8 from '@/app/dashboard/mission/cg/cg-g8/page';
import CG_Medical from '@/app/dashboard/mission/cg/cg-medical/page';

const CG_TabSystem = ({ data }) => {

  const CG_TABS = [
    {
      title: "CG Main",
      id: "main",
      content: (<p>Main</p>),
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
      content: (<CG_G8 data={data.budgetData}/>),
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
    <div className="container h-screen pt-8 px-4">
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
  );
}

export default CG_TabSystem;
