'use client'

import React from "react"
import BingMapsReact from "bingmaps-react";
import { ReactBingmaps } from 'react-bingmaps';

function GeoMap() {
  const pushPin = {
    center: {
      latitude: 27.987850,
      longitude: 86.925026,
    },
    options: {
      title: "Mt. Everest",
    },
  }
  const locations = [
    [21.33572394337736, -157.89079742694315, "hawaii"],
    [35.106044866133345, 129.08356748242733],
    [-20.28778063377151, 164.0981202238756],
    [21.336783253770108, -157.89174156454493],
  ]
  const pushPins = locations.map((e) => {
    return {
      center: {
        latitude: e[0],
        longitude: e[1],
      },
      options: {
        enableClickedStyle: true,
        title: "Hawaii :)"
      }
    }
  })
  return (
    <div>
      <BingMapsReact
        bingMapsKey={"An2z9jVMhbYf0V84BmpiAUvi1wu-ehFzRfNUwH1vsZp80CqixExpba1js-KMFdsz"}
        height="500px"
        pushPins={pushPins}
      mapOptions={{
        navigationBarMode: "square",
      }}
      width="500px"
      viewOptions={{
        center: { latitude: 21.33572394337736, longitude: -157.89079742694315, minZoom: 400 },
      }}
      />

    </div>
  )
}

export default GeoMap;