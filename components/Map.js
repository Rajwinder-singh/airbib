import { useState } from 'react';
import ReactMapGl, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { getCenter } from 'geolib';

function Map({ searchResults }) {

  const [selectedLocation, setSelectedLocation] = useState({});
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat
  }));

  const center = getCenter(coordinates);

  const [viewPort, setViewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitute: center.longitude,
    zoom: 11
  });

  return (
    <ReactMapGl
        mapStyle="mapbox://styles/rajwinders474/clf07cj2j003j01md65vi7wdp"
        mapboxAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
        {...viewPort}
        onViewportChange={(nextViewPort) => setViewPort(nextViewPort)}
    >

        {searchResults.map((result) => (
            <div key={result.long}>
                <Marker longitude={result.long} latitude={result.lat} offsetLeft={-20} offsetRight={-10} >
                    <p 
                        onClick={() => setSelectedLocation(result)}
                        className='cursor-pointer text-2xl animate-bounce'
                        aria-label='push-pin'
                    >
                        📌
                    </p>
                </Marker>

                {selectedLocation.long === result.long ? (
                    <Popup
                        onClose={() => setSelectedLocation({})}
                        closeOnClick={true}
                        longitude={result.long}
                        latitude={result.lat}
                    >
                        {result.title}
                    </Popup>
                ) : 
                    (false)
                }
            </div>
        ))}
    </ReactMapGl>
  )
}

export default Map;