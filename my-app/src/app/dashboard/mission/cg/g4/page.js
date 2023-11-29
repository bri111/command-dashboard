'use client'

import React from 'react';
import PieChart from '@/components/PieChart';
import LineChart from '@/components/LineChart';
import GeoMap from '@/components/GeoMap';
import Footer from '@/components/Footer';

const G4 = async ({ data }) => {

    let dates = []
    data.forEach((e) => {
        const tmpDate = e.date ? e.date.toISOString() : new Date('2023-11-01').toISOString();
        if (!dates.includes(tmpDate)) {
            dates.push(tmpDate)
        }
    });

    dates = dates.map(e => e.split('T')[0])

    const parseData = (data) => {
        let tmp3 = [];
        let dates = []
        data.forEach((e) => {
            const tmpDate = e.date ? e.date.toISOString() : new Date('2023-11-01').toISOString();
            if (!dates.includes(tmpDate)) {
                dates.push(tmpDate)
            }
        });
        console.log(dates)

        for (let i = 0; i < dates.length; i++) {
            const tmpResult = {}
            for (let j = 0 + (i * 150); j < 150 + (i * 150); j++) {
                tmpResult[data[j].operationalstatus] ? tmpResult[data[j].operationalstatus] += 1 : tmpResult[data[j].operationalstatus] = 1;
            }
            tmp3.push(tmpResult);
        }
        for (let i = 0; i < tmp3.length; i++) {
            tmp3[i] = Object.entries(tmp3[i]).map(e => {
                return {
                    name: e[0],
                    value: e[1],
                };
            });
        }
        return tmp3;

    }

    return (
        <div className="h-screen py-4">
            <div className="text-center font-bold text-3xl">Equipment Data</div>
            <div className='grid grid-cols-2 gap-3'>
                <div className="card card-side shadow-xl">
                    <div className="card-body flex">
                        <div className="justify-end rating">
                            <input type="checkbox" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                        </div>
                        <PieChart width={400} height={400} data={parseData(data)[3]} />
                    </div>
                </div>
                {/* <div className="m-8">
                        <LineChart data={parseData(data)} dates={dates} />
                    </div> */}
                <div className="card card-side shadow-xl">
                    <div className="card-body flex">
                        <div className="justify-end rating">
                            <input type="checkbox" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                        </div>
                        <LineChart data={parseData(data)} dates={dates} />
                    </div>
                </div>
                <div className="card card-side shadow-xl">
                    <div className="card-body flex">
                        <div className="justify-end rating">
                            <input type="checkbox" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                        </div>
                        <GeoMap data={parseData(data)} />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default G4;
