import Image from 'next/image'
import PieChart from '@/components/PieChart';

export default function Home() {
  const data = [
    {name: "mark", value: 150},
    {name: "jeff", value: 200},
    {name: "larry", value: 100},
    {name: "perry", value: 230},
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl text-center w-full items-center justify-between font-mono text-sm lg:flex">
        <PieChart width={500} height={500} data={data} />
      </div>
    </main>
  )
}
