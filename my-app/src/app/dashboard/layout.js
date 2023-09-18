import { ReactNode } from 'react'
import Sidebar from '@/components/Sidebar';

const layout = (props) => {
  return (
    <div className="mx-auto flex flex-row">
      <Sidebar />
      <div className="flex-1 flex-col ml-64">
        {props.children}
      </div>

    </div>
  );
}

export default layout;
