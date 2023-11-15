'use client'

import React from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import map from '../../public/ocean.json'

const geoUrl = map;


function GeoMap() {
  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  )
}

export default GeoMap;