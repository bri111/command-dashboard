'use client'

import React, { useState, useRef, useEffect } from 'react';
import Papa from 'papaparse';
import * as d3 from 'd3';

export const CG_G8 = () => {

  const svgRef = useRef();

  let labels = [];
  let ADOS = [];
  let title = "";
  let dataArray = [];
  let cleanData = [];
  let slider = 1;

  const [values, setValues] = useState([]);

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
        // console.log(values);
      }
    });
  }

  ////////  data code  ////////
  useEffect(() => {
    // slice data
    labels = values[0];
    if (labels) {
      labels = labels.slice(1);
    }

    ADOS = values[slider];
    if (ADOS) {
      ADOS = ADOS.slice(1);
      for (let a = 0; a < ADOS.length; a++) {
        ADOS[a] = parseFloat(ADOS[a].substring(2));
        console.log(ADOS[a]);
      }
    }
    // title = values[1].slice(0, 1);
    if (dataArray && labels) {
      dataArray = labels.map(function (value, index) {
        return [value, ADOS[index]]
      });
    }

    if (cleanData) {
      cleanData = dataArray.map(index => (
        {
          label: index[0],
          value: index[1]
        }
      ));
    }

    // console.log(labels);
    console.log(ADOS);
    console.log(dataArray);
    console.log(cleanData);
  });

  ////////  d3 code  ////////
  useEffect(() => {
    // set up container
    const w = 600;
    const h = 600;
    const svg = d3.select(svgRef.current)
      .attr('width', w)
      .attr('height', h)
      .style('overflow', 'visible');

    // set up X axis
    const xScale = d3.scaleBand()
      .domain(cleanData.map(d => d.label))
      .range([0, w])
      .padding(0.5);
    const xAxis = d3.axisBottom(xScale)
      .ticks(cleanData.length);
    svg.append('g')
      .call(xAxis)
      .attr("transform", `translate(0, ${h})`)

    // set up Y axis
    const yScale = d3.scaleLinear()
      .domain([0, 70])
      .range([h, 0]);
    const yAxis = d3.axisLeft(yScale);
    svg.append('g')
      .call(yAxis);

    svg.selectAll('.bar')
      .data(cleanData)
      .join('rect')
      .attr("x", d => xScale(d.label))
      .attr("y", d => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", d => h - yScale(d.value))
      .attr("fill", "#69b3a2")

  }, [cleanData]);

  return (
    <div className="container">
      <div className="text-2xl text-center">
        Budget Data
      </div>
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
      <svg ref={svgRef}></svg>
    </div>
  )
}

// results.data[0] = xAxis values
// first value of each array is the title