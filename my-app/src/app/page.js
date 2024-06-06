import Image from 'next/image'
import PieChart from '@/components/PieChart';
import Footer from '@/components/Footer';
import Dashboard from '@/app/dashboard/page';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  const cardInfo = [
    { name: 'Mission', href: '/dashboard/mission' },
    { name: 'Periodic', href: '/dashboard/periodic' },
    { name: 'Monthly', href: '/dashboard/monthly' },
  ]
  return (
   <main>
     <Sidebar />
     <Dashboard />

   </main>
  )
}