import { ReactNode } from 'react'
import Sidebar from '@/components/Sidebar';

const layout = (props) => {
  return (
    <div className="flex flex-row">
        <Sidebar />
      <div className="flex-grow overflow-y-auto">
        {props.children}
      </div>

    </div>
  );
}

export default layout;
