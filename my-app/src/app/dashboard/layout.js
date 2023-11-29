import { ReactNode } from 'react'
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

const layout = (props) => {
  return (
    <div>
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex-grow overflow-y-auto">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default layout;
