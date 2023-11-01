import React, { useState, useRef, useEffect } from 'react';
import Papa from 'papaparse';
import { Bar } from 'react-chartjs-2';

export const CG_G8 = () => {

  // const svgRef = useRef();

  const [values, setValues] = useState([]);
  const [ados, setAdos] = useState([]);
  const [xAxisVals, setXAxisVals] = useState([]);

  const parseCsv = (event) => {
    const csvFile = event.target.files[0];
    console.log(csvFile);

    Papa.parse(csvFile, {
      skipEmptyLines: 'greedy',
      complete: function (results) {
        console.log("Finished:", results.data);

        const valuesArray = [];
        results.data.map((d) => {
          valuesArray.push(Object.values(d));
        });

        setValues(valuesArray);
        console.log(values);

        setXAxisVals(valuesArray[0]);
        console.log(xAxisVals);

        setAdos(valuesArray[1]);
        console.log(ados);

      }

    });
  }



  return (
    <div className="container">
      {/* <div className="text-2xl text-center">
        G8 Content
      </div> */}
      <input
        type="file"
        id="file"
        accept=".csv"
        onChange={parseCsv}
        className='class="block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-gray-200 file:text-gray-700
        hover:file:bg-gray-300'
      />
      <div id="chart" className="ml-auto mr-auto text-center">
        {/* <svg ref={svgRef}></svg> */}
        {/* <Bar data={ados} /> */}
      </div>
    </div>
  )
}

// results.data[0] = xAxis values
// first value of each array is the title