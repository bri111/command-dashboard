'use client'
import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';

const classNames = (...className) => {
  return className.filter(Boolean).join(' ');
}
const Page = () => {
  const tableStuff = {
    header: ['column1', 'column2', 'column3', 'column4',],
    row: [
      ['stuff1', 'stuff2', 'stuff3', 'stuff4'],
      ['stuff1', 'stuff2', 'stuff3', 'stuff4'],
      ['stuff1', 'stuff2', 'stuff3', 'stuff4'],
      ['stuff1', 'stuff2', 'stuff3', 'stuff4'],
    ]
  }
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white py-12 h-screen text-center flex-row">
      <div>
        <div className="mx-auto max-w2xl text-2xl">
          Commander's Dashboard
        </div>
        <div className="p-4">
          Commander's Dashboard aggregates data from multiple sources and displays it nicely.
        </div>
      </div>
      <iframe
        title="testingCD"
        width="1280"
        height="650"
        src="https://app.powerbi.com/reportEmbed?reportId=959b37d1-ac86-45c5-abf3-8f8d59edda88&autoAuth=true&ctid=612bb818-ec38-4e9b-884d-124123cd922c"
        frameBorder="0"
        allowFullScreen="true"
      ></iframe>
    </div>
  )
    ;
}

export default Page;
