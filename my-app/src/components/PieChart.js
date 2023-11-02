'use client'

import React, { useState, useRef, useEffect } from 'react';
import { EnvelopeOpenIcon } from '@heroicons/react/24/solid';
import { Bars3Icon, AdjustmentsHorizontalIcon, ChartBarIcon, CalendarIcon, PaperClipIcon, ChevronDoubleLeftIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import * as d3 from 'd3';


let csvData = [];

const readFile = () => {
  const file = document.getElementById('csv-file').files[0];
  const reader = new FileReader();
  console.log('wow');
  console.log(typeof file);
  reader.readAsText(file);
  reader.onload = (e) => {
    console.log('loaded');
    const rows = reader.result.split('\r\n');
    const split = rows.map(e => e.split(new RegExp(',(?=(?:[^\"]*\"[^\"]*\")*(?![^\"]*\"))')));
    console.log(split);
    csvData = split;
  }
}
const data2 = [
  {jeff: 20},
  {joe: 20},
  {alice: 20},
  {lop: 40},
]

var data3 = [
  { "value": 1, "property": "p1" },
  { "value": 2, "property": "p2" },
  { "value": 3, "property": "p3" },
  { "value": 4, "property": "p4" },
  { "value": 5, "property": "p5" },
  { "value": 6, "property": "p6" }
]

const data4 = [1, 1, 2, 3, 5, 8, 13, 21];

const PieChart = ({width, height, data}) => {
  const [help, setHelp] = useState(12);
  const svgRef = useRef();

  useEffect(() => {
    console.log(data);
    const w = 500;
    const h = 500;
    const radius = Math.min(width, height) / 2;
    // const radius = 100;
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('overflow', 'visible')

    const formattedData = d3.pie().value(d => d.value)(data);
    const arcGenerator = d3.arc().innerRadius(0).outerRadius(radius);
    const color = d3.scaleOrdinal().range(d3.schemeSet2);

    svg.selectAll()
      .data(formattedData)
      .join('path')
      .attr('d', arcGenerator)
      .attr('fill', d => color(d.value))
      .style('opacity', 0.7)
      .on('mouseover', (e, i) => {
        console.log('who');
        d3.select(this).transition()
          .style('opacity', '.2').duration('50');
      })
      .on('mouseout', (e, i) => {
        console.log('exit');
        d3.select(this).transition()
          .attr('opacity', '1').duration('50');
      })
    ;

    svg.selectAll()
      .enter()
      .data(formattedData)
      .join('text')
      .text(d => d.data.name)
      .attr('transform', d => `translate(${arcGenerator.centroid(d)})`)
      .style('text-anchor', 'center')
      .on('mouseover', (e, i) => {
        console.log('hello');
        d3.select(this).transition()
          .attr('opacity', '.85');
      });


  }, [height, width, data, help]);

  return (
    <div>
      <input id='csv-file' type='file' accept='text/csv' onChange={(e) => readFile(e)}/>
      <button onClick={() => setHelp(Math.random())}>reload</button>
      <div className="ml-auto mr-auto text-center">
        <svg className="translate-x-1/2 translate-y-1/2" ref={svgRef}></svg>
      </div>
      <div>{help}</div>
    </div>
  );
}

export default PieChart;