'use client'

import React, { useState } from 'react';
import { EnvelopeOpenIcon } from '@heroicons/react/24/solid';
import { Bars3Icon, AdjustmentsHorizontalIcon, ChartBarIcon, CalendarIcon, PaperClipIcon, ChevronDoubleLeftIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

const classNames = (...className) => {
  return className.filter(Boolean).join(' ');
}

const closeCheckboxes = (expand) => {
  document.querySelectorAll("input[type='checkbox']").forEach(e => {
    e.checked = false;
    e.disabled = expand;
  });
}

const Sidebar = () => {
  const segment = useSelectedLayoutSegment();
  const [expand, setExpand] = useState(true);
  const sidebarOptions = [
    // {name: 'Dashboard', href:'/dashboard', icon: AdjustmentsHorizontalIcon, current: segment === null, subcategory: ['CG PERSTAT', 'SME', 'TF-E']},
    {
      name: 'Mission Driven', href: '/dashboard/mission', icon: ChartBarIcon, current: segment === 'mission', subcategory: [
        {
          name: 'CG',
          href: 'cg',
          target: '_self',
        },
        {
          name: 'DRU CDR',
          href: 'dru-cdr',
          target: '_self',
        },
        {
          name: 'SME',
          href: 'sme',
          target: '_self',
        },
        {
          name: 'TF-E',
          href: 'tf-e',
          target: '_self',
        }]
    },
    {
      name: 'Periodic', href: '/dashboard/periodic', icon: CalendarIcon, current: segment === 'periodic', subcategory: [
        {
          name: '5yr Plan',
          href: 'plan',
          target: '_self'
        },
        {
          name: '9MSC Phonebook',
          href: 'phonebook',
          target: '_self',
        },
        {
          name: 'CSO',
          href: 'cso',
          target: '_self',
        },
        {
          name: 'Innovations',
          href: 'innovations',
          target: '_self',
        },
        {
          name: 'OPD / LPD',
          href: 'opd-lpd',
          target: '_self',
        },
        {
          name: 'Strategic Planning',
          href: 'strategic-planning',
          target: '_self',
        },
        {
          name: 'Talent Management',
          href: 'google.com',
          target: '_blank',
        }]
    },

    // {name: 'Monthly', href:'/dashboard/monthly', icon: PaperClipIcon, current: segment === 'monthly', subcategory: ['CG PERSTAT', 'SME', 'TF-E']},
    {
      name: 'Fixed', href: '/dashboard/fixed', icon: QuestionMarkCircleIcon, current: segment === 'fixed', subcategory: [
        {
          name: '10-1',
          href: '10-1',
          target: '_self',
        },
        {
          name: 'ADPASS',
          href: 'adpass',
          target: '_self',
        },
        {
          name: 'Dashboard Instructions',
          href: 'instructions',
          target: '_self',
        },
        {
          name: 'Mission, Vision, and Priorities',
          href: 'mission-vision-priorities',
          target: '_self',
        },
        {
          name: 'Policies / SOPs',
          href: 'policies-sop',
          target: '_self',
        }]
    },
  ]
  const [isActive, setIsActive] = useState("dashboard");
  console.log(segment)

  return (
    <div className={classNames(expand ? "w-1/5" : "w-12", "top-0 sticky left-0 h-screen overflow-auto flex flex-col bg-white border-r-2 shadow-2 transition-all duration-500")}>
      {/*<div className="flex flex-col gapy-y-5 overflow-y-auto bg-white px-6 pb-4 border-r-2">*/}
      <Link href="/dashboard" className={classNames(expand ? "scale-100" : "scale-0 max-h-0", "pt-8 pb-6 transition-all text-2xl font-bold text-center")} data-tip="HI">Commanders Dashboard</Link>
      <nav className="flex flex-1 flex-col">
        <ul roles="list" className="flex flex-1 flex-col">
          {
            sidebarOptions.map((option) => (
              <li key={option.name} className="collapse collapse-arrow bg-white rounded-none">
                <input className="h-1 hover:bg-gray-700 hover:text-white" type="checkbox" />
                <div className={`${option.current ? "bg-gray-700 text-white" : "text-black"} collapse-title text-xl font-medium flex text-sm font-semi-bold ps-2 hover:bg-gray-700 hover:text-white`}>
                  <Link className={`z-10 whitespace-nowrap group flex h-full w-full text-sm align-center`} href={option.href}>
                    <option.icon className="me-2 text-gray-300 group-hover:text-white h-6 w-6 duration-200 ease-in ease-out" />
                    <div className="flex justify-center items-center">
                      {expand ? option.name : ""}
                    </div>
                  </Link>
                </div>
                <div className="collapse-content text-sm">
                  <ul className="menu menu-sm">
                    {option.subcategory.map((e) => (
                      <li key={e.name}>
                        <Link key={e.name} href={`${option.href}/${e.href}`} target={e.target}>{e.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

            ))
          }
        </ul>
        <ChevronDoubleLeftIcon className={classNames(expand ? "rotate-0" : "rotate-180", "h-8 w-8 transition-all duration-500")} onClick={() => { setExpand(!expand); closeCheckboxes(expand) }} />
      </nav>
      {/*</div>*/}
    </div>
  );
}

export default Sidebar;