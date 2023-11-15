import React, { useState, useTransition } from 'react';
import TabButton from '@/components/TabButton';
import { CG1_Open_Jobs } from './cg-g1-open-jobs/page';
import { CG1_Strength_Report } from './cg-g1-strength-report/page';

export const CG_G1 = () => {

  const CG1_TABS = [
    {
      title: "Open Jobs",
      id: "openJobs",
      content: (<CG1_Open_Jobs />),
    },
    {
      title: "Strength Report",
      id: "strengthReport",
      content: (<CG1_Strength_Report />),
    },
  ]

  const [tab, setTab] = useState("openJobs");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div className="container h-screen">
      <div className="px-4 flex flex-row justify-start">
        <TabButton
          selectTab={() => handleTabChange("openJobs")}
          active={tab === "openJobs"}
        >
          {" "}Open Jobs{" "}
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("strengthReport")}
          active={tab === "strengthReport"}
        >
          {" "}Strength Report{" "}
        </TabButton>
      </div>
      <div className="row">
        <div className="card card-side bg-base-100 shadow-xl h-screen">
          <div className="card-body">
            <h2 className="card-title">
              {CG1_TABS.find((t) => t.id === tab).content}
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}
