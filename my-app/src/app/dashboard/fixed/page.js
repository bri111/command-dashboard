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
          What is Commander's Dashboard
        </div>
        <div className="p-4">
          Commander's Dashboard aggregates data from multiple sources and displays it nicely.
        </div>
      </div>
      <div className="grid grid-flow-col text-center bg-blue-100">
        <div className="col-span-1">
          Cool stuff 1
        </div>
        <div className="col-span-1">
          <div>
            Cool stuff 2
          </div>
          <div>Blurb about information </div>
        </div>
        <div className="col-span-1">
          Cool stuff 3
        </div>
      </div>
      <div className="row-auto bg-amber-200 h-screen pt-5 mt-5">
        <div>FAQ</div>
        <div className="grid grid-flow-col">
          <div className="col-span1 flex justify-center">
            <div>
              Why is this part yellow?
            </div>
          </div>
          <div className="col-span1">
            Good question
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
