'use client'

import React, { useState, useTransition } from 'react';
import TabButton from '@/components/TabButton';
import { CG_G1 } from './cg-g1/page';

const classNames = (...className) => {
  return className.filter(Boolean).join(' ');
}
const Page = () => {

  const CG_TABS = [
    {
      title: "CG Main",
      id: "main",
      content: (<p>Main</p>),
    },
    {
      title: "G1",
      id: "g1",
      content: (<CG_G1/>),
    },
    {
      title: "G4",
      id: "g4",
      content: (<p>G4</p>),
    },
    {
      title: "G8",
      id: "g8",
      content: (<p>G8</p>),
    },
  ]

  // const selectedTab = (e) => {
  //   console.log(e);
  // }

  // const [selectedTab, setSelectedTab] = useState(0);

  const [tab, setTab] = useState("main");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div className="container h-screen pt-8">
      <div className="text-4xl text-center font-bold">CG</div>
      <div className="px-4 flex flex-row justify-start mt-8">
        <TabButton
          selectTab={() => handleTabChange("main")}
          active={tab === "main"}
        >
          {" "}
          CG Main{" "}
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("g1")}
          active={tab === "g1"}
        >
          {" "}
          G1{" "}
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("g4")}
          active={tab === "g4"}
        >
          {" "}
          G4{" "}
        </TabButton>
      </div>
      <div className="row">
        <div className="card card-side bg-base-100 shadow-xl h-screen m-2">
          <div className="card-body">
            <h2 className="card-title">
              {CG_TABS.find((t) => t.id === tab).content}
            </h2>
          </div>
        </div>
        {/* <div className="card card-side bg-base-100 shadow-xl h-screen m-2">
          <div className="card-body">
            <h2 className="card-title">SME</h2>
            <p>SME summary</p>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl h-screen m-2">
          <div className="card-body">
            <h2 className="card-title">TF-E</h2>
            <p>SME summary</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Page;
