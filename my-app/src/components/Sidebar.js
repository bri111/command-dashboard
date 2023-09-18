'use client'

import React, { useState } from 'react';
import { EnvelopeOpenIcon } from '@heroicons/react/24/solid';
import { Bars3Icon, AdjustmentsHorizontalIcon, ChartBarIcon, CalendarIcon, PaperClipIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

const classNames = (...className) => {
  return className.filter(Boolean).join(' ');
}


const Sidebar = () => {

  
  const segment = useSelectedLayoutSegment();
  const sidebarOptions = [
    {name: 'Dashboard', href:'/dashboard', icon: AdjustmentsHorizontalIcon, current: segment === null},
    {name: 'Daily', href:'/dashboard/daily', icon: ChartBarIcon, current: segment === 'analytics'},
    {name: 'Weekly', href:'/dashboard/weekly', icon: CalendarIcon, current: segment === 'analytics'},
    {name: 'Monthly', href:'/dashboard/monthly', icon: PaperClipIcon, current: segment === 'analytics'},
    {name: 'Daily', href:'/dashboard/daily', icon: ChartBarIcon, current: segment === 'analytics'},
  ]
  const [isActive, setIsActive] = useState("dashboard");
  console.log(segment)

  return (
    <div className="hidden fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
      <div className="flex grow flex-col gapy-y-5 overflow-y-auto bg-white px-6 pb-4 border-r-2">
        <div className="flex h-16 items-center">
          <a href="/dashboard" className="text-3xl font-bold mr-1">Commanders Dashboard</a  >
        </div>
        <nav className="flex flex-1 flex-col">
          <ul roles="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul roll="list" className="-mx-2 space-y-l">
                {
                  sidebarOptions.map((option) => (
                    <li key={option.name}>
                      <Link onClick={() => setIsActive(option.name)} href={option.href} className={classNames(option.current ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white hover:bg-gray-700", "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semi-bold duration-200 ease-in ease-out")}>
                        <option.icon className="text-gray-300 group-hover:text-white h-6 w-6 shrink-0 duration-200 ease-in ease-out" />
                        {option.name}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;