import React from 'react';
import Map from 'react-map-gl';

const Mapbox = ({ handleClick }) => {
  return (
    <Map 
      initialViewState={{
        width: "fit",
        latitude: 14.5001717, 
        longitude:-14.4392276,
        zoom: 5.7,
        maxZoom: 14,
      }}
      style={{height: 400, borderRadius: 30}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken='pk.eyJ1Ijoic2FsM2t4IiwiYSI6ImNsYjRqMThvbDA4M2czc2xpeTMxbmJobnUifQ.zK6HN6qmcPiM13csqg3oxg'
      onClick={handleClick}
    />
  )
}

export default Mapbox
