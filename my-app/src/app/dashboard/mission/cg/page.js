import React from 'react';

import CG_TabSystem from '@/components/CG_TabSystem';

const classNames = (...className) => {
  return className.filter(Boolean).join(' ');
}

const Page = () => {

  return (
    <div className="container h-screen pt-8">
      <div className="text-4xl text-center font-bold">CG</div>
      <CG_TabSystem />
    </div>
  );
}

export default Page;
